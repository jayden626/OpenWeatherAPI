const mongoose = require('mongoose')

const currentWeatherSchema = mongoose.Schema({
    coord: {
        lat: Number,
        lon: Number
    },
    weather: [{
        id: Number,
        main: String,
        description: String,
        icon: String
    }],
    main: {
        temp: Number,
        feels_like: Number,
        temp_min: Number,
        temp_max: Number
    },
    dt: Number,
    timezone: Number,
    name: String,
    id: Number
},{
    timestamps: true
})

module.exports = mongoose.model('CurrentWeather', currentWeatherSchema)