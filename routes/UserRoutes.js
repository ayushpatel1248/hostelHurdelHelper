const express = require('express')
const router = express.Router()
const UserController = require("../controllers/UserController")

router.post('/getUserData' , UserController.getUserData)

module.exports = router 