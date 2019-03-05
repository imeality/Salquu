var db = require('../config/db.config');

const Experience = db.experience;

//-----create experience---------

exports.create = (req,res)=>{
    Experience.create({
        empId:req.body.empId,
        employer_name:req.body.employer_name,
        employer_address:req.body.employer_address,
        employer_designation:req.body.employer_designation,
        employer_joining_date:req.body.employer_joining_date,
        employer_leave_date:req.body.employer_leave_date,
        employer_salary:req.body.employer_salary
    }).then(experience=>{
        req.send(experience);
    }).catch(err=>{
        res.status(500).send("error"+err);
    })
};

//---------findAll--------

exports.findAll =(req,res)=>{
    Experience.findAll().then(experience=>{
        res.send(experience);

    }).catch(err=>{
        res.send("error"+err);
    })
};

//-----findById------

exports.findByempId =(req,res)=>{
    Experience.findAll({
        where:{empId:req.params.empId}
    }).then(experience=>{
        res.send(experience);
    }).catch(err=>{
        res.send("error"+err);
    })
}