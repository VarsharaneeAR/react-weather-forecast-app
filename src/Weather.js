import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather (props){
const[weatherData, setWeatherData]= useState({ready:false});
const [city, setCity] = useState(props.defaultCity);

   function handleResponse(response){
      console.log(response.data);
      setWeatherData({
        ready: true,
        temperature:response.data.main.temp,
        city: response.data.name,
        humidity: response.data.main.humidity,
        description:response.data.weather[0].description,
        wind: response.data.wind.speed,
        iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        date: new Date(response.data.dt*1000),

      });
     }
  
     
     function handleSubmit(event){
      event.preventDefault();
      search();
    }

    function handleCityChange(event){
    setCity(event.target.value);
    }

      function search(){
        const apiKey ="e947cb2640f1db92e6a19005bc43b435";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
      }
 
 if (weatherData.ready){
   return(
      <div className="Weather">
        <form onSubmit={handleSubmit}>
           <div className="row">
             <div className="col-9">
               <input type="search" placeholder="SEARCH CITY" className="form-control" onChange={handleCityChange}
               />
             </div>
           <div className="col-3">
                  <button type="submit" value="search" className="btn btn-dark" >SEARCH</button>
           </div>
            </div>
        </form>
        < WeatherInfo data={weatherData} />
        </div>);
     
        
    } else { 
     search();
     return ("Loading");
}
}
