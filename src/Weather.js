import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";




export default function Weather (){
const[ready,setReady] = useState(false);
const[temperature, setTemperature]= useState(null);

   function handleResponse(response){
      console.log(response.data);
      setTemperature(response.data.main.temp);
      setReady(true);

   }
 if (ready){
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
        <h1>Harare</h1>
             <ul className="current">
                   <li> Thursday 2:22
                  </li>
                  <li className="text-capitalize">Mostly Sunny</li>
             </ul>
         <div className="row">
             <div className="col-6">
               <img src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="description" className="float-left"/>
                <span className="temperature">{temperature}</span><strong>°C</strong>
             </div>
                <div className="col-6">
                   <ul className="elements">
                     <li>
                       Precipitation : 10%
                     </li>
                    <li>
                       Humidity      : 2%
                    </li>
                       <li>
                      Wind Speed : 3km
                       </li>
                   </ul>
                 </div>
             </div>
        </div>);
     }
        
 else { 
   
 const apiKey ="80d346c6056f6360cf797883c461a37b";
 let city = "Harare";
 let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(handleResponse);
 
 return ("Loading")

}
}

