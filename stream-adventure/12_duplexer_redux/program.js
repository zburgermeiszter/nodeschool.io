var duplexer = require('duplexer2');
var through = require('through2');

module.exports = function (counter) {

    var countryCounts = {};

    // through is basically a writable stream.
    var writable = through.obj(function(object, encoding, next) {
        if(object.country in countryCounts) {
            countryCounts[object.country]++;
        } else {
            countryCounts[object.country] = 1;
        }
        next();
    });


    var duplex = duplexer(writable, counter);

    duplex.on('finish', function() {
        // and pass through `counter` on the readable side
        counter.setCounts(countryCounts);
    });

    // return a duplex stream to count countries on the writable side
    return duplex; // the tester will use this returned DuplexStream to write to / read from it.
};