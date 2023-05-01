import React from 'react';
import Logo from "/src/img/Logo.jpg"
import "./HomePage.css"
import {Route, Link  } from 'react-router-dom';

function HomePage(){

    return(
    <div className="homepage">
      <div className="header">
        <img src={Logo} alt="My App Logo" className="logo" />
       <hr className='hrline'/>
        <div className="buttonbox">
        <div>
            <Link to= "/kryssblad" className="buttonOne">
              Kryssblad
              </Link>
        </div>
        <div>
            <Link to= "/veckokort" className="buttonOne">
              Veckokort
              </Link>
        </div>
        <div>
            <Link to= "/kalender" className="buttonOne">
              Kalender
              </Link>
        </div>
        </div>
        <hr/>
      </div>
      <div className="body">
        <h2>DBT (Dialektisk beteendeterapi)</h2>
        <div>
          <p>Denna sida är en kompliment till din DBT terapi där du kan lätt hålla koll på din dokumentatio
            och även få en överblick över din vecka utan papper.
          </p>
        </div>
        <div>
          
          <h4>Målgrupp</h4>
          <p>Självmordsnära och självskadande personer med emotionellt instabil personlighetsstörning</p>
          <p>Metoden utvecklades av den amerikanska psykologen Marsha Linehan under 1990-talet. Den började användas i Sverige 1998 inom ramen för en studie vid Karolinska Institutet.</p>
        </div>
        <div>
          <h4>Syfte</h4>
          <p>DBT syftar primärt till att minska självmords- och självskadebeteenden men även andra beteenden som stör eller försvårar behandlingen och som allvarligt påverkar livskvaliteten. På längre sikt är syftet att lära patienten att hitta en inre emotionell balans, hantera sin vardag på ett bättre sätt och få en meningsfull tillvaro.</p>
        </div>
        <div>
          <h4>Innehåll och genomförande</h4>
          <p>Liksom annan kognitiv beteendeterapi (KBT) grundas DBT på inlärningsteori och kognitiv teori, men med ett särskilt fokus på emotionsteori.
             Ett centralt KBT-antagande är att beteenden, tankar och känslor är nära förbundna med varandra och att förändring av exempelvis beteenden leder till förändring i tankar och känslor. 
             DBT innefattar även influenser från zenbuddhistisk filosofi såsom träning i medveten närvaro (eng. mindfulness) 
             och är en av de terapiformer som brukar kallas ”tredje vågens KBT” eller kontextuell KBT. 
             Termen ”dialektisk” speglar de två polerna acceptans och förändring, som båda ses som nödvändiga i behandlingen. 
             Terapeuten bekräftar, stöttar och accepterar patienten där hon befinner sig för stunden och leder henne samtidigt framåt genom att ge konkreta verktyg till förändring.
             Patienten å sin sida lär sig att använda tekniker som underlättar acceptans och förändring.
             Patienter som bestämmer sig för att delta i DBT förbinder sig att närvara vid de behandlingstillfällen som ingår. Kring varje patient finns ett multidisciplinärt DBT-team som arbetar under kontinuerlig handledning. Behandlingen innefattar veckovis färdighetsträning i grupp och individuell terapi. Patienten kan även nå sin individuella terapeut på telefon mellan träffarna, för att få hjälp att undvika destruktivt beteende. Den gruppbaserade färdighetsträningen syftar till att lära sig hantera och stå ut med svåra känslor utan att ta till destruktiva beteenden. Man tränar medveten närvaro, sociala färdigheter, känsloreglering och att stå ut i kris. I den individuella terapin arbetar man med det som för tillfället utgör det största problemet i patientens liv. Om självskadande handlingar har förekommit sedan förra tillfället prioriterar man dessa framför allt annat. Beteendeanalys används för att identifiera vad som föregått, utlöst och förstärkt handlingen, vilka alternativa strategier som kunde ha använts i situationen och vad som försvårar deras användning. I takt med att patienten blir mer emotionellt stabil kan livshändelser, särskilt av traumakaraktär, bearbetas och man börjar jobba mot patientens individuella mål.</p>
        </div>
      </div>
      </div>
    );
}

export default HomePage;