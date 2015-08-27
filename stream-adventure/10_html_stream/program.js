var trumpet = require('trumpet');
var tr = trumpet();

tr.select('.loud').createStream()
    .on('data', function(data) {
        this.write(data.toString().toUpperCase());
    })
    .on('end', function() {
        this.end();
    });


process.stdin.pipe(tr).pipe(process.stdout);