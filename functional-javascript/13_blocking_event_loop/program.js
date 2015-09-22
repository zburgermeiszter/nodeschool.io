function repeat(operation, num) {

    if (num <= 0) return;
    setTimeout(function() {
        operation();
    }, 0);
    repeat(operation, --num);
}

module.exports = repeat;
