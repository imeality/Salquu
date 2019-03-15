const db = require('../config/db.config.js');
const Interview = db.Interview;
exports.create= (req, res) => { 
   Interview.create({ 
     "Date":req.body.Date,
     "Venue":req.body.Venue,
     "Interviewer":req.body.Interviewer,
     "SortlistedCandidate":req.body.SortlistedCandidate
    }).then(Interview => { 
 res.send(Interview);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};
 
exports.findAll = (req, res) => {
   Interview.findAll().then(Interview => {
  res.send(Interview);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };
 

exports.findById= (req, res) => { 
   Interview.findById(req.params.Id).then(Interview => {
 res.send(Interview);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};
 
exports.update= (req, res) => {
 
 const id = req.params.Id;
 Interview .update( { 
   "Date":req.body.Date,
   "Venue":req.body.Venue,
   "Interviewer":req.body.Interviewer,
   "SortlistedCandidate":req.body.SortlistedCandidate
  }, 
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(Interview);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};
 

exports.delete = (req, res) => {
 const id = req.params.Id;
 Interview .destroy({
   where: { id: id }
 }).then(() => {
 res.status(200).send('Interview row has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};