#! /usr/bin/env node

'use strict';

var lint = require('./lib/travis-lint');
var fs = require('fs');

var userArgs = process.argv;
var searchParam = userArgs[2];


var printHelp = function () {
    var help = 
        'Usage: travis-lint [options] [file]' +
        '\n\nGeneral options:' +
          '\n\t-h, --help     # Print travis-lint\'s options and usage' +
          '\n\t-v, --version  # Print travis-lint version';
    console.log(help);
};

if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || searchParam === undefined) {
    return printHelp();
}

if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
    return console.log(require('./package').version);
}

lint(fs.readFileSync(searchParam), function (err, res) {
    if (res.length) {
        for (var i = 0; i < res.length; ++i) {
            console.warn(res[i].message);
            process.exit(1);
        }
    } else {
        console.log('.travis.yml looks great.');
    }
});
