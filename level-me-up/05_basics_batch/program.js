var level = require('level');
var fs = require('fs');

var db = level(process.argv[2]);
var lines = fs.readFileSync(process.argv[3], 'utf8').split('\n');


db.on('ready', function () {
    var batch = db.batch();

    for (var i = 0, len = lines.length; i < len; i++) {
        var line = lines[i];
        var commaSplitLine = line.split(',');
        processPutDel(batch, commaSplitLine);
    }

    batch.write(function (err) {
        if (err) throw err;
    });

});

function processPutDel(batch, lineArr) {
    var func = lineArr[0];
    var key = lineArr[1];
    var val = lineArr[2];

    switch (func) {
        case 'del':
            batch.del(key);
            break;
        case 'put':
            batch.put(key, val);
            break;
        default:
            console.error('ERR:', line);
            return;
            break;
    }
}