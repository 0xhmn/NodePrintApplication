var express = require('express');
var router = express.Router();
var lib = require('./../../lib')

/* GET / */
router.get('/', function(req, res) {
	res.send('<h1>express home page</h1>');

})

/* POST / */
router.post('/', function(req, res) {
	// only accepts 'application/json'
	if (req.headers['content-type'] != 'application/json'){
		console.log('you need to send application/json');
		res.sendStatus(415);
	}
	
	console.log(req.body);
	res.send('got the post');

})
 

module.exports = router;