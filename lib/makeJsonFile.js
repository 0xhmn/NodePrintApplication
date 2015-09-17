/**
 * util file
 */
var fs = require('fs');
function makeJsonFile(jsonData) {
	var stringFormat = JSON.stringify(jsonData);
	// TODO: validate the json data before writing it to the file
	fs.writeFile('user.json', stringFormat, function(err){
		if (err) throw err;
		console.log('made the json file');
	});
}

module.exports = makeJsonFile;