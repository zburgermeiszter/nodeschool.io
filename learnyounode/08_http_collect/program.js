var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {

    var len = 0;
    var fullData = "";

    response.setEncoding('utf8');
    response
    .on('data', function(data) {
        fullData += data;
        len += data.length;
    })
    .on('end', function(data) {
        console.log(len);
        console.log(fullData);
    });
});