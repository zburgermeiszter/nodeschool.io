var q = require('q');

function parsePromised(str) {
    var defer = q.defer();
    var promise = defer.promise;

    try {
        JSON.parse(str);
        defer.resolve("OK");
    } catch(e) {
        defer.reject(e);
    }
    return promise;
}

parsePromised(process.argv[2])
    .then(null, console.log);