'use strict';
module.exports = function(app) {
  var RequestToHR= require('../controller/RequestToHR.controller');

  app.route('/RequestToHR')
    .get(RequestToHR.findAll)
    .post(RequestToHR.create);

   app.route('/RequestToHR/:Id')
   .get(RequestToHR.findById)
   .put(RequestToHR.update)
  .delete(RequestToHR.delete);
    };
