function reduce(arr, fn, initial) {
    arr = arr.slice(); // removing array reference (don't want to modify original input array)
    if(!arr.length) return [];
    reduce(arr, fn, fn(initial, arr.pop(), arr.length, arr));
    return initial;
}

module.exports = reduce;