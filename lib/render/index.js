/**
 * rendering parsed-json-data using handlebar
 * TODO: use Angular for purpose of consistency
 */
var fs = require('fs');
var Handlebars = require("handlebars");
var path = require('path');

module.exports = function render(jsonApplication, template) {
	// TODO: make a better req method to call css and hbs files
	var cssDir = '../templates/style.css';
	var hbsDir = '../templates/' + template +'.hbs';

	var css = fs.readFileSync(cssDir, "utf-8");
	var tpl = fs.readFileSync(hbsDir, "utf-8");
	return Handlebars.compile(tpl)({
		css: css,
		user: jsonApplication
	})
};