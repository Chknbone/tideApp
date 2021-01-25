const TideController = require('../controllers/tide.controller');

module.exports = function(app){
    app.get('/api', TideController.index);
    app.post('/api/tides', TideController.createTide);
}
