module.exports = function(app){

    const project = require('../controller/project.controller')
      app.post('/api/project',project.create);

      app.get('/api/projects',project.findAll);
      
      app.get('/api/project/:id',project.findById);

      app.put('/api/project/:id',project.update);
}