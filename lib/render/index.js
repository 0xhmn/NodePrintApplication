/**
 * rendering parsed-json-data using handlebar
 * TODO: use Angular for purpose of consistency
 */
var fs = require('fs');
var Handlebars = require("handlebars");
var path = require('path');

module.exports = function render(jsonApplication, template) {
	/* CSS */
	var cssFile = '../templates/css/style.css';
	var hbsDir = '../templates/' + template +'.hbs';

	var css = fs.readFileSync(cssFile, "utf-8");
	var tpl = fs.readFileSync(hbsDir, "utf-8");
	return Handlebars.compile(tpl)({
		css: css,
		user: jsonApplication
	})
};