var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./routes/index');

app.use('/', routes);

module.exports = app;