const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// Routes
const counterRoute = require('./routes/counter.route')

// Connect to Mongo
const mongoDB = process.env.MONGO
mongoose.connect(mongoDB, { useNewUrlParser: true })
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

// API
app.use('/api', counterRoute)

let port = process.env.PORT || 80
app.listen(port, () => {
    console.log('Server is running on port ' + port)
})