
var express= require('express');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
var app = express();
const cors= require('cors');

var sql = require("../config.db");
var router = express.Router();


app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({extended:true}));






router.delete('/user/:userId',function(req,res){
    id=req.params.userID;
  var deleteByIdQuery = 'delete from employee where emp_id=?';

  sql.query(deleteByIdQuery,id ,function(err , results){
      if(err){
           return res.status(400).send("error in database");
      }
      else{
          if(results.length ==1){
              return res.status(200).json({
                  success : true,
                  message : 'succcess',
                  results : results
              });

          }
          else{
              return res.send("record not found");
          }
      }
  })
})


module.exports = router;