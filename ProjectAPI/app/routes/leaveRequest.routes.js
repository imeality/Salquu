module.exports = function(app){
      
     const leaveRequest =require('../controller/leaveRequest.controller');

     app.post('/api/leaveRequest',leaveRequest.create);

     app.get('/api/leaveRequests',leaveRequest.findAll);

     app.get('/api/leaveRequest/:empId',leaveRequest.findByempId);
}