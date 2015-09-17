var express = require('express');
var router = express.Router();
var lib = require('./../../lib')

/* GET / */
router.get('/', function(req, res) {
	res.send('express home page');
})

/* POST / */
router.post('/', function(req, res) {
	// only accepts 'application/json'
	if (req.headers['content-type'] != 'application/json'){
		console.log('you need to send application/json');
		res.sendStatus(415);
	}
	res.send('got the post');
	/**
	 * writing a json file in root directory. just for testing and debugging
	 */
	// lib.makeJsonFile(req.body);
	console.log(req.body);
})


module.exports = router;