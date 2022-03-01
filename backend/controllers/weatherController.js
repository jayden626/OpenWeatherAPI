const asyncHandler = require('express-async-handler')

const Daily = require('../models/dailyModel')

const getWeather = asyncHandler(async (req, res) => {
    // if(!req.params.id){
    //     res.status(400)
    //     throw new Error('Please add an ID')
    // }
    res.status(200).json({ message: `weather got for ${req.params.id}` })
})

module.exports = {
    getWeather
}