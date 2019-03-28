var express= require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var app = express();
const cors= require('cors');
let config = require('./config');

var sql = require("./config.db");


app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));

//----------------------employee login---------------
app.post("/api/login",function(req,res){
          
      
     var user=req.body.username;
     var pass=req.body.password;
    
    
     var sql1='select * from regis where email="'+user+'" and password="'+pass+'"';
     
     sql.query(sql1, function(error,results){
         if (error){
             return res.status(400).send('Error in database operation');
         } else {
           
             if(results.length > 0){

                     var token = jwt.sign({user:user},config.secret,{expiresIn: '2h'});
                      
                              console.log(token);
                            return res.status(200).json({
                                success: true,
                                message: 'Authentication successful!',
                                token: token,
                                
                              });
                       
           }
         else{
            return res.send({
                 "code": 204,
                 "success" : "email pass is incorrect"
             });
         }
           
      }
         
     });
 });


 //----------registration api--------


 app.post("/api/regis",function( req, res){
           var firstName = req.body.firstname;
           var lastName = req.body.lastname;
           var email = req.body.email;
           var password = req.body.password;
           var mobile = req.body.mobile;



        
           var sql2='insert into regis(firstname,lastname,email,password,mobile) values("'+firstName+'","'+lastName+'","'+email+'","'+password+'","'+mobile+'")';

           sql.query(sql2, function(error){
               if(error){
                  return res.status(400).send('Error in database');
               }else{
                  
                return res.status(200).json({fname: firstName});
               }
           })
   });


 var server = app.listen(2000, function () {
    console.log('Node server is running..');
});
