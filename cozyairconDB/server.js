// ================================================================= 
// Declare dependencies
// ================================================================= 
var express = require('express'),
	app = express(),
	port = process.env.PORT || 4000,
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	airConditioner = require('./api/models/svModels');
// ================================================================= 
// ================================================================= 



// ================================================================= 
// Declare connection with database and Promise function of mongoose
// ================================================================= 
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cosy_airconditionersTest');
// ================================================================= 
// ================================================================= 

var routes = require('./api/routes/svRoutes');
routes(app);

// ================================================================= 
// Declare what to parse, in this situation, parses only urlencoded
// body and only looks at requests where header 'Content-Type' match
// the chosen type in the type options extended here equals to true
// which will allow us to request with any type off key-value pairs
// while false will only accept string or array.
// ================================================================= 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// =================================================================
// =================================================================



// ========================================================================
// Declare actions that take place when the user inputs an invalid Endpoint
// ========================================================================
app.use(function(req, res){
	res.status(404).send('Sorry, we cannot found: ' + {url: req.originalUrl});
});
// ========================================================================
// ========================================================================



// ===================================================================================
// Start a server to listen on the port that listed on the 'Declare dependencies' part
// ===================================================================================
app.listen(port);
console.log('Server started on port: ' + port);
// ===================================================================================
// ===================================================================================

