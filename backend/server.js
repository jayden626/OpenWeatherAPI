const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use('/api/weather', require('./routes/weatherRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

