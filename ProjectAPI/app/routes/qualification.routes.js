module.exports = function(app){

    const qualification =require('../controller/qualification.controller');

    app.post('/api/qualification',qualification.create);
 
    app.get('/api/qualification/:empId',qualification.findByempId);
    app.put('/api/qualification/:empId',qualification.update);
}