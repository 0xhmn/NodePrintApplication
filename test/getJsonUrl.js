/**
 * sending request using 'http.get', 'express' or 'request'
 * this method is based on http.get
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
