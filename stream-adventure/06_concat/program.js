var concat = require('concat-stream');

var reverse = function (str) {
    return str.split('').reverse().join('');
};

process.stdin.pipe(concat(function (body) {
    console.log(reverse(body.toString()));
}));
