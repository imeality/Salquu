var db= require('../config/db.config');

const Qualification =db.qualification;

//--------Insert employee qualification------
exports.create =(req,res)=>{
    Qualification.create({
        empId:req.body.empId,
        level:req.body.level,
        institude_name:req.body.institude_name,
        board_name:req.body.board_name,
        year_of_passing:req.body.year_of_passing,
        percentage:req.body.percentage
    }).then(qualification=>{
        return res.send(qualification);
    }).catch(err=>{
        return res.send("error"+err);
    })
}

//-------findByEmpId--------

exports.findByempId =(req,res)=>{
    Qualification.findAll({where:{empId:req.params.empId}
    }).then(qualification=>{
        return res.send(qualification);
    }).catch(err=>{
        return res.send("error"+err);
    })
}

//----update qualification By emp id-------

exports.update =(req,res)=>{
    var qualification =req.body;

    Qualification.update({

    },{
        where:{empId:req.params.empId}
    }).then(()=>{
        return res.send(qualification);
    }).catch(err=>{
        return res.send("error"+err);
    })
}