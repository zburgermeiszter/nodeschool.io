// Explained:
// The value of `this` in Function.call is the function
// that will be executed.
//
// Bind returns a new function with the value of `this` fixed
// to whatever was passed as its first argument.
//
// Every function 'inherits' from Function.prototype,
// thus every function, including call, apply and bind
// have the methods call apply and bind.
//
// Function.prototype.call === Function.call
module.exports = Function.call.bind(Array.prototype.slice);


/*
 Try this to understand the solution:

 - Function.call executes the function at this.
 - bind allows us to set the value at this for any function, including call.
 - Array.prototype.slice is the function we want to set the this to.
 - arguments passed to Function.call are passed as regular comma separated arguments.
 - bind gives us back a new function. arguments passed to this new function will be passed through transparently to the function that was bound (in this case Function.call)

 Source: https://github.com/nodeschool/discussions/issues/172#issuecomment-33105032
*/