'use strict';
module.exports = function(app) {
  var Payroll= require('../controller/Payroll.controller');

  app.route('/Payroll')
    .get(Payroll.findAll)
    .post(Payroll.create);

   app.route('/Payroll/:Id')
   .get(Payroll.findById)
   .put(Payroll.update)
  .delete(Payroll.delete);
    };
