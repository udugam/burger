var orm = require("../config/orm.js")

var allBurgers = function() {
    orm.selectAll("burgers", function(result) {
        return result
    })
}

//Add newBurger() and updateBurger