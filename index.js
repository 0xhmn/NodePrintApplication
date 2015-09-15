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
    .command('test')
    .description('just another test command')
    .action(function() {
        lib.test.validate();
    });

program
    .command('init')
    .description('getting or making the json file')
    .action(function() {
        lib.init();
    });

//program
//    .command('export [fileUrl]')
//    .description('export a .html, .md or .pdf file. Choose the format with --format <file format>')
//    .action(function() {
//        lib.exportResume
//    });

// parsing commandline arguments
program
    .parse(process.argv);

if(!program.args.length){
    console.log("you can choose one of these arguments:");
    program.help();
}