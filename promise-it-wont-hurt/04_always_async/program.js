var q = require('q');
var defer = q.defer();
var promise = defer.promise;

promise.then(console.log);

defer.resolve('SECOND');
console.log('FIRST');