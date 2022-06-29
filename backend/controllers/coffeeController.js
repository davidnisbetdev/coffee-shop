// @desc GET Coffee
// @route GET /api/coffee
// @access Private
const getCoffee = (req, res) => {
    res.status(200).json({ message: 'Get Coffee'})
}
// @desc ADD Coffee
// @route POST /api/coffee/
// @access Private
const addCoffee = (req, res) => {
    res.status(200).json({ message: "Set coffee" });
}

// @desc GET Coffee
// @route PUT /api/coffee/:id
// @access Private
const editCoffee = (req, res) => {
    res.status(200).json({ message: `Update coffee ${req.params.id}` });
}

// @desc GET Coffee
// @route DELETE /api/coffee/:id
// @access Private
const deleteCoffee = (req, res) => {
    res.status(200).json({ message: `Delete coffee ${req.params.id}` });
}

 module.exports = {
    getCoffee,
    addCoffee,
    editCoffee,
    deleteCoffee,
 }