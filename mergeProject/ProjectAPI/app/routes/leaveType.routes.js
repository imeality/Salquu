module.exports = function(app){

    const leavetype = require('../controller/leaveType.controller');

    app.post('/api/leavetype',leavetype.create);

    app.put('/api/leavetype/:id',leavetype.update);
}