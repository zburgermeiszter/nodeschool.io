function repeat(operation, num) {
    if (num <= 0) return;
    operation();
    return trampoline(function(){
        return repeat(operation, --num);
    });
}

function trampoline(fn) {
    // You probably want to implement a trampoline!
    return fn;
}

module.exports = function(operation, num) {
    // You probably want to call your trampoline here!
    return repeat(operation, num)
};
