const express = require('express')
const AdminController = require('../controllers/AdminController')
console.log(AdminController)
const route = express.Router()

route.post('/register', AdminController.register)
route.post('/login', AdminController.login)

module.exports = route
