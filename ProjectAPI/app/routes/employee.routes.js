module.exports =function(app){
    const employee = require('../controller/employee.controller');

    app.post('/api/employee',employee.create);
    app.get('/api/employees',employee.findAll);
    app.get('/api/employee/:empId',employee.findById);
    app.put('/api/employee/:empId',employee.update);
}