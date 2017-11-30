// =====================================
// Exports the route to use in server.js
// as Endpoints which is parsed by the
// parser later on.
// =====================================
module.exports = function(app) {
	var controllers = require('../controllers/svControllers');
	app.route('/aircons')
		.get(controllers.list_all_ac)
		.post(controllers.add_an_ac);
	app.route('/aircons/:brand')
		.get(controllers.list_all_ac_by_brand);
	app.route('/aircons/:id')
		.get(controllers.list_ac_by_id)
		.put(controllers.update_ac_by_id)
		.delete(controllers.delete_ac_by_id);
};
// =====================================
// =====================================