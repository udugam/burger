var connection = require('./connection.js')

var orm = {
    selectAll: function(tableName, callback) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString,[tableName],function(err,result) {
            if (err) throw err
            console.log(result)
            callback(result)
        })
    },
    //row data must be in what form? String?
    insertOne: function(tableName,rowData,callback) {
        var queryString = "INSERT INTO ?? SET ??"
        connection.query(queryString,[tableName,rowData]),function(err,result) {
            if(err) throw err
            console.log(result)
            callback(result)
        }
    },
    //column data must be in what form? String?
    updateOne: function(tableName,columnData,id,callback) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?"
        connection.query(queryString,[tableName,],function(err,result) {
            if (err) throw result
            console.log(result)
            callback(result)
        })
    }
}