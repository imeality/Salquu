const db = require('../config/db.config.js');
const Notification = db.Notification;
exports.create= (req, res) => {
   Notification.create({
    "Subject":req.body.Subject,
    "Message":req.body.Message,
    "Date":req.body.Date,
    "GeneratedDate":req.body.GeneratedDate
  }).then(Notification => {
 res.send(Notification);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.findAll = (req, res) => {
  Notification.findAll().then(Notification => {
  res.send(Notification);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };


exports.findById= (req, res) => {
  Notification.findById(req.params.Id).then(Notification => {
 res.send(Notification);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.update= (req, res) => {

 const id = req.params.Id;
 Notification .update( {
  "Subject":req.body.Subject,
  "Message":req.body.Message,
  "Date":req.body.Date,
  "GeneratedDate":req.body.GeneratedDate
  },
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(Notification);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};


exports.delete = (req, res) => {
 const id = req.params.Id;
 Notification .destroy({
   where: { id: id }
 }).then(() => {
 res.status(200).send('Notification has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};
