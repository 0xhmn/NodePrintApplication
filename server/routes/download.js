var express = require('express');
var router = express.Router();
var lib = require('./../../lib');
var path = require('path');


/* GET / */
router.get('/html', function(req, res) {
    res.sendFile(path.join(__dirname , '../tmp/tmp.html'));
});

router.get('/pdf', function(req, res) {
    res.sendFile(path.join(__dirname , '../tmp/tmp.pdf'));
});

module.exports = router;