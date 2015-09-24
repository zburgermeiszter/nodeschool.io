var level = require('level');
var db = level(process.argv[2]);

for (var i = 0; i <= 100; i++) {
    var key = 'key' + i;
    (function () {
        var index = key;
        db.get(index, function (err, value) {
            if (err) {
                // skip any other types of error.
                if(!err.notFound) throw(err);
            } else {
                if (typeof value !== 'undefined') console.log(index + '=' + value);
            }
        });
    })(key);
}