

var exportable = function(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dir, function (err, list) {
        if(err)
            return callback(err);

        list = list.filter(function(item) {
            return path.extname(item) === '.'+ext;
        });

        callback(null, list);
    });

}

module.exports = exportable;