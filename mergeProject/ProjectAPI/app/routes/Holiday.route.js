
module.exports = function(app) {
  var Holiday = require('../controller/Holiday.Controller');

  app.route('/Holiday')
    .get(Holiday.findAll)
   .post(Holiday.create);

   app.route('/Holiday/:Id')
   .get(Holiday.findById)
   .put(Holiday.update)
  .delete(Holiday.delete);
    };
