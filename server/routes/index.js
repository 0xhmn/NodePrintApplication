var express = require('express');
var router = express.Router();
var lib = require('./../../lib');
var async = require('async');


/* GET / */
router.get('/', function(req, res) {
	res.send('<h1>Express Home Page</h1><p>send your post req to this urldssd</p>');
    // delete the file
});



/* POST / */
router.post('/', function(req, res) {
	// only accepts 'application/json'
	if (req.headers['content-type'] != 'application/json'){
		console.log('you need to send application/json');
		res.sendStatus(415);
	}

    async.waterfall([
        function makeHtml(makeHtmlCallback) {
            lib.appBuilder.appBuilder(function(err, html) {
                if (err) console.log(err);
                makeHtmlCallback(null, html);
            }, req.body, "default");
        },
        function sendRes(html, sendCallback) {
            res.send({msg: "done", html: html});
            sendCallback();
        }
    ], function(err) {
        if (err) {
            consoel.log(err);
            res.sendStatus(500);
        }
    });
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

    async.waterfall([
        function makeHtml(makeHtmlCallback) {
            lib.appBuilder.appBuilder(function(err, html) {
                if (err) console.log(err);
                makeHtmlCallback(null, html);
            }, req.body, "test");
        },
        function sendRes(html, sendCallback) {
            res.send({msg: "done", html: html});
            sendCallback();
        }
    ], function(err) {
        if (err) {
            consoel.log(err);
            res.sendStatus(500);
        }
    });

});

module.exports = router;