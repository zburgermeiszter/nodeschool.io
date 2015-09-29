var q = require('q');
var defer = q.defer();
var promise = defer.promise;

q.fcall(JSON.parse, process.argv[2]).then(null, console.log);