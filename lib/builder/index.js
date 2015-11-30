var fs = require('fs');
var render = require('./../render');

// used in server/routes/index
function appBuilder(buildCallback, jsonData) {
	// Render json
	try {
		var html = render(jsonData, jsonData.template.templateName);
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

module.exports = {
	buildHtml : buildHtml,
    appBuilder: appBuilder,
	appTestBuilder : appTestBuilder
};
