const express = require('express')
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/weather', require('./routes/weatherRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

