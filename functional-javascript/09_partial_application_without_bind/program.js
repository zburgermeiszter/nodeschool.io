var slice = Array.prototype.slice;

function logger(namespace) {
    return function() {
        var out =  [namespace].concat(slice.call(arguments));
        return console.log.apply(null, out);
    }
}

module.exports = logger;