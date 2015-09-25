var multilevel = require('multilevel');
var net = require('net');
var db = multilevel.client();
var connection = net.connect(4545);
connection.pipe(db.createRpcStream()).pipe(connection);

db.get('multilevelmeup', function(err, item) {
    if(err) throw err;
    console.log(item);
    connection.end();
});