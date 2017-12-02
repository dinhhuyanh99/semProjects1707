'use strict';
// =====================================
// Declare dependencies
// =====================================
var mongoose = require('mongoose');
var airConditioner = mongoose.model('airConditioners');
var brand = mongoose.model('brands');
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
	new_ac.save(function(err, result){
		if(err)
			res.send(err);
		res.json(result);
	});
};
// =====================================
exports.add_a_brand = function(req, res) {
	var new_brand = new brand(req.body);
	new_brand.save(function(err, result){
		if(err)
			res.send(err);
		res.json(result);
	});
};
// =====================================
exports.update_a_brand = function(req, res) {
	brand.findOneAndUpdate({_id: req.params.brandId}, req.body, {new: true, upsert: true}, function(err, result){
		if(err)
			res.send(err);
		res.json({message: 'Successfully updated details!'});
	});
};
// =====================================
exports.list_all_brands = function(req, res) {
	brand.find({}, function(err, result){
		if(err)
			res.send(err);
		res.json(result);
	});
};
// =====================================
exports.delete_a_brand = function(req, res) {
	 brand.remove({_id: req.params.brandId}, function(err, result){
		if(err)
			res.send(err);
		res.json({message: 'Successfully deleted the chosen brand!'});
	});
};
// =====================================
exports.list_brand_products = function(req, res) {
	airConditioner.find({brand: req.params.brandId}, function(err, result){
		if(err)
			res.send(err);
		res.json(result);
	});
};
// =====================================
exports.list_ac_by_id = function(req, res) {
	airConditioner.findById(req.params.acId, function(err, result){
		if(err)
			res.send(err);
		res.json(result);
	});
};
// =====================================
exports.update_ac_by_id = function(req, res) {
	airConditioner.findOneAndUpdate({_id: req.params.acId}, req.body, {new: true, upsert: true}, function(err, result){
		if(err)
			res.send(err);
		res.json({message: 'Successfully updated details!'});
	});
};
// =====================================
exports.delete_ac_by_id = function(req, res) {
	airConditioner.remove({_id: req.params.acId}, function(err, result){
		if(err)
			res.send(err);
		res.json({message: 'Successfully deleted the chosen product!'});
	});
};
// =====================================