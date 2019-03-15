var db = require('../config/db.config');

const WorkSchedule = db.workSchedule;

//------create workschedule----

exports.create=(req,res)=>{
    WorkSchedule.create({
        shift_name:req.body.shift_name,
        shift_desc:req.body.shift_desc,
        shift_start_date:req.body.shift_start_date,
        shift_end_date :req.body.shift_end_date
    }).then(workSchedule=>{
        return res.send(workSchedule);
    }).catch(err=>{
        return res.send("error"+err);
    })
}