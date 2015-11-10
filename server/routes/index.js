var express = require('express');
var router = express.Router();
var async = require('async');
var lib = require('./../../lib');

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
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
            }, req.body.json, req.body.temp);
        },
        function sendRes(html, sendCallback) {
            res.send({msg: "done", html: html});
            sendCallback();
        }
    ], function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });
});

module.exports = router;