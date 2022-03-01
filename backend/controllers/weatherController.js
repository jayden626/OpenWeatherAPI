const asyncHandler = require('express-async-handler')
const fetch = require('node-fetch')
const API_KEY = process.env.API_KEY
const cacheTime = 600 //weather is updated every 10 minutes

// Model
const CurrentWeather = require('../models/currentWeatherModel')

// @desc    Gets the current weather, stores in cache
// @route   GET /weather
// @param   lat: Number, required, latitude to get weather for
// @param   lon: Number, required, longitude to get weather for
const getCurrentWeather = asyncHandler(async (req, res) => {
    //get and validate data
    let lat = req.query.lat
    let lon = req.query.lon
    if(!(lat && lon)){
        res.status(400)
        throw new Error('Please send both Lat and Lon')
    }

    //Get the most recent cache and check if it is current
    const currentWeatherCache = await CurrentWeather.findOne({ 'coord.lat': lat, 'coord.lon': lon }).sort({createdAt: -1})
    if(currentWeatherCache && currentWeatherCache.dt+cacheTime > (Date.now()/1000)) {
        //cache is current, return it
        console.log("Cache found")
        res.status(200).json(currentWeatherCache)
        return 
    }

    console.log("fetching from API")
    //otherwise, fetch and store the current weather
    const fetchWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}&lat=${lat}&lon=${lon}`)
    if( await fetchWeather.status != 200){
        throw new Error('Could not retrieve current weather')
    }

    //store the current weather and return result
    const currentWeather = await fetchWeather.json()
    CurrentWeather.create(currentWeather)
    res.status(200).json(currentWeather)
})

module.exports = {
    getCurrentWeather
}