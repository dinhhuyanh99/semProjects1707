// ===================================================================================
// Declare dependencies
// ===================================================================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// ===================================================================================
// ===================================================================================


// ===================================================================================
// Create a schema for data to be input in, in this case, an 'airConditioner' schema
// which takes every datum relating to the specifications of an air-conditioner
// ===================================================================================

var airConSchema = new Schema ({
	sku: {
		type: String,
		required: [true, "Please enter the SKU!"]
	},
	modelNum: {
		type: String,
		required: [true, "Please enter the Model Number!"]
	},
	specs: [{
		_id: false,
		typeOfAC: {
			type: String,
			enum: [{
				values: ['Heating', 'Cooling', 'Both'],
				message: 'Input value is invalid, please enter Heating, Cooling or Both!'
			}],
			required: [true, "Please enter Cooling, Heating or Both!"]
		},
		btu: {
			type: Number,
			required: [true, "Please enter BTU cooling capacity!"]
		},
		ecoFriendly: {
			type: Boolean,
			default: false
		},
		areaOfFX: {
			type: String,
			required: [true, "Please enter the area of effectiveness!"]
		},
		jetCool: {
			type: Boolean,
			required: [true, "Please enter true or false for the fast cooling function!"]
		},
		powerConsumption: {
			type: String,
			required: [true, "Please enter the power consumption value!"]
		},
		intDimension: {
			type: String,
			required: [true, "Please enter the dimensions (W,H,D)"]
		},
		extDimension: {
			type: String,
			required: [true, "Please enter the dimensions (W,H,D)"]
		}
	}],
	brand: {
		type: String,
		required: [true, "Please choose a company brand!"]
	},
	originOfProduct: {
		type: String,
		required: [true, "Please enter the origin of the product!"]
	},
	warranty: {
		type: String,
		required: [true, "Please enter the amount of time the product is warranted!"]
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	},
	status: {
		type: Number,
		default: 1
	}
});

var brandSchema = new Schema ({
	name: {
		type: String,
		required: [true, "Please enter the name of the brand!"]
	}
});

// ===================================================================================
// ===================================================================================



// ===================================================================================
// Exports schema to use in other file(in this case, svControllers.js, server.js)
// ===================================================================================
module.exports = mongoose.model('airConditioners', airConSchema);
module.exports = mongoose.model('brands', brandSchema);
