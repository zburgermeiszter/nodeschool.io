var net = require('net');
var port = process.argv[2];
var strftime = require('strftime');

var server = net.createServer(function(socket) {
    var date = new Date();
    var formattedDate = strftime("%Y-%m-%d %H:%M", date);

    socket.write(formattedDate + '\n');
    socket.end();
});
server.listen(Number(port));