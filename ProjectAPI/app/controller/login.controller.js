var express= require('express');
var bodyParser = require('body-parser');
var db = require('../config/db.config');
const jwt = require('jsonwebtoken');
const config =require('../config');
let date = require('date-and-time');
const Login = db.employees;
var app = express();
const cors = require('cors');

const userlog = db.userlog;

//----find One-

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));

//--------function for check valid mail and password-----
function isValid (empEmail,password) {
    return db.employees.count({ where: { empEmail: empEmail,password:password } })
      .then(count => {
        if (count == 0) {
          return false;
        }
       
        return true;
    });
}


//-----function for insert login and logout time-------

function logtime(id){
    
        var d =new Date();
        
        var time = date.format(d,'hh:mm:ss');
        var currentdate = d.toISOString().slice(0,10);
   
       userlog.create({
              empId:id,
              loginDate:currentdate,
              loginTime:time,
              status:"Active"
       }).then(userlog=>{
            console.log(userlog);
          
       }).catch(err=>{
             console.log(err);
       })
 
}




//-------employee login with insert login time ,date and token generated
exports.findOne=(req,res)=>{

   
    var username = req.body[0].username;
    console.log(req.body);
    var password = req.body[1].password
    console.log(password);
    isValid(empEmail,password).then(isValid => {
        if (isValid) {
            var token = jwt.sign({empEmail:username},config.secret,{expiresIn: '5h'});
            
            Login.findOne().then(login=>{
               
                var id=login.id;
                logtime(id);
                
                return res.json(
                    {login:login,
                    "token":token,
                     id:id});

            })
           
        }
        else{
            return res.send("login failed");
           
        }
    })
    .catch(err=>{
        res.status(500).send("error"+err);
    })

};

