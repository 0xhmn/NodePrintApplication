var express = require('express');
var router = express.Router();

/* GET / */
router.get('/', function(req, res) {
	res.send('express home page');
})

module.exports = router;