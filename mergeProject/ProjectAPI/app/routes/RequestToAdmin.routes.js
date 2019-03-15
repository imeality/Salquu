'use strict';
module.exports = function(app) {
  var RequestToAdmin= require('../controller/RequestToAdmin.controller');

  app.route('/RequestToAdmin')
    .get(RequestToAdmin.findAll)
    .post(RequestToAdmin.create);

   app.route('/RequestToAdmin/:Id')
   .get(RequestToAdmin.findById)
   .put(RequestToAdmin.update)
  .delete(RequestToAdmin.delete);
    };
