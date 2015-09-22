function curryN(fn, n) {

    // n is optional
    if (typeof n === 'undefined') {
        n = fn.length
    }

    // return a function with single argument
    return function curry(arg) {

        // if the initial curryN callback accepts exactly 1 argument, then return a function call
        // it is the base case of the recursion
        if (n === 1) {
            return fn(arg);
        }

        // if there are more than 1 arguments then bind the single argument, and run recursion
        return curryN(fn.bind(this, arg), n-1);
    }
}

module.exports = curryN;