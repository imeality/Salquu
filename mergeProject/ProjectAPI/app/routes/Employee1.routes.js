'use strict';
module.exports = function(app) {
  var employee = require('../controller/Employee1.Controller');
  app.route('/Employee')
    .get(employee.findAll)
   .post(employee.create);

   app.route('/Employee/:Id')
   .get(employee.findById)
   .put(employee.update)
    .delete(employee.delete);
    };
