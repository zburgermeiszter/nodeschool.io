var http = require('http');
var bl = require('bl');

var urls = [
    process.argv[2],
    process.argv[3],
    process.argv[4]
];

var results = [];

var printResults = function () {
    results.forEach(function(result) {
        console.log(result);
    });
}

function fetchUrls(urls, callback) {
    var callbackCounter = 0;
    urls.forEach(function(url, index) {

        http.get(url, function(response) {
            response
            .pipe(bl(function(err, data) {
                results[index] = data.toString();
                callbackCounter++;
                if(callbackCounter == urls.length) {
                    callback();
                }
            }));

        });

    });
};

fetchUrls(urls, printResults);