/**
 * rendering parsed-json-data using handlebar
 */
var fs = require('fs');
var Handlebars = require("handlebars");
var path = require('path');

module.exports = function render(jsonApplication, template) {
	/* CSS */
	var cssFile = path.join(__dirname , '../../templates/css/style.css');
	var hbsDir = path.join(__dirname , '../../templates/' + template +'.hbs');

	var css = fs.readFileSync(cssFile, "utf-8");
	var tpl = fs.readFileSync(hbsDir, "utf-8");
	return Handlebars.compile(tpl)({
		css: css,
		user: jsonApplication
	})
};