var q = require('q');
var defer = q.defer();
var promise = defer.promise;


function attachTitle(str) {
    return "DR. " + str;
}

promise
    .then(attachTitle)
    .then(console.log);

defer.resolve("MANHATTAN");