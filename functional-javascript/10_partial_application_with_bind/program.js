module.exports = function (namespace) {
    return (function() {
        return console.log.bind(console, namespace);
    }).apply(console, arguments);
};