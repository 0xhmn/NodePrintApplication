var fs = require('fs');		// remove it
var path = require('path');
var render = require('./../render');
var http = require('http');
var express = require('express');
var app = express();
var pdf = require('html-pdf');

// TODO: pass and define 'theme' argument for builder
// used in server/routes/index
function appBuilder(callback, jsonData, template) {
	// validate the jsonFile
/*	fs.readFile(jsonData, function (err, jsonData) {
		var parsedJson;
		if (err) {
			console.log('json data is not available');
			// TODO: use a default json data
			parsedJson = false;
		} else {
			try {
				// TODO: validate json data
				parsedJson = JSON.parse(jsonData);
			} catch (e) {
				var err = 'Parse Error: ' + jsonData;
				return callback(err);
			}
		}

		// RENDER the json file to HTML
		try {
			var rendered = render(parsedJson, template);
			callback(null, rendered);
		} catch (e) {
			return callback(e);
		}

	})*/

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
		}
		fs.writeFile(process.cwd() + '/server/tmp/tmp.html', html, function(err){
			if (err) {
				console.log(err);
			}
			console.log('wrote the file');
		})
	}, jsonData, template)
}

function buildPDF() {
    var htmlPath = process.cwd() + '/server/tmp/tmp.html';
    var html = fs.readFileSync(htmlPath, 'utf-8');
    var pdfPath = process.cwd() + '/server/tmp/tmp.pdf';
    console.log(process.cwd());

    var options = {
        format: 'A4',
        "border": {
            "top": "1in",            // default is 0, units: mm, cm, in, px
            "right": "0in",
            "bottom": "1in",
            "left": "0in"
        }
    };
    // check if the file exists
    if (fs.existsSync(htmlPath)) {
        pdf.create(html, options).toFile(pdfPath, function(err, res) {
            if (err) return console.log(err);
            console.log(res);
        })
    } else {
        console.log('The html file does not exist');
    }
}


module.exports = {
	buildHtml : buildHtml,
	buildPDF : buildPDF
};