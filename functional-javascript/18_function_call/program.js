// Take the Function object, and bind the array prototype slice to the Function.call function..
// This is basically this is the way to make an alias to a function call.

module.exports = Function.prototype.call.bind(Array.prototype.slice);