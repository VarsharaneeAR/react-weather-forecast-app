import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
     
     <div className="container">
  
     <Weather defaultCity="Harare"/>

     <footer>
      This application was coded by <a href="https://www.shecodes.io/graduates/21150-varsharanee-roopun" target="_blank" rel="noreferrer"> VarsharaneeAR  </a> and is {""}
     <a href="https://github.com/VarsharaneeAR/react-weather-forecast-app" target="_blank" rel="noreferrer">open-sourced on Github</a>
      
    </footer>
    </div>
    </div>
  );
}


