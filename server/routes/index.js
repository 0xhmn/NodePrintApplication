var express = require('express');
var router = express.Router();
var lib = require('./../../lib');


/* GET / */
router.get('/', function(req, res) {
	res.send('<h1>Express Home Page</h1><p>send your post req to this url</p>');
});



/* POST / */
router.post('/', function(req, res) {
	// only accepts 'application/json'
	if (req.headers['content-type'] != 'application/json'){
		console.log('you need to send application/json');
		res.sendStatus(415);
	}
	
	// console.log(req.body);
    lib.appBuilder.buildHtml(req.body, "default");
	res.send('got the post');




});

/**
 * making test-template
 */
router.post('/test', function(req, res) {
	// only accepts 'application/json'
	if (req.headers['content-type'] != 'application/json'){
		console.log('you need to send application/json');
		res.sendStatus(415);
	}

    lib.appBuilder.buildHtml(req.body, "test");
    res.send('got the test post');

});

module.exports = router;