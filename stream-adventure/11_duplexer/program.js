var spawn = require('child_process').spawn;
var duplexer = require('duplexer');

module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    var childProcess = spawn(cmd, args);

    // joining together the stdin and stdout here
    return duplexer(childProcess.stdin, childProcess.stdout);
};
