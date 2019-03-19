// const env = require('./env');
// const Sequelize = require('sequelize');



// const sequelize =new Sequelize(env.database,env.user,env.password,{
//     host: env.host
// });

// const db = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// db.employee = re

// module.exports =db;


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

module.exports = connection;