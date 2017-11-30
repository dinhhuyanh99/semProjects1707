// =====================================
// Declare dependencies
// =====================================
var mongoose = require('mongoose');
var airConditioner = mongoose.model('airConditioners');
// =====================================
// =====================================

// =====================================
// Declare functions which are called by
// the Endpoints given in the svRoutes.js
// =====================================
exports.list_all_ac = function(req, res) {
	airConditioner.find({}, function(err, result){
		if(err)
			res.send(err);
		res.json(result);
	});
};
// =====================================
exports.add_an_ac = function(req, res) {
	var new_ac = new airConditioner(req.body);
	console.log(req.body);
	new_ac.save(function(err, result){
		if(err)
			res.send(err);
		res.json(result);
	});
};
// =====================================
exports.list_all_ac_by_brand = function(req, res) {
	airConditioner.find({brand: req.params.brand}, function(err, result){
		if(err)
			res.send(err);
		res.json(result);
	});
};
// =====================================
exports.list_ac_by_id = function(req, res) {
	airConditioner.findById(req.params.id, function(err, result){
		if(err)
			res.send(err);
		res.json(result);
	});
};
// =====================================
exports.update_ac_by_id = function(req, res) {
	airConditioner.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result){
		if(err)
			res.send(err);
		res.json({message: 'Successfully updated details!'});
	});
};
// =====================================
exports.delete_ac_by_id = function(req, res) {
	airConditioner.remove({_id: req.params.id}, function(err, result){
		if(err)
			res.send(err);
		res.json({message: 'Successfully deleted the chosen product!'});
	});
};
// =====================================