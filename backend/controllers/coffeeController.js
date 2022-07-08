const asyncHandler = require('express-async-handler')

// @desc GET Coffee
// @route GET /api/coffee
// @access Private
const getCoffee = asyncHandler((req, res) => {

    
    res.status(200).json({ message: 'Get Coffee'})
})
// @desc ADD Coffee
// @route POST /api/coffee/
// @access Private
const addCoffee = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({ message: "Set coffee" });
})

// @desc GET Coffee
// @route PUT /api/coffee/:id
// @access Private
const editCoffee = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update coffee ${req.params.id}` });
})

// @desc DELETE Coffee
// @route DELETE /api/coffee/:id
// @access Private
const deleteCoffee = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete coffee ${req.params.id}` });
})

 module.exports = {
    getCoffee,
    addCoffee,
    editCoffee,
    deleteCoffee,
 }