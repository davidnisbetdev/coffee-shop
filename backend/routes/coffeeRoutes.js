const express = require('express')
const router = express.Router()
const { getCoffee, addCoffee, editCoffee, deleteCoffee } = require('../controllers/coffeeController')

router.route('/').get(getCoffee).post(addCoffee)
router.route('/:id').delete(deleteCoffee).put(editCoffee);

module.exports = router