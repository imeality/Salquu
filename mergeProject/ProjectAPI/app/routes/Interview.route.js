'use strict';
module.exports = function(app) {
  var Interview = require('../controller/Interview.Controller');

  app.route('/Interview')
    .get(Interview.findAll)
   .post(Interview.create);

   app.route('/Interview/:Id')
   .get(Interview.findById)
   .put(Interview.update)
  .delete(Interview.delete);
    };
