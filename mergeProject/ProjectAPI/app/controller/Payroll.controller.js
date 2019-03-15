const db = require('../config/db.config.js');
const Payroll = db.Payroll;

exports.create= (req, res) => {
  Payroll.create({
    "EmployeeEmail":req.body.EmployeeEmail,
    "WorkingDayAmount":req.body.WorkingDayAmount,
    "OvertimeAmount":req.body.OvertimeAmount,
    "Tax":req.body.Tax,
    "PF":req.body.PF,
    "OtherAmount":req.body.OtherAmount,
    "FinalSalary":req.body.FinalSalary

 }).then(Payroll => {
 res.send(Payroll);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.findAll = (req, res) => {
  Payroll.findAll().then(Payroll => {
  res.send(Payroll);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };


exports.findById= (req, res) => {
  Payroll.findById(req.params.Id).then(Payroll => {
 res.send(Payroll);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};


exports.update= (req, res) => {

 const id = req.params.Id;
 Payroll .update( {
  "EmployeeEmail":req.body.EmployeeEmail,
  "WorkingDayAmount":req.body.WorkingDayAmount,
  "OvertimeAmount":req.body.OvertimeAmount,
  "Tax":req.body.Tax,
  "PF":req.body.PF,
  "OtherAmount":req.body.OtherAmount,
  "FinalSalary":req.body.FinalSalary
  },
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(Payroll);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};


exports.delete = (req, res) => {
 const id = req.params.Id;
 Payroll .destroy({
   where: { id: id }
 }).then(() => {
 res.status(200).send('Payroll has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};
