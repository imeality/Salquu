const db = require('../config/db.config.js');
const Holiday = db.Holiday;

exports.create= (req, res) => {
  Holiday.create({
    "Date": req.body.Date,
    "Day": req.body.Day,
    "Optional": req.body.Optional,
    "Holiday":req.body.Holiday

   }).then(Holiday => {
  res.send(Holiday);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };

 exports.findAll = (req, res) => {
  Holiday.findAll().then(Holiday => {
  res.send(Holiday);
  }).catch(err => {
  res.status(500).send("Error -> " + err);
  })
 };

 exports.findById = (req, res) => {
  Holiday.findById(req.params.Id).then(Holiday => {
 res.send(Holiday);
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 })
};


exports.update= (req, res) => {
 const id = req.params.Id;
 Holiday .update( {
  "Date": req.body.Date,
  "Day": req.body.Day,
    "Optional": req.body.Optional,
    "Holiday":req.body.Holiday
},
 { where: {id: req.params.Id} }
    ).then(() => {
 res.status(200).send(Holiday);
    }).catch(err => {
 res.status(500).send("Error -> " + err);
    })
};


exports.delete = (req, res) => {
 const id = req.params.Id;
 Holiday .destroy({
   where: { id: id }
 }).then(() => {
 res.status(200).send('Holiday has been deleted!');
 }).catch(err => {
 res.status(500).send("Error -> " + err);
 });
};
