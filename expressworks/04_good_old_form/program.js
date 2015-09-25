var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
    res.end(req.body.str.split('').reverse().join(''));
});

app.get('/form', function(req, res) {
    res.header({'Content-Type':'text/html'});
    res.end('<form method="POST"><input name="str"/></form>');
});

app.listen(process.argv[2]);