import React, { useState} from "react";
import "./Kryssblad.css"
import styled from 'styled-components';

const Grid = styled.div`
display: grid;
grid-template-columns: auto repeat(7, 1fr);
grid-template-rows: repeat(4, auto);
gap: 8px;
align-items: center;
`;

const Header = styled.div`
grid-column: 2 / -1;
    font-weight: bold;
    text-align: center;
`;
const Topic = styled.div`
  grid-column: 1/2;  
  rid-row: ${(props) => props.row};
  font-weight: bold;
  text-align: right;
  padding-right: 8px;
  
`;
const CheckboxWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    `;
 const Checkbox =styled.input`
    margin: 0;
    `;

// const Kryssblad = () => {
    // const topics = ['Mindfulness', 'Relationsfärdigheter', 'Reglera Känslor', 'Stå ut i Kris', 'Validering'];
    // const daysOfWeek = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];
  
    // const [checked, setChecked] = useState({});
  
    // const handleCheckboxChange = (event) => {
    //   const { name, checked } = event.target;
    //   setChecked((prevState) => ({ ...prevState, [name]: checked }));    
    // };
    const Kryssblad = () => {
        const topics = [
          "Mindfulness",
          "Relationsfärdigheter",
          "Reglera Känslor",
          "Stå ut i Kris",
          "Validering",
        ];
        const daysOfWeek = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
      
        const [checked, setChecked] = useState(
          topics.reduce((acc, cur) => {
            daysOfWeek.forEach((day) => {
              acc[`${cur}-${day}`] = false;
            });
            return acc;
          }, {}) //Creates an object with a property for each combination of topic and day of the week, with the initial value of false for each one.
        );
      
        const handleCheckboxChange = (event) => {
          const { name, checked } = event.target;
          setChecked((prevState) => ({ ...prevState, [name]: checked }));
        };
  
    return (
       <Grid>
          { <Header></Header> }
          {daysOfWeek.map((day, index) => (
            <div 
            key={day} 
            style={{textAlign: "center", fontWeight: "bold", gridColumn: index + 2 }}>
            {day}
            </div>
            
    ))}
          {topics.map((topic, index) => (
            <React.Fragment key={topic}>
              <Topic row={index +2}>{topic}</Topic>
              {daysOfWeek.map((day, index) => ( 
                <CheckboxWrapper key={`${topic}-${day}`}>
                  <Checkbox type="checkbox" 
                  name={`${topic}-${day}`} 
                  checked={checked[`${topic}-${day}`]} 
                  onChange={handleCheckboxChange} />
                </CheckboxWrapper>
              ))}
            </React.Fragment>
          ))}
        </Grid>
      );
  };
   
  
export default Kryssblad