var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
// routings
var routes = require('./routes/index');

/**
 * using bodyParser
 */
app.use(bodyParser.json());								// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));		// to parse non-json requests 
/**
 * enabling CORS
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', routes);


/**
 * manage static files
 */
app.use(express.static(path.join(__dirname, 'tmp')));

module.exports = app;