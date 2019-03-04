var db = require('../config/db.config');

const Bankdetail = db.bank_details;

//-----create bank details---------

exports.create =(req,res)=>{
    Bankdetail.create({
         empId:req.body.empId,
         accountNumber:req.body.accountNumber,
         ifacCode:req.body.ifacCode,
         bankName:req.body.bankName 
    }).then(bankdetail=>{
        res.send(bankdetail);
    }).catch(err=>{
        res.status(500).send("error"+err);
    })
};

//----------findAll record--------


exports.findAll =(req,res)=>{
    Bankdetail.findAll().then(bankdetail=>{
        res.send(bankdetail);
    }).catch(err=>{
        res.send("error"+err);
    })
    
 };

 //------findBy Id---------


exports.findById=(req,res)=>{
    Bankdetail.findById(req.params.empId).then(bankdetail=>{
        res.send(bankdetail);
    }).catch(err=>{
        res.send("error"+err);
    })
};

//-------update bank details------

exports.update=(req,res)=>{
    var bankdetail =req.body;
    Bankdetail.update({
        accountNumber:req.body.accountNumber,
        ifacCode:req.body.ifacCode,
        bankName:req.body.bankName 
    },{
        where:{empId:req.params.empId}
      }
    ).then(()=>{
        res.send(bankdetail);
    }).catch(err=>{
        res.send("error"+err);
    })
}


 