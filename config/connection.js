var connection = require('mysql')

connection.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    port: "3306",
    database: "burger"
}) 

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
})

module.exports = connection