var HTTP = require('q-io/http');

var sessionCache = HTTP.read('http://localhost:7000');

sessionCache
    .then(function (userID) {
        return HTTP.read('http://localhost:7001/' + userID);
    })
    .then(function (userDataJSON) {
        console.log(JSON.parse(userDataJSON.toString()));
    })
    .then(null, console.error)
    .done();