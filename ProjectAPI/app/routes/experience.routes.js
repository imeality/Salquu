module.exports = function(app){

    const experience = require('../controller/experience.controller');


    app.post('/api/experience',experience.create);

    app.get('/api/experiences',experience.findAll);

    app.get('/api/experience/:empId',experience.findByempId);
}