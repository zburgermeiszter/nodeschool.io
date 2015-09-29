var q = require('q');

var defer1 = q.defer();
var defer2 = q.defer();

q.all([defer1.promise, defer2.promise]).spread(function(promise1Result, promise2Result) {
    console.log([
        promise1Result,
        promise2Result
    ]);
}).done(null, console.error);

setTimeout(function() {
    defer1.resolve("PROMISES");
    defer2.resolve("FTW");
}, 200);