
module.exports = function(app) {
  var Candidate= require('../controller/Candidate.controller');

  app.route('/Candidate')
    .get(Candidate.findAll)
    .post(Candidate.create);

   app.route('/Candidate/:Id')
   .get(Candidate.findById)
   .put(Candidate.update)
  .delete(Candidate.delete);
    };
