// app/routes/home.js

var controller = require('../app/controllers/home');

module.exports = function(app) {
	app.get('index', controller.index);
	app.get('/', controller.index);
}