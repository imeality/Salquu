'use strict';
module.exports = function(app) {
  var Meeting = require('../controller/Meeting.Controller');

  app.route('/Meeting')
    .get(Meeting.findAll)
   .post(Meeting.create);

   app.route('/Meeting/:Id')
   .get(Meeting.findById)
   .put(Meeting.update)
  .delete(Meeting.delete);
    };
