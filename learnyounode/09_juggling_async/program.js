var http = require('http');
var urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4]
];

var callbackCounter = 0;

urls.forEach(function(url, index) {

    http.get(url, function(response) {

        var buffer = '';
        response.setEncoding('utf8');
        response
        .on('data', function(data) {
            buffer += data;
        })
        .on('end', function() {
            urls[index] = buffer;
            callbackCounter++;
            if(callbackCounter == urls.length) {
                urls.forEach(function(result) {
                    console.log(result);
                });
            }
        });

    });

});