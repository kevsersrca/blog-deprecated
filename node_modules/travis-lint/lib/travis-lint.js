/*
 * 
 * https://github.com/pwmckenna/node-travis-lint
 *
 * Copyright (c) 2014 Patrick Williams
 * Licensed under the MIT license.
 */

'use strict';

var Travis = require('travis-ci');

module.exports = exports = function (content, cb) {
    var travis = new Travis({
        version: '2.0.0'
    });
    travis.lint.post(content, function (err, res) {
        if (err) { return cb(err); }
        if (!res) { return cb(new Error('no result')); }
        if (!res.hasOwnProperty('lint')) { return cb(new Error('no lint object')); }
        if (!res.lint.hasOwnProperty('warnings')) { return cb(new Error('no lint warning array')); }
        cb(null, res.lint.warnings);
    });
};
