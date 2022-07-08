const mongoose = require('mongoose')

const coffeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a text value']
    },
    description: {
        type: String,
        required: [false, 'Please add a description']
    },
    cost: {
        type: Number,
        required: [false, 'Please add a cost value']
    }
})

module.exports = mongoose.model('Coffee', coffeeSchema)