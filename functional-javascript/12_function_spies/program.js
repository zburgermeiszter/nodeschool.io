function Spy(target, method) {

    var counterObj = {count: 0};

    // save the original function to a variable
    var originalFunction = target[method];

    // assign new function to the original function pointer
    target[method] = function() {
        counterObj.count++; // update the counter on function call
        return originalFunction.apply(target, arguments); // call the original function with original parameters/
    };

    // return counter object
    return counterObj;
}

module.exports = Spy;
