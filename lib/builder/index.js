var fs = require('fs');		// remove it
var path = require('path');
var render = require('./../render');
var staticServ = require('node-static');	// replacing it with express-static serving
var http = require('http');
var express = require('express');
var app = express();

// TODO: pass and define 'theme' argument for builder
function appBuilder(callback) {
	// will be replaced by json POST
	var file = path.join(process.cwd(), 'resume.json');
	// checke the jsonFile
	fs.readFile(file, function (err, jsonData) {
		var parsedJson;
		if (err) {
			console.log('json data is not available');
			// TODO: use a default json data
			parsedJson = false;
		} else {
			try {
				// TODO: validate json data
				parsedJson = JSON.parse(jsonData);
			} catch (e) {
				var err = 'Parse Error: ' + file;
				return callback(err);
			}
		}

		// RENDER the json file to HTML
		try {
			var rendered = render(parsedJson);
			callback(null, rendered);
		} catch (e) {
			return callback(e);
		}

	})
}


// express testing

function startExpressServer() {
	app.use('/tmp', express.static('tmp'));
	app.get('/tmp', function (req, res) {
		console.log(req.url);
		if (req.url === '/tmp') {
			appBuilder(function (err, html) {
				if (err) {
					console.log('startSever error: ' + err);
					html = err;
				}

				fs.writeFile(process.cwd() + '/tmp/index.html', html, function (err) {
					if (err) {
						console.log(err);
					}
					console.log('wrote the file');
				})
			})
		} else {
			res.send('error');
		}
	});
	var server = app.listen(3000, function () {
		var host = server.address().address;
		var port = server.address().port;

		console.log('Listening to http://%s:%s', host, port);
	});
}

startExpressServer();

// testing on local sever
var file = new staticServ.Server(process.cwd(), { cache: 1 });
function serveFile(req, res) {
	req.addListener('end', function () {
		file.serve(req, res);
	}).resume();
}

function startServing() {
	http.createServer(function (req, res) {
		if (req.url === '/') {
			appBuilder(function (err, html) {
				if (err) {
					console.log('startSever error: ' + err);
					html = err;
				}

				fs.writeFile(process.cwd() + '/tmp/index.html', html, function (err) {
					if (err) {
						console.log(err);
					}
					serveFile.bind(this, req, res);
				})
			})
		} else {
			serveFile(req, res);
		}
	}).listen(3000);
	var previewUrl = 'http://localhost:' + 3000;
    console.log('Preview: ' + previewUrl);
}

