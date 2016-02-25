var fs = require('fs');

var str = fs.readFileSync('/path/to/file');
var str = str.toString().split('\n');


console.log(str.length);