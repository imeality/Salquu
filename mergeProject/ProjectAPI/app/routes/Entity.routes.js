'use strict';
module.exports = function(app) {
  var Entity = require('../controller/Entity.Controller');

  app.route('/Entity')
    .get(Entity.findAll)
   .post(Entity.create);

   app.route('/Entity/:Id')
   .get(Entity.findById)
   .put(Entity.update)
  .delete(Entity.delete);
    };
