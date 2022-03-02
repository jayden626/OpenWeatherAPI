const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

//set up the app
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set up the weather api
app.use('/api/weather', require('./routes/weatherRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))

