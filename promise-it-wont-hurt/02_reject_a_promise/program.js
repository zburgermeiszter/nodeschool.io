var q = require('q');
var defer = q.defer();
var promise = defer.promise;

promise.then(null, function(error) {
    console.log(error.message);
});
setTimeout(defer.reject, 300, new Error('REJECTED!'));