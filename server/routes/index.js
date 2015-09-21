var express = require('express');
var router = express.Router();
var lib = require('./../../lib');
var fs = require('fs');
var path = require('path');


/* GET / */
router.get('/', function(req, res) {
	res.send('<h1>express home page</h1>');

});

/* POST / */
router.post('/', function(req, res) {
	// only accepts 'application/json'
	if (req.headers['content-type'] != 'application/json'){
		console.log('you need to send application/json');
		res.sendStatus(415);
	}
	
	// console.log(req.body);
	res.send('got the post');

	// parsing json to template
	// using the jsonFile in templates folder for test
	// var file = path.join(process.cwd(), 'templates/jsonApplication.json');
	lib.appBuilder.buildHtml(req.body, "default");

});

router.post('/test', function(req, res) {
	// only accepts 'application/json'
	if (req.headers['content-type'] != 'application/json'){
		console.log('you need to send application/json');
		res.sendStatus(415);
	}

	res.send('got the test post');
	lib.appBuilder.buildHtml(req.body, "test");

});

module.exports = router;