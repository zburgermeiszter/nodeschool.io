var request = require('request');
var postStream = request.post('http://localhost:8099');

process.stdin.pipe(postStream).pipe(process.stdout);
