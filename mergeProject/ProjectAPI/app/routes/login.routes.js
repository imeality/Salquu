module.exports = function(app)
{
    const login = require('../controller/login.controller');

    app.post('/api/login', login.findOne);
}