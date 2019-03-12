var db = require('../config/db.config');
let date = require('date-and-time');
const Tracker = db.empTracker;

//-----------create tracker for  daily employee--------
var startTime=[];
var endTime=[];




exports.create = (req,res)=>{
    var d =new Date();
    
    var time = date.format(d,'hh:mm:ss');
    var currentdate = d.toISOString().slice(0,10);
    startTime.push(time);
    Tracker.create({
        empId:13,
        date:currentdate,
        tracker_start_time:startTime,
        reason:"Active"
    }).then(tracker=>{
        return res.send(tracker);
    }).catch(err=>{
        return res.status(500).send("error"+err);
    })
}



//------stop tracking-------
exports.stopTimer =(req,res)=>{
    var d =new Date();
    
    var time = date.format(d,'hh:mm:ss');

    Tracker.update({
       
        tracker_end_time:time
    },{
        where:{empId:13}
    }).then(tracker=>{
        return res.send(tracker);
    }).catch(err=>{
        return res.send("error"+err);
    })
}