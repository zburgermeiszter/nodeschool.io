function reduce(arr, fn, initial) {

    if (arr.length == 0) return initial; // end condition

    // recursive step
    return reduce(

        // use a copy of arr and remove the first item from the copy
        arr.slice(1),

        // passing the reduce logic function through to the next recursive call.
        fn,

        // calling the fn with the initial (which is always the return of the fn or an empty array in the first step)
        // and the first item from the input array of the current step
        fn(initial, arr[0])

    );

}

module.exports = reduce;