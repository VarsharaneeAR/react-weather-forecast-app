import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){

return(
 <div className="WeatherInfo">

<h1>{props.data.city}</h1>
             <ul className="current">
                   <li> <FormattedDate date={props.data.date}/>
                  </li>
                  <li className="text-capitalize">{props.data.description}</li>
             </ul>
         <div className="row">
             <div className="col-6">
             <div className="d-flex">
                 <img src={props.data.iconUrl} alt="weatherIcon" className="float-left"/>
                 <WeatherTemperature celsius={props.data.temperature} />
             </div>
             </div>
                <div className="col-6">
                   <ul className="elements">
                   <li>
                      WIND SPEED : {Math.round(props.data.wind)} km/h
                       </li>
                    <li>
                       HUMIDITY     : {props.data.humidity} %
                    </li>
                   </ul>
                 </div>
             </div>
             </div>);
        


}