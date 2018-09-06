var express = require('express')
var router = express.Router()

var burger = require('../models/burger.js')

//Home Route
router.get('/', function(req,res){
    burger.all(function(data) {
        console.log(data)
        var hbsObj = {
            burgers: data
        }
        res.render('index',hbsObj)
    })
})

//New Burger Post Route
router.post('/api/burger', function(req,res) {
    var burgerData = req.body
    burger.addBurger(burgerData, function(response){
        res.json(true)
    })
})

//New Burger Update Route
router.post('/api/burger/:id', function(req,res) {
    var burgerData = req.body
    console.log(req.params.id)
    burger.updateBurger(burgerData, req.params.id, function(response){
        res.json(true)
    })
})

module.exports = router