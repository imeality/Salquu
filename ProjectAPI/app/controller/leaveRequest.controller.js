var db = require('../config/db.config');

const leaveRequest = db.leaveRequest;

//---cretae leave request----

exports.create = (req,res)=>{
    leaveRequest.create({
        empId:req.body.empId,
        application_date:req.body.application_date,
        leave_start_date:req.body.leave_start_date,
        leave_end_date:req.body.leave_end_date,
        leave_type: req.body.leave_type,
        reason: req.body.reason
    }).then(leaveRequest=>{
        res.send(leaveRequest);
    }).catch(err=>{
        res.status(500).send("error"+err);
    })
};

//findAll---------

exports.findAll = (req,res)=>{
    leaveRequest.findAll().then(leaveRequest=>{
        res.send(leaveRequest);
    }).catch(err=>{
        res.send("error"+err);
    })
};

// find by id----
exports.findByempId = (req,res)=>{
    leaveRequest.findAll({
        where:{
        empId:req.params.empId}
    }).then(leaveRequest=>{
        res.send(leaveRequest);
    }).catch(err=>{
        res.send("error"+err);
    })
};


