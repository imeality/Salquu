var mysql = require('mysql');
var express=require('express');
var app=express();
var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "root",
  database: "Task7"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

  app.get('/employee',(req,res)=>{
  var sql = "Select * from Employee";
  con.query(sql, function(err,data){
    if (err) throw err;
    res.send(data);
  });
})
app.post('/employee',(req,res)=>{
var sql = "INSERT INTO Employee(Eid,Ename,Esalary) VALUES ('1', 'wwwee', '520000')";
con.query(sql, function(err){
  if(err) throw err;
  res.send("Inserted");
});
})

app.delete('/employee/:id',(req,res)=>{
  con.query('Delete from Employee where Eid=?',req.params.id,function(err){
    if(err) throw err;
    console.log(err);
    res.send("Deleted");

  });
})

app.post('/employee/:id',(req,res)=>{
  con.query('Update Employee set Esalary=800000 where Eid=?',req.params.id,function(err){
 if(err) throw err;
 res.send("Updated");
  })

})
app.listen(8000);
/*var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'Task7',
    user     : 'admin',
    password : 'root',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

connection.query('SELECT Ename FROM Employee', function (error, results, fields) {
    if (error)
        throw error;

    results.forEach(result => {
        console.log(result);
    });
});

connection.end();/*

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response) {

   var pathname = url.parse(request.url).pathname;

   console.log("Request for " + pathname + " received.");

   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         response.writeHead(404, {'Content-Type': 'text/html'});
      } else {

         response.writeHead(200, {'Content-Type': 'text/html'});

         response.write(data.toString());
      }
      response.end();
   });
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');
var express = require('express');
var app = express();

app.get('/:id', function(req, res){
   res.send("Hello!"+req.params.id);
});

app.post('/node', function(req, res){
   res.send("You just called the post method '\n");
});
*/
