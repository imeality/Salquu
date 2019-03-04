var mysql = require('mysql');

var connection =mysql.createConnection({
    host    : 'localhost',
    user    : 'imeality',
    password: 'imeality',
    database:'employee'
});
connection.connect(function(err){
   
    if(err){
        console.log(err.code);
        console.log(err.fatal);

    }
});

module.exports = env;