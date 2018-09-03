var orm = require("../config/orm.js")

var burger = {
    all: function(callback) {
        orm.selectAll("burgers", function(result) {
            callback(result)
        })
    }
}

module.exports = burger

//Add newBurger() and updateBurger