const asyncHandler = require('express-async-handler')

const Coffees = require('../models/coffeeModel')

// @desc GET Coffee
// @route GET /api/coffee
// @access Private
const getCoffee = asyncHandler(async (req, res) => {
    const coffee = await Coffees.find()
    
    res.status(200).json(coffee)
})
// @desc ADD Coffee
// @route POST /api/coffee/
// @access Private
const addCoffee = asyncHandler(async (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const coffee = await Coffees.create({
        name: req.body.name,
        // description: req.body.description,
        // cost: req.body.cost, 
    })

    res.status(200).json(coffee);
})

// @desc UPDATE Coffee
// @route PUT /api/coffee/:id
// @access Private
const editCoffee = asyncHandler(async (req, res) => {
    const coffee = await Coffees.findById(req.params.id)

    if(!coffee){
        res.status(400)
        throw new Error('Coffee not found')
    }


    const updatedCoffee = await Coffees.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedCoffee);
})

// @desc DELETE Coffee
// @route DELETE /api/coffee/:id
// @access Private
const deleteCoffee = asyncHandler(async (req, res) => {

const coffee = await Coffees.findById(req.params.id);

    if (!coffee) {
        res.status(400);
        throw new Error("Coffee not found");
    }
    await coffee.remove()
    res.status(200).json({ id: req.params.id });
})

 module.exports = {
    getCoffee,
    addCoffee,
    editCoffee,
    deleteCoffee,
 }