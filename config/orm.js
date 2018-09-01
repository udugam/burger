var connection = require('./connection.js')

var orm = {
    selectAll: function(tableName) {
        var queryString = "SELECT * FROM ??"
        connection.query(queryString,[tableName],function(err,result) {
            if (err) throw err
            console.log(result)
            return result
        })
    },
    //row data must be in what form? String?
    insertOne: function(tableName,rowData) {
        var queryString = "INSERT INTO ?? SET ??"
        connection.query(queryString,[tableName,rowData]),function(err,result) {
            if(err) throw err
            console.log(result)
            return result
        }
    },
    //column data must be in what form? String?
    updateOne: function(tableName,columnData,id) {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?"
        connection.query(queryString,[tableName,],function(err,result) {
            if (err) throw result
            console.log(result)
            return result
        })
    }
}