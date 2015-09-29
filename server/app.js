var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./routes/index');
var download = require('./routes/download');
var http = require('http');

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

/**
 * defining routes
 */
app.use('/download', download);
app.use('/', routes);

app.use(express.static(path.join(__dirname, 'tmp')));

/**
 * PORT
 * default or 3000
 */
var port = process.env.PORT || '3000';
app.set('port', port);

/**
 * making http server
 */
var server = http.createServer(app);
server.listen(port);


// module.exports = app;