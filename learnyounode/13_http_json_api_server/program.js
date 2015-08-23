var http = require('http');
var port = process.argv[2];
var url = require('url');

var callback = function(req, res) {
    if(req.method != 'GET')
        return res.end('GET expected\n');

    var urlObj = url.parse(req.url, true)
    var route = urlObj.pathname;

    res.writeHead(200, { 'Content-Type': 'application/json' })
    var date = new Date(urlObj.query.iso);

    switch(route) {
        case '/api/parsetime':
            return res.end(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }));
            break;
        case '/api/unixtime':
            return res.end(JSON.stringify({
                unixtime: date.getTime()
            }));
            break;
        default:
            res.writeHead(500);
            return res.end(JSON.stringify({
                error: 'Not supported'
            }));
            break;
    }

};

http.createServer(callback).listen(port)