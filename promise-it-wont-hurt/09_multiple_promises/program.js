var q = require('q');

var defer1 = q.defer();
var defer2 = q.defer();

function all(promise1, promise2) {
    var internalPromise = q.defer();
    var counter = 0;

    var ffHandler = function() {
        counter++;

        if(counter == 2) {
            internalPromise.resolve([promise1, promise2]);
        }
    };

    promise1.then(ffHandler).done(null, internalPromise.reject);
    promise2.then(ffHandler).done(null, internalPromise.reject);

    return internalPromise.promise;
}

all(defer1.promise, defer2.promise).then(function(promiseResults) {
    console.log(promiseResults.map(function(promiseResultObj) {
        return "" + promiseResultObj;
    }))
}).done(null, console.error);

setTimeout(function() {
    defer1.resolve("PROMISES");
    defer2.resolve("FTW");
}, 200);