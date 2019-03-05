module.exports = function(app){

    const mailHistory = require('../controller/mailHistory.controller');

    app.post('/api/mailHistory',mailHistory.create);
    app.get('/api/mailHistorys',mailHistory.findAll);
    app.get('/api/mailHistory/:empId',mailHistory.findByempId);
}