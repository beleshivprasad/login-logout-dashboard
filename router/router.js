const express = require('express')

const router = express.Router()

//Importing the controller
const controller = require("../controller/controller")


//Routes for Getting the pagesegment

//Get Home Page
router.get("/",controller.getHome)
//Get Login Page
router.get("/login",controller.getLogin)
//Get Register Page
router.get("/register",controller.getRegister)
//Get Login Page
router.get("/register",controller.getDashboard)


module.exports = router