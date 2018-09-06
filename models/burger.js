var orm = require("../config/orm.js")

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result)
        })
    },
    addBurger: function(data, callback) {
        orm.insertOne("burgers",data, function(result) {
            callback(result)
        })  
    },
    updateBurger: function(data, id, callback){
        orm.updateOne("burgers",data,id,function(result) {
            callback(result)
        })
    }
}

module.exports = burger

//Add updateBurger