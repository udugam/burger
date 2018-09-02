var orm = require("../config/orm.js")

var allBurgers = function() {
    orm.selectAll("burgers", function(result) {
        return result
    })
}

module.exports = allBurgers

//Add newBurger() and updateBurger