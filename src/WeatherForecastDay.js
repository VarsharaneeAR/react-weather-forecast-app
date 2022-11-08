import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){
function maxTemperature(){
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
}

function minTemperature(){
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
}

function day(){

    let date = new Date(props.data.dt*1000);
    let day = date.getDay();

    let days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

    return days[day];
}

return(

    <div className="WeatherForecastDay">
      <div className="forecastDay">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} />
            <div className="forecastTemperatures">
                <span className="maxTemperature">{maxTemperature()}°{""}|</span>
                <span className="minTemperature">{minTemperature()}°</span>
            </div>
    </div>
)

}