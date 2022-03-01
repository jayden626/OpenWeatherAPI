const mongoose = require('mongoose')

const dailySchema = mongoose.Schema({
    coord:{
        lat: Number,
        lon: Number
    },
    weather: {
        main: String,
        description: String
    },
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
})

module.exports = mongoose.model('Daily', dailySchema)