 var db =require('../config/db.config');

 const LeaveType = db.leaveType;

 //-----create leave type----

 exports.create = (req,res)=>{
     LeaveType.create({
         leave_type:req.body.leaveType
     }).then(leavetype=>
        {
            return res.send(leavetype);
        }).catch(err=>{
            return res.send("err"+err);
        })
 }


 //---update leave type---


 exports.update=(req,res)=>{
     LeaveType.update({
         leave_type:req.body.leave_type
     },{
         where:{id:req.params.id}
     }).then(leavetype=>{
         return res.send(leavetype);
     }).catch(err=>{
         return res.send("err"+err);
     })
 }