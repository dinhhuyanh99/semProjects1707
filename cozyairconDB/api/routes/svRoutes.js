// =====================================
// Exports the route to use in server.js
// as Endpoints which is parsed by the
// parser later on.
// =====================================
'use strict';
module.exports = function(app) {
	var controllers = require('../controllers/svControllers');
	app.route('/aircons')
		.get(controllers.list_all_ac)
		.post(controllers.add_an_ac);
	app.route('/brand')
		.get(controllers.list_all_brands)
		.post(controllers.add_a_brand);
	app.route('/brand/:brandId')
		.put(controllers.update_a_brand)
		.delete(controllers.delete_a_brand);
	app.route('/brand/products/:brandId')
		.get(controllers.list_brand_products);
	app.route('/aircons/id/:acId')
		.get(controllers.list_ac_by_id)
		.put(controllers.update_ac_by_id)
		.delete(controllers.delete_ac_by_id);
};
// =====================================
// =====================================