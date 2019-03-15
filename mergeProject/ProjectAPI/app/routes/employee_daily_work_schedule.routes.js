module.exports = function(app){

    const tracker = require('../controller/employee_daily_work_schedule.controller');

    app.get('/api/empTracker',tracker.StoreStartTime);

    app.get('/api/empTrackerstop',tracker.stopTimer);
}