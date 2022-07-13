const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register New User
// @route POST /api/users
// @access Public

const registerUser = asyncHandler (async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields!')
    }

    res.json({ message: 'Resigter user' })
})

// @desc Authenticate a User
// @route POST /api/login
// @access Public

const loginUser = asyncHandler (async (req, res) => {
    res.json({message: 'login User'})
})

// @desc Get User Data
// @route GET /api/users/me
// @access Public

const getMe = asyncHandler (async (req, res) => {
    res.json({message: 'User Data Display'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}