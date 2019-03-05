var db = require('../config/db.config');

const MailHistory =db.mailHistory;

//----create mail--------

exports.create =(req,res)=>{
    MailHistory.create({
        empId:req.body.empId,
        email_date:req.body.email_date,
        sender_email:req.body.sender_email,
        subject:req.body.subject,
        description:req.body.description
    }).then(mailHistory=>{
        res.send(mailHistory);
    }).catch(err=>{
        res.send("error"+err);
    })
}

//----------------findAll mail----

exports.findAll = (req,res)=>{
    MailHistory.findAll().then(mailHistory=>{
        res.send(mailHistory);
    }).catch(err=>{
        res.send("error"+err);
    })
};

//--------findByempId----

exports.findByempId =(req,res)=>{
    MailHistory.findAll({where:{empId:req.params.empId}
    }).then(mailHistory=>{
        res.send(mailHistory);
    }).catch(err=>{
        res.send("error"+err);
    })
};