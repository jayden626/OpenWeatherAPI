import React from "react"
import useFetch from "../../hooks/useFetch"
import "./Weather.css"

const Weather = ({lat, lon}) => {

    const { data, error, loading, refetch } = useFetch(`http://localhost:5000/api/weather?lat=${lat}&lon=${lon}`)

    if( loading ) return <h1>Loading...</h1>
    if( error ) return <h1>Error</h1>
    console.log(data)
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