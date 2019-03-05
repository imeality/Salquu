 module.exports = function(app){

    const bankdetails= require('../controller/bankdetail.controller');

    app.post('/api/bankdetail',bankdetails.create);
    app.get('/api/bankdetails',bankdetails.findAll);
    app.get('/api/bankdetail/:empId',bankdetails.findByempId);
    app.put('/api/bankdetail/:empId',bankdetails.update);
 }