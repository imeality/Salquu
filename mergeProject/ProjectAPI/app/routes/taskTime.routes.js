module.exports = function(app){

    const taskTime = require('../controller/taskTime.controller');

    app.post('/api/tasktime',taskTime.create);
}