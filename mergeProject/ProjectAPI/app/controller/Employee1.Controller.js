const db = require('../config/db.config.js');
const Employee = db.Employee;
const Candidate=db.Candidate;
exports.create= (req, res) => {
 Employee.create({
   "CandidateId":req.body.CandidateId,
  "Designation":req.body.Designation,
  "Password":req.body.Password,
  "JoiningDate":req.body.JoiningDate,
   "Salary":req.body.Salary,
   "photo":req.body.photo,
   "Leaves":req.body.Leaves,
   "Requests":req.body.Requests,
   "HealthStatus":req.body.HealthStatus,
   "SpecialNote":req.body.SpecialNote,
   "Quote":req.body.Quote
 }).then(Employee => {
 res.send(Employee);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};
//SELECT * FROM Employees,CandidateLists where Employees.CandidateID=CandidateLists.id
exports.findAll = (req, res) => {
   Employee.findAll({
     include:[
     { model: db.Candidate,
       required:true,
     }],
     }).then(Employee => {
      res.send(Employee);
     }).catch(err => {
  res.status(500).send("Error -> " + err);
  })

 };


//SELECT * FROM Employees,CandidateLists where Employees.CandidateID=CandidateLists.id AND Employees.id=6
exports.findById = (req, res) => {
  Employee.findById(req.params.Id,{
    include:[
      { model: db.Candidate,
        required:true,
      }],

  }).then(Employee => {
 res.send(Employee);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};


exports.update= (req, res) => {

 const id = req.params.Id;
 Employee .update( {
  "CandidateId":req.body.CandidateID,
  "Designation":req.body.Designation,
  "Password":req.body.Password,
  "JoiningDate":req.body.JoiningDate,
   "Salary":req.body.Salary,
   "photo":req.body.photo,
   "Leaves":req.body.Leaves,
   "Requests":req.body.Requests,
   "HealthStatus":req.body.HealthStatus,
   "SpecialNote":req.body.SpecialNote,
   "Quote":req.body.Quote
  },
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(Employee);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};


exports.delete = (req, res) => {
 const id = req.params.Id;
 Employee .destroy({include:[
  { model: db.Candidate,
    required:true,
  }],
   where: { id: id }
 }).then(() => {
 res.status(200).send('Employee has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};
