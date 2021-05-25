const mongoose = require('mongoose')
const dotenv = require('dotenv')
const url = process.env.URL



//Controllers Methods

//For Home
exports.getHome = (req,res)=>{
    res.render('index')
}

//For Login
exports.getLogin = (req,res)=>{
    res.render('login')
}

//for Register
exports.getRegister = (req,res)=>{
    res.render('register')
}

//for Dashboard
exports.getDashboard = (req,res)=>{
    res.render('dashboard')
}

