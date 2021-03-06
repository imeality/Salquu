
var express = require('express');
var app = express();
var login =require('./app/routes/login.routes');
require('dotenv').config();
var bodyParser = require('body-parser');

app.use(bodyParser.json())
 
const cors = require('cors')




const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
 

const db = require('./app/config/db.config');
  
// force: true will drop the table if it already exists
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
 

//app.use('/api',login);
require('./app/routes/event.routes')(app);
require('./app/routes/employee.routes')(app);
require('./app/routes/bankdetail.routes')(app);
require('./app/routes/leaveRequest.routes')(app);
require('./app/routes/experience.routes')(app); 
require('./app/routes/mailHistory.routes')(app);
require('./app/routes/project.routes')(app);
require('./app/routes/qualification.routes')(app);
require('./app/routes/task.routes')(app);
require('./app/routes/login.routes')(app);
require('./app/routes/workSchedule.routes')(app);
require('./app/routes/leaveType.routes')(app);
require('./app/routes/employee_daily_work_schedule.routes')(app);
//require('./app/routes/searchProject.routes')(app);
//--------Hr module----

require('./app/routes/Employee1.routes.js')(app);
require('./app/routes/Candidate.routes.js')(app);
require('./app/routes/Holiday.route.js')(app);
require('./app/routes/Meeting.routes.js')(app);
require('./app/routes/Payroll.routes.js')(app);
require('./app/routes/Notification.routes.js')(app);
require('./app/routes/RequestToAdmin.routes.js')(app);
require('./app/routes/RequestToHR.routes.js')(app);
require('./app/routes/Entity.routes.js')(app);
require('./app/routes/Interview.route.js')(app);


// Create a Server
var server = app.listen(8080, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})