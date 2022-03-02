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
    
    return(
        <>
            <div className="weatherList__content">
                <Weather lat={-27.4705} lon={153.0260} setTimezone={setTimezone1}/>
                {/* <Weather lat={-33.8679} lon={151.2073} setTimezone={setTimezone2}/> */}
                <Weather lat={-34.9285} lon={138.6007} setTimezone={setTimezone2}/>
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