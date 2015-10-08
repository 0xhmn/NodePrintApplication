/**
 * rendering parsed-json-data using handlebar
 * TODO: use Angular for purpose of consistency
 */
var fs = require('fs');
var Handlebars = require("handlebars");
var path = require('path');

module.exports = function render(jsonApplication, template) {
	/* CSS */
    var cssTest = '../templates/css/style_test.css';
	var cssFile = '../templates/css/style.css';
    var bootstrapFile = '../templates/css/bootstrap.min.css';
	var hbsDir = '../templates/' + template +'.hbs';

	var css = fs.readFileSync(cssFile, "utf-8");
    var bootstrap = fs.readFileSync(bootstrapFile, "utf-8");
	var tpl = fs.readFileSync(hbsDir, "utf-8");
	return Handlebars.compile(tpl)({
		css: css,
        bootstrap: bootstrap,
		user: jsonApplication
	})
};