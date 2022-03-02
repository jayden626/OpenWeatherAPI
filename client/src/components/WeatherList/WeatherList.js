import React, {useState, useEffect} from "react";

import Weather from "../Weather/Weather";
import './WeatherList.css'


// Weather List component to display multiple weather components
const WeatherList = () => {
    //a state for each timezone
    const [timezone1, setTimezone1] = useState(null)
    const [timezone2, setTimezone2] = useState(null)
    //calculate the time difference between them
    let timeDifference = calculateTimezoneDifference(timezone1,timezone2)

    // You may uncomment one of these lines to change which cities are being observed
    // let coords = [{lat:-27.4705, lon:153.0260}, {lat:-34.9285, lon:138.6007}] //Brisbane - Adelaide
    // let coords = [{lat:21.3156, lon:-157.8580}, {lat:-33.8679, lon:151.2073}] //Honolulu - Sydney
    let coords = [{lat:-32.9166, lon:151.7500}, {lat:49.2462, lon: -123.1162}] //Newcastle, NSW - Vancouver
    
    return(
        <>
            <div className="weatherList__content">
                <Weather lat={coords[0].lat} lon={coords[0].lon} setTimezone={setTimezone1}/>
                <Weather lat={coords[1].lat} lon={coords[1].lon} setTimezone={setTimezone2}/>
            </div>
            <div>
                <p>Time difference</p>
                <p>{timeDifference != null ? timeDifference : "Loading..."}</p>
            </div>
        </>
    )
}

//takes in two numbers (as UTC timezone offsets in seconds) and returns a formatted string with their difference
const calculateTimezoneDifference = (a, b) => {
    const hours = Math.floor((a-b)/60/60)
    const minutes = (a-b)/60%60
    return `${hours < 0 ? "-" : ""}${hours ? Math.abs(hours)+"h" : ""} ${minutes ? Math.abs(minutes)+"m" : ""}` 
}


export default WeatherList