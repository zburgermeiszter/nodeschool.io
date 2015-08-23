var http = require('http');
var url = process.argv[2];
var concatStream = require('concat-stream');

http
.get(url, function(response) {
    response.setEncoding('utf8');

    response.pipe(concatStream(function(data) {
        console.log(data.length);
        console.log(data);
    }));

})
.on('error', function(e) {
    console.error(e);
})