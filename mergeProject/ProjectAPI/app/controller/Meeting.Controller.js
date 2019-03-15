const db = require('../config/db.config.js');
const Meeting = db.Meeting;

exports.create= (req, res) => {
  Meeting.create({
    "Subject":req.body.Subject,
    "Date":req.body.Date,
    "Members":req.body.Members,
    "Result":req.body.Result

 }).then(Meeting => {
 res.send(Meeting);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.findAll = (req, res) => {
  Meeting.findAll().then(Meeting => {
  res.send(Meeting);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };

exports.findById = (req, res) => {
  Meeting.findById(req.params.Id).then(Meeting => {
 res.send(Meeting);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};
exports.update= (req, res) => {

 const id = req.params.Id;
 Meeting .update( {
  "Subject":req.body.Subject,
  "Date":req.body.Date,
  "Members":req.body.Members,
  "Result":req.body.Result
  },
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(Meeting);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};


exports.delete = (req, res) => {
 const id = req.params.Id;
 Meeting .destroy({
   where: { id: id }
 }).then(() => {
 res.status(200).send('Meeting has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};
