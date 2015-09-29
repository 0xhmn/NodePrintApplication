var fs = require('fs');		// remove it
var path = require('path');
var render = require('./../render');
var http = require('http');
var pdf = require('html-pdf');

// used in server/routes/index
function appBuilder(buildCallback, jsonData, template) {
	// Render json
	try {
		var html = render(jsonData, template);
        buildCallback(null, html);
	} catch (e) {
		return buildCallback(e);
	}
}

function appTestBuilder() {
	console.log('reading: ');
	var sampleHtml = '../templates/tmp.html';
	var data = fs.readFileSync(sampleHtml, 'utf-8').toString();

	return data;
}

/**
 * writing down the HTML file. We don't need the file for now
 * instead we need to send the html as stream
 * @param jsonData
 * @param template
 */
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
			// buildPDF();
			console.log('wrote the file');
		})
	}, jsonData, template);

}

/**
 * for now we do not need to create the PDF file
 */
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
	buildHtml : buildHtml,
    appBuilder: appBuilder,
	appTestBuilder : appTestBuilder
};