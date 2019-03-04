var express= require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var app = express();
const cors= require('cors');
//let config = require('./config');

var sql = require("./config.db");
let employee = require('./routes/employee.routes');
let hr = require('./routes/hr.routes');
let admin = require('./routes/admin.routes'); 

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));

//app.use(expressJwt({secret: 'secret key'}).unless({path: ['/api/login']}));

     
     app.use('/user',employee);
     app.use('/hr',hr); 
     app.use('/admin',admin);




  //-----------get qualification information api-----------------------

  app.get('/api/qualification/:emp_id', function(req,res){
      emp_id=13;
      var getQualification='select * from qualification where emp_id=?';
      sql.query(getQualification ,emp_id, function(err,results){
          if(err){
              return res.status(400).send("error in database"+err);
          }
          else{
              return res.status(200).json({
                  success: true,
                  message: "succusfull get data",
                  results: results
              });
          }
      })
  })
   
  
  var server = app.listen(2000, function () {
    console.log('Node server is running..');
});


    //----------------update employee by id--------------------

    // app.get('/me', function(req, res) {
    //     var token = req.headers['x-access-token'];
    //     if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        
    //     jwt.verify(token, config.secret, function(err, decoded) {
    //       if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
          
    //       res.status(200).send(decoded);
    //     });
    //   });