

var exportable = function(dir, ext, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dir, function (err, list) {
        if(err)
            return callback(err);

        var data = [];

        list.forEach(function(item) {
            if( path.extname(item) === '.'+ext) {
                data.push(item);
            }
        });

        return callback(null, data);
    });

}

module.exports = exportable;