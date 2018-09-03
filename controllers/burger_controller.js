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

module.exports = router