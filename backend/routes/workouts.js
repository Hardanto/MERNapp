const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// GET a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workouts'})
})

// POST a single workout
router.post('/', async (req, res) => {
    
    // the body
    const {title, load, reps} = req.body

    try {
        
        // grab the details
        const workout = await Workout.create({title, load, reps})
        
        // send a status and send back json
        res.status(200).json(workout)

    }catch (error) {
        
        // if there is an error, send the error back
        res.status(400).json({error: error.message})
    }
    res.json({mssg: 'POST a single workout'})
})

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETED a workout'})
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATED a workout'})
})

module.exports = router