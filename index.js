/**
 * Created by yar00001 on 9/15/2015.
 */

var pkg = require('./package.json');
var program = require('commander');
var lib = require('./lib');
var sample = require('./sample/resume.json');


program
    .usage("[command] [options]")
    .version(pkg.version)
    .option('-t, --theme <theme name>', 'Specify theme for export')
    .option('-u --url', 'specify json url')
    .option('-f, --format <file format>', 'Used by `export`');

program
    .command('test [name]')
    .description('just another test command')
    .action(function (name) {
        lib.test(name);
    });

// might be removed
// make some sample json object
program
    .command('init')
    .description('getting or making the json file')
    .action(function () {
        lib.init();
    });

// var url = 'http://www.w3schools.com/website/customers_mysql.php';

program
    .command('getjson [jsonUrl]')
    .description('fetch json file from a url')
    .action(function (jsonUrl) {
        lib.getJson(jsonUrl);
    });


// parsing commandline arguments
program
    .parse(process.argv);

if (!program.args.length) {
    console.log("you can choose one of these arguments:");
    program.help();
}