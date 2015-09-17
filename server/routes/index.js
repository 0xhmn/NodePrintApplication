var express = require('express');
var router = express.Router();

/* GET / */
router.get('/', function(req, res) {
	res.send('express home page');
})

// /* POST / */
// router.get('/', function(req, res) {
// 	res.send('post req recieved');	
// 	console.log(req.body);
// })


module.exports = router;