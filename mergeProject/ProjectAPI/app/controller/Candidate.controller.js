const db = require('../config/db.config.js');
const Candidate = db.Candidate;

exports.create= (req, res) => {
  Candidate.create({
    "FirstName":req.body.FirstName,
    "LastName":req.body.LastName,
    "Email":req.body.Email,
    "Gender":req.body.Gender,
    "LocalAddress":req.body.LocalAddress,
    "PermanentAddress":req.body.PermanentAddress,
    "DOB":req.body.DOB,
    "MobileNo":req.body.MobileNo,
    "Photo":req.body.Photo,
    "Status":req.body.Status,
    "Selected":req.body.Selected,
    "InterviewDate":req.body.InterviewDate
   }).then(Candidate => {
  res.send(Candidate);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };

 exports.findAll = (req, res) => {
  Candidate.findAll().then(Candidate => {
  res.send(Candidate);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };

 exports.findById = (req, res) => {
  Candidate.findById(req.params.Id).then(Candidate=> {
 res.send(Candidate);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};


exports.update= (req, res) => {
 const id = req.params.Id;
 Candidate .update( {
  "FirstName":req.body.FirstName,
  "LastName":req.body.LastName,
  "Email":req.body.Email,
  "Gender":req.body.Gender,
  "LocalAddress":req.body.LocalAddress,
  "PermanentAddress":req.body.PermanentAddress,
  "DOB":req.body.DOB,
  "MobileNo":req.body.MobileNo,
  "Photo":req.body.photo,
  "Status":req.body.Status,
  "Selected":req.body.Selected,
  "InterviewDate":req.body.InterviewDate
  },
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(Candidate);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};


exports.delete = (req, res) => {
 const id = req.params.Id;
 Candidate .destroy({
   where: { id: id }
 }).then(() => {
 res.status(200).send('Candidate has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};
