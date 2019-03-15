'use strict';
module.exports = function(app) {
  var Notification= require('../controller/Notification.Controller');

  app.route('/Notification')
    .get(Notification.findAll)
   .post(Notification.create);

   app.route('/Notification/:Id')
   .get(Notification.findById)
   .put(Notification.update)
  .delete(Notification.delete);
    };
