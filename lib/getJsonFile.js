var fs = require('fs');
// jsonFile is the User's json data
function getJson(jsonFile, callback) {
    var dataJson = false;
    fs.readFile(jsonFile, 'utf8', function(jsonFileDoesNotExist, data){
        if (jsonFileDoesNotExist) {
            dataJson = false;
            callback(null);
        } else {
            try {
                dataJson = JSON.parse(data);
                callback(null, dataJson);
            } catch(error) {
                callback(error);
            }
        }
    })
}

module.exports = getJson;
