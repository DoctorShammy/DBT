import React, { useState } from 'react';
import { format, startOfWeek, addDays, addMonths, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay } from 'date-fns';
import './Kalender.css';

function Kalender() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = [];
  let day = startDate;
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      days.push(day);
      day = addDays(day, 1);
    }
  }

  const handlePrevMonth = () => {
    setCurrentDate(addMonths(currentDate, -1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>{'<'}</button>
        <h2>{format(currentDate, 'MMMM yyyy')}</h2>
        <button onClick={handleNextMonth}>{'>'}</button>
      </div>
      <div className="calendar-grid">
        {days.map((day, index) => (
          <div key={index} className={`calendar-day ${!isSameMonth(day, monthStart) ? 'disabled' : ''} ${isSameDay(day, new Date()) ? 'today' : ''}`}>
            <div className="calendar-day-number">{format(day, 'd')}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Kalender;