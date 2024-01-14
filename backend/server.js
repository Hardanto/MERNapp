require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
// to request body for posts
app.use(express.json())

// 
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
// landing
app.use('', (req, res) => {
    res.json({mssg: 'Welcome to the landing page'})
})
// workout routes
app.use('/api/workouts', workoutRoutes)

// connect mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & Listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

