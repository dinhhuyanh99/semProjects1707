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
	specifications: {
		type: {
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
		}
	},
	dimensions: {
		inHouseUnit: {
			type: String,
			required: [true, "Please enter the dimensions (W,H,D)"]
		},
		outHouseUnit: {
			type: String,
			required: [true, "Please enter the dimensions (W,H,D)"]
		}
	},
	brand: {
		type: String,
		required: [true, "Please enter the brand name with a capitalized initial(Toshiba, Daikin,...)!"]
	},
	originOfProduct: {
		type: String,
		required: [true, "Please enter the origin of the product!"]
	},
	warranty: {
		type: String,
		required: [true, "Please enter the amount of time the product is warranted!"]
	},
	status: {
		type: Number,
		default: 1
	}
});
// ===================================================================================
// ===================================================================================



// ===================================================================================
// Exports schema to use in other file(in this case, svControllers.js, server.js)
// ===================================================================================
module.exports = mongoose.model('airConditioners', airConSchema);

