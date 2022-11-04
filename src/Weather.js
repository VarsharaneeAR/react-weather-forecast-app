import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";




export default function Weather (){
const [ready, setReady] = useState(false);
const[weatherData, setWeatherData]= useState({ready:false});

   function handleResponse(response){
      console.log(response.data);
      setWeatherData({
        ready: true,
        temperature:response.data.main.temp,
        city: response.data.name,
        humidity: response.data.main.humidity,
        description:response.data.weather[0].description,
        wind: response.data.wind.speed,
        iconUrl: "https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
        date: "Friday 11:11",

      })
     
     

   }
 if (weatherData.ready){
   return(
      <div className="Weather">
        <form >
           <div className="row">
             <div className="col-9">
               <input type="search" placeholder="SEARCH CITY" className="form-control" 
               />
             </div>
           <div className="col-3">
                  <button type="submit" value="search" className="btn btn-dark">SEARCH</button>
           </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
             <ul className="current">
                   <li> date
                  </li>
                  <li className="text-capitalize">{weatherData.description}</li>
             </ul>
         <div className="row">
             <div className="col-6">
               <img src={weatherData.iconUrl} alt="weatherIcon" className="float-left"/>
                <span className="temperature">{Math.round(weatherData.temperature)}</span><strong>°C</strong>
             </div>
                <div className="col-6">
                   <ul className="elements">
                     <li>
                       Precipitation : ...
                     </li>
                    <li>
                       Humidity      : {weatherData.humidity} %
                    </li>
                       <li>
                      Wind Speed : {Math.round(weatherData.wind)} km/h
                       </li>
                   </ul>
                 </div>
             </div>
        </div>);
     }
        
 else { 
   
 const apiKey ="e947cb2640f1db92e6a19005bc43b435";
 let city = "Harare";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(handleResponse);
 
 return ("Loading")

}
}

