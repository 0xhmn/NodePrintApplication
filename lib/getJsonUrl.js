/**
 * sending request using 'http.get', 'express' or 'request'
 * this method is based on http.get
 * and we save the json file (remove this part in production)
 */
var http = require('http');
var url = 'http://www.w3schools.com/website/customers_mysql.php';



http.get(url, function(res){
    var body = '';
    res.on('data', function(chunk){
        body += chunk;
    });
    res.on('end', function(){
        var result = JSON.parse(body);
        console.log("got a response: " , result);
        writeToFile(result);
    });
}).on('error', function(e){
    console.log('Got an error: ', e);
});

// writing to file
var fs = require('fs');
function writeToFile(json) {
    var stringJson = JSON.stringify(json);
    fs.writeFile('resume.json', stringJson, 'utf8', function(err){
        if (err) return console.log(err);
        console.log('done');
    })
}

