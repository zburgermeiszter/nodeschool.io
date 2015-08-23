var http = require('http');
var map = require('through2-map');
var fs = require('fs');
var port = process.argv[2];


var callback = function(req, res) {
    if(req.method != 'POST')
        return res.end('Only POST accepted\n');

    req
    .pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    }))
    .pipe(res);
}

var server = http.createServer(callback).listen(port);
