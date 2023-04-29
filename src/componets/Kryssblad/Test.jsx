import React, { useState} from "react";
import styled from 'styled-components';

//----Mindfullness
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
    const MindfulnessHeader = styled(Topic)`
    grid-row: 2;
    background-color: gray;
    `;
    const RelHeader = styled(Topic)`
    grid-row: 10;
    background-color: gray;
    `;

    const FeelHeader = styled(Topic)`
    grid-row: 16;
    background-color: gray;
    `;

    const KrisHeader = styled(Topic)`
    grid-row: 27;
    background-color: gray;
    `;

    const ValHeader = styled(Topic)`
    grid-row: 39;
    background-color: gray;
    `;

const Test = () => {
    const topicOneMind = [
        
      "Observera - bara notera",
      "Beskriva - sätta ord på, bara fakta",
      "Delta - engagera dig helt i det du gör",
      "Icke värderande - observera dömmande tankar",
      "Göra en sak i taget - var här och nu",
      "Handla effektivt - gör det som fungerar"

    ];
    const topicTwoRel = [

        "Mål - få det jag vill ha och behöver(få något/säga något)",
        "Relation - skapa och bevara goda relationer",
        "Självrespekt - behålla min självrespekt",
        "Agera dialektiskt - välja gyllene medelvägen"
    ];

    const topicThreeFeel = [

        "Observera och beskriv känslor",
        "Kolla fakta - stämmer känslar/intensiteten",
        "Reglera känslor genom att handla tvärtemot",
        "Problemlösa för att förändra känslor",
        "Minska sårbarhet - Öka positiva upplevelser",
        "Minska sårbarhet - Bygga kompetens",
        "Minska sårbarhet - Öva inför svåra situatiner",
        "Minska sårbarhet - Ta hand om din kropp",
        "Surfa på känslan - medvetet närvarande i stundens känslor"
    ];

    const topicFourKris = [

        "STOPP-färdigheten",
        "För- och nackdelar",
        "TIPP-färdigheterna - att förändra kroppens kemi",
        "Distrahera dig",
        "Lindra med sinnesintryck - självtröst",
        "Förbättra nuet",
        "Lägg märke till  egensinne hos dig själv",
        "Radikal acceptans",
        "Småleende och villiga händer",
        "Villighet och medvetenhet om stundens tankar"
    ];

    const topicFiveVal = [

        "Självvalidering",
        "Validering av andra",
        "Lägga märke till invalidering av dig själv och andra"
    ];


    const daysOfWeek = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
  
    const [checked, setChecked] = useState(
      topicOneMind.reduce((acc, cur) => {
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
        <MindfulnessHeader row={1}>Mindfulness</MindfulnessHeader>
        {daysOfWeek.map((day, index) => (
          <div 
          key={day} 
          style={{textAlign: "center", fontWeight: "bold", gridColumn: index + 2 }}>
          {day}
          </div>
          
  ))}
        {topicOneMind.map((topic, index) => (
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
          <hr/>
         {/*------------------------------------------------------------------------------------------ */}
              
    <RelHeader row={2}>Relationsfärdigheter</RelHeader>
        {daysOfWeek.map((day, index) => (
          <div 
          key={day} 
          style={{textAlign: "center", fontWeight: "bold", gridColumn: index + 2 }}>
          {day}
          </div>
          
  ))}
        {topicTwoRel.map((topic, index) => (
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
        <hr/>
        {/*------------------------------------------------------------------------------------------ */}
       
        <FeelHeader row={2}>Reglera Känslor</FeelHeader>
        {daysOfWeek.map((day, index) => (
          <div 
          key={day} 
          style={{textAlign: "center", fontWeight: "bold", gridColumn: index + 2 }}>
          {day}
          </div>
          
  ))}
        {topicThreeFeel.map((topic, index) => (
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
        {/*------------------------------------------------------------------------------------------ */}
        <hr/>


        <KrisHeader row={2}>Stå ut i Kris</KrisHeader>
        {daysOfWeek.map((day, index) => (
          <div 
          key={day} 
          style={{textAlign: "center", fontWeight: "bold", gridColumn: index + 2 }}>
          {day}
          </div>
          
  ))}
        {topicFourKris.map((topic, index) => (
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
        {/*------------------------------------------------------------------------------------------ */}
        <hr/>

        <ValHeader row={2}>Validering</ValHeader>
        {daysOfWeek.map((day, index) => (
          <div 
          key={day} 
          style={{textAlign: "center", fontWeight: "bold", gridColumn: index + 2 }}>
          {day}
          </div>
          
  ))}
        {topicFiveVal.map((topic, index) => (
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
        {/*------------------------------------------------------------------------------------------ */}
        <hr/>



      </Grid>
    );
   
    

    };

    

    export default Test