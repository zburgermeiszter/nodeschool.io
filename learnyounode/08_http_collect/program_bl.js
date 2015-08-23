var http = require('http');
var url = process.argv[2];
var bl = require('bl');

http
.get(url, function(response) {
    response.setEncoding('utf8');
    response.pipe(bl(function(err, data) {
        if(err)
            return console.error(err);
        console.log(data.length);
        console.log(data);
    }));
})
.on('error', function(e) {
    console.error(e);
})