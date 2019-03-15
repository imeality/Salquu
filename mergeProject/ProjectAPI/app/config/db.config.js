const env = require('./env');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
   host: env.host,
   dialect: env.dialect,
   operatorsAliases: false,
  
   pool: {
     max: env.max,
     min: env.min,
     acquire: env.acquire,
     idle: env.idle
   }
 });
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.events = require('../model/event.model')(sequelize, Sequelize);
db.employees= require('../model/employee.model')(sequelize,Sequelize);
db.bank_details = require('../model/bankdetail.model')(sequelize,Sequelize);
db.leaveRequest = require('../model/leaveRequest.model')(sequelize,Sequelize);
db.experience = require('../model/experience.model')(sequelize,Sequelize);
db.mailHistory = require('../model/mailHistory.model')(sequelize,Sequelize);
db.project = require('../model/project.model')(sequelize,Sequelize);
db.qualification = require('../model/qualification.model')(sequelize,Sequelize);
db.task = require('../model/task.model')(sequelize,Sequelize);
db.userlog = require('../model/userlog.model')(sequelize,Sequelize);
db.workSchedule = require('../model/workSchedule.model')(sequelize,Sequelize);
db.leaveType = require('../model/leaveType.model')(sequelize,Sequelize);
db.leavebalance = require('../model/leaveBalance.model')(sequelize,Sequelize);
db.empTracker = require('../model/employee_daily_work_schedule.model')(sequelize,Sequelize);

//-------------Hr module -------

db.Employee = require('../model/Employee1.model.js')(sequelize, Sequelize);
db.Candidate = require('../model/Candidate.model.js')(sequelize, Sequelize);
db.Holiday= require('../model/Holiday.model.js')(sequelize, Sequelize);
db.Meeting= require('../model/Meeting.model.js')(sequelize, Sequelize);
db.Payroll= require('../model/Payroll.model.js')(sequelize, Sequelize);
db.Notification= require('../model/Notification.model.js')(sequelize, Sequelize);
db.RequestToAdmin= require('../model/RequestToAdmin.model.js')(sequelize, Sequelize);
db.RequestToHR= require('../model/RequestToHR.model.js')(sequelize, Sequelize);
db.Entity= require('../model/Entity.model.js')(sequelize, Sequelize);
db.Interview= require('../model/Interview.model.js')(sequelize, Sequelize);

db.Candidate.hasOne(db.Employee,{foreignKey: 'CandidateId'});
db.Employee.belongsTo(db.Candidate,{foreignKey: 'CandidateId'});

module.exports = db;