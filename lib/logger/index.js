var fs = require("fs");

function logRequests(data) {
    var currentDate = (new Date()).toLocaleString();
    var jsonLog = {
        printReqDate: currentDate,
        applicantInfo: {firstName: data.about.firstName, lastName: data.about.lastName},
        program: {programId: data.program.id, name: data.program.name, term: data.program.term }
    };


    var logText = JSON.stringify(jsonLog) + "\n";

    fs.appendFile(process.cwd() + "/logs/log.txt", logText, function (err) {
        if (err) console.log(err);
        else Console.log("saved");
    })
}

module.exports = {
    logRequests : logRequests
};