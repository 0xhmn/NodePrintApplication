var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
//routing modules
var async = require('async');
var lib = require('./../lib');

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
 * ToDo: find a way to make 'route' compatible with iisnode by adding routes to web.config watch list
 */
/* GET / */
app.get('/nodeprint/server', function(req, res) {
    res.send('<h1>Express Home Page</h1><p>Send your post req to the url</p><P>More Information <a href="https://github.umn.edu/hooman/NodePrintApplication">Here</a></P>');
});
app.get('/nodeprint/server/test', function(req, res) {
    // testing the builder
    res.send(lib.appBuilder.appTestBuilder());

});

/* POST / */
app.post('/nodeprint/server/', function(req, res) {
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
            consoel.log(err);
            res.sendStatus(500);
        }
    });
});

/**
 * making test-template for POST req
 */
app.post('/nodeprint/server/test', function(req, res) {
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

/**
 * manage static files
 */
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