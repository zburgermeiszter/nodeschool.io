var HTTP = require('q-io/http');

HTTP.read('http://localhost:1337').then(function(response) {
    console.log(JSON.parse(response));
}).done(null, console.error);