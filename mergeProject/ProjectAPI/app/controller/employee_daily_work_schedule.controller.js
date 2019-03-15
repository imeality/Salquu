var db = require('../config/db.config');
let date = require('date-and-time');
var moment = require("moment");
const Tracker = db.empTracker;

//-----------create tracker for  daily employee--------
var startTime;
var endTime=[];
var hour;
var minute;
var duration ;
var total;
function calculateTime(startTime,time)
{   
   
   var start_date = moment(startTime, 'YYYY-MM-DD hh:mm:ss');
   var end_date = moment(time, 'YYYY-MM-DD hh:mm:ss');
   duration = moment.duration(end_date.diff(start_date));
   
  // var days = Math.round(duration.asDays());   
   var hours = Math.round(duration.asHours());
   var minute = Math.round(duration.asMinutes());
   var second = Math.round(duration.asSeconds());
   total= hours +":"+ minute +":"+ second;
   
   console.log(total);
   return duration;
}

exports.StoreStartTime = (req,res)=>{
      var d =new Date();
   
      var time = date.format(d,'YYYY-MM-DD HH:mm:ss');
  
  
   //time.setMinutes(minutes);
    startTime=time;
     console.log(startTime);
   
}



//------stop tracking-------
exports.stopTimer =(req,res)=>{
    var d =new Date();
 
    var time = date.format(d,'YYYY-MM-DD HH:mm:ss');
    
    
   
    var currentdate = d.toISOString().slice(0,10);
  
    calculateTime(startTime,time);
    Tracker.create({
        empId:13,
        date:currentdate,
        tracker_start_time:startTime,
        tracker_end_time:time,
       
        reason:"hiring",
        totalTime:total
        
    }).then(tracker=>{
        
        return res.send(tracker);
    }).catch(err=>{
        return res.send("error"+err);
    })
}