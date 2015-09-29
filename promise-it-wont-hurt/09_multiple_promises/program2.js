var q = require('q');

var defer1 = q.defer();
var defer2 = q.defer();

q.all([defer1.promise, defer2.promise]).then(function(promiseResults) {
    console.log(promiseResults.map(function(promiseResultObj) {
        return "" + promiseResultObj;
    }))
}).done(null, console.error);

setTimeout(function() {
    defer1.resolve("PROMISES");
    defer2.resolve("FTW");
}, 200);