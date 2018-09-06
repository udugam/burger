var connection = require('./connection.js')

var orm = {
    selectAll: function(tableName, callback) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString,[tableName],function(err,result) {
            if (err) throw err
            callback(result)
        })
    },
    //row data must be in what form? String?
    insertOne: function(tableName,rowData,callback) {
        var queryString = "INSERT INTO ?? SET ?" // INSERT INTO burgers SET ?
        connection.query(queryString,[tableName,rowData],function(err,result) {
            if(err) throw err
            callback(result)
        })
    },
    //column data must be in what form? String?
    updateOne: function(tableName,columnData,id,callback) {
        var queryString = "UPDATE ?? SET ? WHERE ?? = ?"
        connection.query(queryString,[tableName,columnData,"ID",id],function(err,result) {
            if (err) throw result
            callback(result)
        })
    }
}

module.exports = orm