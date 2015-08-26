var http = require('http');
var through = require('through2');
var port = parseInt(process.argv[2]);

var tr = through(function (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
});

http
    .createServer(function (req, res) {
        if (req.method !== 'POST') {
            return res.end('Only POST accepted!');
        }
        req.pipe(tr).pipe(res);
    })
    .listen(port);
