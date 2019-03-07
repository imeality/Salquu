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

module.exports = db;