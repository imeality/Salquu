const db = require('../config/db.config.js');
const RequestToHR = db.RequestToHR;
exports.create= (req, res) => {
  RequestToHR.create({
    "Request":req.body.Request,
    "Status":req.body.Status,
    "Sender":req.body.Sender,
    "Response":req.body.Response
  }).then(RequestToHR => {
 res.send(RequestToHR);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.findAll = (req, res) => {
  RequestToHR.findAll().then(RequestToHR => {
  res.send(RequestToHR);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };


exports.findById= (req, res) => {
  RequestToHR.findById(req.params.Id).then(RequestToHR => {
 res.send(RequestToHR);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.update= (req, res) => {

 const id = req.params.Id;
 RequestToHR .update( {
  "Request":req.body.Request,
    "Status":req.body.Status,
    "Sender":req.body.Sender,
    "Response":req.body.Response
  },
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(RequestToHR);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};


exports.delete = (req, res) => {
 const id = req.params.Id;
 RequestToHR .destroy({
   where: { id: id }
 }).then(() => {
 res.status(200).send('Request To HR has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};
