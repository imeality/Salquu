module.exports = function(app){

    const event = require('../controller/event.controller');

    app.post('/api/event',event.create);

    app.get('/api/events',event.findAll);

    app.get('/api/event/:eventId',event.findById);

    app.put('/api/event/:eventId',event.update);
}