const db = require('../config/db.config.js');
const RequestToAdmin = db.RequestToAdmin;
exports.create= (req, res) => {
  RequestToAdmin.create({
    "Request":req.body.Request,
    "Status":req.body.Status,
    "Sender":req.body.Sender,
    "Response":req.body.Response
  }).then(RequestToAdmin => {
 res.send(RequestToAdmin);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.findAll = (req, res) => {
  RequestToAdmin.findAll().then(RequestToAdmin => {
  res.send(RequestToAdmin);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };


exports.findById= (req, res) => {
  RequestToAdmin.findById(req.params.Id).then(RequestToAdmin => {
 res.send(RequestToAdmin);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.update= (req, res) => {

 const id = req.params.Id;
 RequestToAdmin .update( {
  "Request":req.body.Request,
    "Status":req.body.Status,
    "Sender":req.body.Sender,
    "Response":req.body.Response
  },
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(RequestToAdmin);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};


exports.delete = (req, res) => {
 const id = req.params.Id;
 RequestToAdmin .destroy({
   where: { id: id }
 }).then(() => {
 res.status(200).send('RequestToAdmin has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};
