var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var path = process.argv[3];

var callback = function(request, response) {
    // https://docs.nodejitsu.com/articles/advanced/streams/how-to-use-fs-create-read-stream

    var readStream = fs.createReadStream(path);
    readStream.on('open', function() {
        readStream.pipe(response);
    });
    readStream.on('error', function(err) {
        response.end(err);
    });
};

http.createServer(callback).listen(Number(port));