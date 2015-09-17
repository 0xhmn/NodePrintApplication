var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./routes/index');

/**
 * using bodyParser
 */
app.use(bodyParser.json());								// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));		// to parse non-json requests 

/**
 * defining routes
 */
app.use('/', routes);


/**
 * jsut for test - remove this later
 */
app.post('/login', function (req, res, next) {
	res.send('got the post');
	console.log(req.body);
	next();
})

app.get('/login', function (req, res, next) {
	res.send('login page index')
})

module.exports = app;