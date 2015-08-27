var through = require('through2');

var i = 0;

var tr = through(function (buffer, encoding, next) {
    var line = buffer.toString();

    if (i % 2) {
        line = line.toUpperCase();
    } else {
        line = line.toLowerCase();
    }
    this.push(line);

    i++;
    next();
});


process.stdin
    .pipe(tr)
    .pipe(process.stdout)
;