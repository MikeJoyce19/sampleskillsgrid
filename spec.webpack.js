//builds up require module tree for webpack so that it can bundle spec files
require('babel-polyfill');
var testsContext = require.context('./spec', true, /\.spec\.jsx?$/);
testsContext.keys().forEach(testsContext);