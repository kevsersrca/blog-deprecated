#  [![Build Status](https://secure.travis-ci.org/pwmckenna/node-travis-lint.png?branch=master)](http://travis-ci.org/pwmckenna/node-travis-lint)

> Lint your travis.yml file


## Getting Started

Install the module with: `npm install travis-lint`

```js
var lint = require('travis-lint');
lint(fs.readFileSync('.travis.yml'), function (err, warnings) {
    // warnings is an array of the issues with your yml file
});
```

Install with cli command

```sh
$ npm install -g travis-lint
$ travis-lint .travis.yml
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com).


## License

Copyright (c) 2014 Patrick Williams  
Licensed under the MIT license.
