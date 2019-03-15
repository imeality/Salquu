const db = require('../config/db.config.js');
const Entity = db.Entity;
exports.create= (req, res) => {
  Entity.create({
      "Name":req.body.Name,
      "QuantityAvailable":req.body.QuantityAvailable,
      "RequestedProduct":req.body.RequestedProduct,
      "AmounttoPay":req.body.AmounttoPay

  }).then(Entity => {
 res.send(Entity);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.findAll = (req, res) => {
  Entity.findAll().then(Entity => {
  res.send(Entity);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };


exports.findById= (req, res) => {
  Entity.findById(req.params.Id).then(Entity => {
 res.send(Entity);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};

exports.update= (req, res) => {

 const id = req.params.Id;
 Entity .update( {
      "Name":req.body.Name,
      "QuantityAvailable":req.body.QuantityAvailable,
      "RequestedProduct":req.body.RequestedProduct,
      "AmounttoPay":req.body.AmounttoPay
  },
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(Entity);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};


exports.delete = (req, res) => {
 const id = req.params.Id;
 Entity .destroy({
   where: { id: id }
 }).then(() => {
 res.status(200).send('Entity has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};
