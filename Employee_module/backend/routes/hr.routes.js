
var express= require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var app = express();
const cors= require('cors');
//let config = require('../config');
let middleware = require('../middleware');
var sql = require("../config.db");
var router = express.Router();

app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));


router.post('/user',function(req,res){
    var first_name="shubhm";
    var last_name="sharma";
    var emp_mobile=7566193913;
    var emergency_contact=9874563210;
    var dep_name="sales";

   var emp_email="shubham25@gmail.com" ;
   var password="123456";
   var local_address="vijay nagar";
   var permanent_address="near mahakal mandir";
  
   var marital_status="no";
   
   var city="ujjain";
   var state="mp";
   var dob="2019-02-18";
   var gender="male";
   var country ="india";
   var zip_code=456006;
   var joining_date="2019-02-18";
   var emp_img="path";
   var permission="employee";
   
   var checkemailquery='select emp_email from employee where emp_email="'+emp_email+'"';


   sql.query(checkemailquery,function(err, results){

               
                if(err){
                    return res.status(400).send("error in data base");
                }
                else{
                    if(results.length==0){
                      var sql2 = 'insert into employee(first_name,last_name,emp_mobile,emergency_contact,dep_name,emp_email,password,joining_date,local_address,permanent_address,marital_status,city,state,country,dob,gender,zip_code,emp_img,permission) values("'+first_name+'","'+last_name+'","'+emp_mobile+'","'+emergency_contact+'","'+dep_name+'","'+emp_email+'","'+password+'","'+joining_date+'","'+marital_status+'","'+local_address+'","'+permanent_address+'","'+city+'","'+state+'","'+country+'","'+dob+'","'+gender+'","'+zip_code+'","'+emp_img+'","'+permission+'")';
                     
                              sql.query(sql2,function(err, results){
                                  if(err){
                                      return res.status(400).send("error in data base"+err);
                                  }
                                  else{
                                    
                                    res.send(results+"data inserted");
                                     
                                  }
                      })
                       
                    }
                    else{
                      return res.send("email is already register");
              }
                  
                }
   })

});




//-----------------------------insert qualification api------------------


router.post('/qualification', function(req,res){

    // var emp_id=13;
    // var level="MCA";
    // var institude_name="IPSA";
    // var board_name="MP";
    // var year_of_passing=2019;
    // var percentage=80.2;
//var insertQualification='insert into qualification(emp_id,level,institude_name,board_name,year_of_passing,percentage) values("'+emp_id+'","'+level+'","'+institude_name+'","'+board_name+'","'+year_of_passing+'","'+percentage+'")';
    var data = req.body;
sql.query("INSERT INTO qualification SET ?",data,function(err,results){
    if(err){
        return res.status(400).send("error in database"+err);
    }
    else{
        return res.send(results+"qualification data inserted")
    }
})
});

//---------------update qualification-------

router.put('/qualification/:id',function(req,res){
    var id = req.params.id;
    var data = req.body;

    sql.query("UPDATE qualification SET ?",[data,id],function(err,results){
         if(err){
           return res.status(400).send("errorn in database"+err);
         }else{
            return res.status(200).send("record updated");
         }
    })
})


//---------------------------find all list of employee----------------

router.get('/users',function(req,res){
            
    var sql3='select * from employee';

    sql.query(sql3,function(err, results){

        if(err){
           return res.status(400).send("error in database");
        }
        else{
           if(results.length>0){
            return res.status(200).json({
                success: true,
                message: 'Authentication successful!',
                results: results
              });
          }
           else{
               return res.send("error"+err);
          }
        }
    })


})

//-----------------employee find by id------------------


router.get('/user/:userID', function(req,res){
    var id=req.params.userID;
   console.log("/user/:userID");
    var findByIdQuery = 'select * from employee where emp_id=?';

    sql.query(findByIdQuery, id,function(err, results){
        if(err){
            return res.status(400).send("error  in database"+err);
        }
        else{
            if(results.length ==1){
                return res.status(200).json({
                    success :true,
                    message :'success',
                    results : results
                });

            }
            else{
                return res.send("record not found");
            }
        }
    })

})



//----------------update user record---------------

// router.patch('/user/:userID', function(req,res){
//     id=req.params.userID;

//     var updateQuery='';

//     sql.query(updateQuery,id, function(err,results){
//         if(err){
//            return res.status(400).send("error in database"+err);
//         }
//         else{
//            return res.status(200).send("record update succesfully"+results);
//         }
//     })
// });

//--------------bank detalis------------

router.post('/userBankdetails', function(req,res){
   
    var data = req.body; 
   sql.query("INSERT INTO bank_details SET ?",data,function(err,results){
         if(err){
             return res.status(400).send("error in database"+err);
         }
         else{
             return res.status(200).send("data inserted");
         }
     })

})


router.get('/usersBankdetails',function(req,res){
   var getallbankdetails='select * from bank_details';
   sql.query(getallbankdetails,function(err,results){
       if(err){
           return res.status(400).send("error in database");
       }
       else{
            return res.status(200).json({
                success:true,
                message:"get successfully all record",
                results:results
            })
       }
   })
})


router.get('/userBankdetails/:id',function(req,res){
     var id=req.params.id;
     
     var getbankdetailbyId='select * from bank_details where emp_id=?';  // and name = ?

     sql.query(getbankdetailbyId,[id],function(err,results){  //[id, name]
         if(err){
             return res.status(400).send("error in database"+err);

         }else{
            return res.status(200).json({
                success:true,
                message:"get successfully",
                results:results
            })
         }
     })
})

router.put('/userBankdetails/:userID',function(req,res){
     var id=req.params.userID;
    var account_no;
    var data=[id,req.body.account_no]
    var updatebankdetails='update bank_details set account_no=? where emp_id=?';

    sql.query(updatebankdetails,[data],function(err,results){
        if(err){
            return res.status(400).send("errror"+err);
        }
        else
        {
                return res.status(200).send("record update"+results);
        }
    })
})

//------------------------events api------------
//--------------insert events-----------------
router.post('/events',function(req,res){
    var data= req.body;

    sql.query("INSERT INTO events SET ?",data,function(err,results){
        if(err){
           return res.status(400).send("error in database"+err);
        }else{
           return res.status(200).send("record inserted"); 
        }
    })
})

//-----------get all event 


router.get('/events',function(req,res){
    var data= req.body;

    sql.query("select * from events",data,function(err,results){
        if(err){
           return res.status(400).send("error in database"+err);
        }else{
           return res.status(200).json({
               success:true,
               message:"get all record",
               results:results
           })
        }
    })
})


//-------------update events---------------

router.put('/events/:id',function(req,res){
    var id=req.params.id;
    var data= req.body;

    sql.query("UPDATE events SET ? where event_id=?",[data,id],function(err,results){
        if(err){
           return res.status(400).send("error in database"+err);
        }else{
           return res.status(200).json({
               success:true,
               message:"update record",
               results:results
           })
        }
    })
})


//-------------------experience api-----------

//------------insert experience----------------


router.post('/experience',function(req,res){
    var data= req.body;

    sql.query("INSERT INTO experience SET ?",data,function(err,results){
        if(err){
           return res.status(400).send("error in database"+err);
        }else{
           return res.status(200).send("record inserted"); 
        }
    })
})

//-------get experience by id---------



router.get('/experience/:id',function(req,res){
    var id=req.params.id;
    var data= req.body;

    sql.query("SELECT * FROM experience WHERE exp_id=?",[data,id],function(err,results){
        if(err){
           return res.status(400).send("error in database"+err);
        }else{
           return res.status(200).json({
               success:true,
               message:"update record",
               results:results
           })
        }
    })
})








module.exports = router;