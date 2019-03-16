var express= require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var app = express();
const cors= require('cors');
let config = require('../config');
let middleware = require('../middleware');
var sql = require("../config.db");

let date = require('date-and-time');

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));

//----------------------employee login---------------
router.post("/login",function(req,res){
          
      
    // var user=req.body.username;
    // var pass=req.body.password;
     var pass="123456";
   var user = "shubham25@gmail.com"
    
     var sql1='select * from employee where emp_email="'+user+'" and password="'+pass+'"';
     
     sql.query(sql1, function(error, results,fields){
         if ( error ){
             return res.status(400).send('Error in database operation');
         } else {
            
            
             if(results.length >0){

                var d = new Date();
                
                var time=date.format(d,'hh:mm:ss');
               var currentdate =d.toISOString().slice(0,10)
                     var token = jwt.sign({user:user},config.secret,{expiresIn: '2h'});
                     var emp_id=results[0].emp_id
                    var logintimequery='insert into userLog(emp_id,date,login_time) values("'+emp_id+'","'+currentdate+'","'+time+'")';
                    
                      sql.query(logintimequery,function(err,results){
                          if(err){
                              return res.status(400).send("error"+err);
                          }
                          else{
                            return res.status(200).json({
                                success: true,
                                message: 'Authentication successful!',
                                token: token,
                                
                              });
                          }
                      })
           }
         else{
            return res.send({
                 "code": 204,
                 "success" : "email pass is not incorrect"
             });
         }
           
      }
         
     });
 });


 //----------------send mail api-----------------

 router.post('/mail',function(req,res){
    
     var data=req.body;
     sql.query('INSERT INTO mail SET ?',data,function(err,results){
         if(err){
            return res.status(400).send("error in database"+err);
         }
         else{
            return res.status(200).json({
                success:true,
                message:"succuful insert record",
                results:results
            });
         }
     })
 })

 //------------------get mail by id-------------

 router.get('/mail/:userID',function(req,res){
     var id= req.params.userID;

     sql.query("select * from mail where emp_id=?",[id],function(err,results){
         if(err){
             return res.status(400).send("error in database"+err);
         }
         else{
             if(results.length <= 0){
                 return res.send("record not found");
             }else{
             return res.status(200).json({
                 success:true,
                 message:"get records",
                 results:results
             })
            }
         }
     })
 })



 //----------------------employee leave resquest api----------------------

 router.post('/requests',function(req,res){
     var data= req.body;

     sql.query("INSERT INTO emp_leave_history SET ?",data,function(err,results){
         if(err){
            return res.status(400).send("error in database"+err);
         }else{
            return res.status(200).send("record inserted"); 
         }
     })
 })
module.exports =router;