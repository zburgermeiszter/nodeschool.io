function duckCount() {

    if (!arguments.length) return 0;// end condition

    var current = Array.prototype.slice.call(arguments, 0, 1)[0];
    var leftover = Array.prototype.slice.call(arguments, 1);

    var meDuck = Object.prototype.hasOwnProperty.call(current, 'quack') ? 1 : 0;

    return meDuck + duckCount.apply(this, leftover);

}

module.exports = duckCount;