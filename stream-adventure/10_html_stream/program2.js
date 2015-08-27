// https://github.com/substack/node-trumpet
var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet();

var ws = tr.select('.loud').createStream(); // filter .loud, and make it stream
// pipe the .loud stream to through(), to the transformations,
ws
    .pipe(through(function(buffer, encoding, next) {
        ws.write(buffer.toString().toUpperCase());
        next();
    }))
    .pipe(ws); // pipe the transformed stream back to itself, which is a selection of the original stream

process.stdin.pipe(tr).pipe(process.stdout);