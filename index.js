var testpkg1 = require('testpkg1');

var filelist = [];

var res = [];
res = res.concat(testpkg1.func1());
res = res.concat(testpkg1.func2());

console.log(res);

