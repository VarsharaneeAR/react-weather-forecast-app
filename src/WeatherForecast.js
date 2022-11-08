import React, {useState,useEffect} from "react";
import  "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


 export default function WeatherForecast(props){
    let[loaded, setLoaded]=useState(false);
    let[forecast,setForecast]=useState(null);


    useEffect(() => {
        setLoaded(false);
    },[props.coordinates]);

    function handleResponse(response){
     setForecast(response.data.daily);
     setLoaded(true);
    }

     if(loaded){
        return(
            <div className="WeatherForecast">
              <div className="row">
                {forecast.map(function(dailyForecast,index){
                    if (index<5){
                 return(
                    <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast}/>
                   </div>
                 );
                }
                return null;
                })}
               </div>
             </div>
        );
     }else{

        let lon = props.coordinates.lon;
        let lat=-props.coordinates.lat;
        let apiKey ="e947cb2640f1db92e6a19005bc43b435";
        let apiUrl=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&apiKey=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    
        return(null);
    
    }
}