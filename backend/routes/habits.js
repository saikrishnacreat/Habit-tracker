const express = require("express");
const router = express.Router();
const Habit = require("../models/Habits");

router.post('/', async(req,res)=>{
    const newHabit = new Habit(req.body);
    try{
        const savedHabit = await newHabit.save();
        res.status(201).json(savedHabit);
    } catch(err) {
        res.status(500).json(err);
    }

});

router.get('/', async(req,res) =>{
    try{
        const habits = await Habit.find();
        res.status(200).json(habits);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async(req,res)=>{
    try{
        const updatedHabit = await Habit.findByIdAndUpdate(req.params.id,req.body, { new:true });
        res.status(200).json(updatedHabit);
    } catch(err) {
        res.status(500).json(err);
    }
})

module.exports = router;