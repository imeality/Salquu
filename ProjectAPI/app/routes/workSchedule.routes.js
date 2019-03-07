module.exports= function(app){

    const workSchedule = require('../controller/workSchedule.controller');

    app.post('/api/workschedule',workSchedule.create);
    
}