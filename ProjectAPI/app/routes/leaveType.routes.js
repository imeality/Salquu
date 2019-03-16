var chechAuth = require('../middleware');
module.exports = function(app){

    const leavetype = require('../controller/leaveType.controller');

    app.post('/api/leavetype',chechAuth.checkToken,leavetype.create);

    app.put('/api/leavetype/:id',chechAuth.checkToken,leavetype.update);
}