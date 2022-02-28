const express = require('express')
const router = express.Router()
const { getWeather } = require('../controllers/weatherController')

router.get('/:id', getWeather)

module.exports = router