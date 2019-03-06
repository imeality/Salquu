module.exports=function(app){

    const task = require('../controller/task.controller');

    app.post('/api/task',task.create);
    app.get('/api/tasks',task.findAll);
    app.get('/api/task/:projectId',task.findByprojectId);
    app.put('/api/task/:projectId',task.update);
}