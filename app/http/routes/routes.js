const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
    res.render('index')
})

Router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

 module.exports = Router