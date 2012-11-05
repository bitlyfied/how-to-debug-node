var util = require('util');

// inspect the Boolean function constructor
// options: show hidden fields, 1 depth of recursion, use ANSI colors
util.puts(util.inspect(Boolean, true, 1, true));