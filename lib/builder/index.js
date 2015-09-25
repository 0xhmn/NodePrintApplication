var fs = require('fs');		// remove it
var path = require('path');
var render = require('./../render');
var http = require('http');
var express = require('express');
var app = express();
var pdf = require('html-pdf');

// used in server/routes/index
function appBuilder(callback, jsonData, template) {
	// Render json
	try {
		var rendered = render(jsonData, template);
		callback(null, rendered);
	} catch (e) {
		return callback(e);
	}
}

function buildHtml(jsonData, template) {
	appBuilder(function(err, html) {
		if (err) {
			console.log('startServer error: ' + err);
			html = err;
            callback(err);
		}
		fs.writeFile(process.cwd() + '/server/tmp/tmp.html', html, function(err){
			if (err) {
				console.log(err);
			}
            // now I have html, then make pdf file
            // setTimeout(buildPDF, 10000);
			buildPDF();
			console.log('wrote the file');
		})
	}, jsonData, template);

}

function buildPDF() {
    var htmlPath = process.cwd() + '/server/tmp/tmp.html';
    var html = fs.readFileSync(htmlPath, 'utf-8');
    var pdfPath = process.cwd() + '/server/tmp/tmp.pdf';
    // console.log(process.cwd());

    var options = {
        format: 'A4',
        "border": {
            "top": "1in",            // default is 0, units: mm, cm, in, px
            "right": "0.5in",
            "bottom": "1in",
            "left": "0.5in"
        }
    };

    pdf.create(html, options).toFile(pdfPath, function(err, res) {
        if (err) return console.log(err);
        // console.log(res);
    })

}


module.exports = {
	buildHtml : buildHtml
};