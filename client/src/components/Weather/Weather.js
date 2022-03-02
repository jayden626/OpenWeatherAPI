import React, { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import "./Weather.css"

// Individual weather component.
// takes a lat, a lon, and a function to pass the timezone to the parent
const Weather = ({lat, lon, setTimezone}) => {

    //fetch the data from the server
    const { data, error, loading } = useFetch(`http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`)

    //set the timezone if exists
    useEffect(_=>{
        setTimezone(data?.timezone);
    }, [data]);

    //check loading and errors
    if( loading ) return <h1>Loading...</h1>
    if( error ) return <h1>Error</h1>
    
    //otherwise display the component
    if( data ){
        return (
            <div className="weather__container">
                <div className="weather__content">
                    <div className="weather__title">
                        <h1>{data?.name}</h1>
                        <div className="weather__info">
                            <img src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`} className="weather__icon"/>
                            <div>{data?.main?.temp}°C</div>
                        </div>
                    </div>
                    <div className="weather__additional_info">
                        <div>
                            <p>Min</p>
                            <p>{data?.main?.temp_min}°C</p>
                        </div>
                        <div>
                            <p>Max</p>
                            <p>{data?.main?.temp_max}°C</p>
                        </div>
                        <div>
                            <p>Feels like</p>
                            <p>{data?.main?.feels_like}°C</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return <h1>Loading...</h1>
}

export default Weather