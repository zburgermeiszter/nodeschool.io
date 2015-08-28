function countWords(inputWords) {
    return inputWords.reduce(function(previousValue, currentValue, index, array) {

        var ret;
        if(typeof previousValue !== 'object') {
            ret = {};
            ret[previousValue] = 1;
            ret[currentValue] = 1;
            return ret;
        }

        ret = previousValue;
        ret[currentValue] = (ret[currentValue] || 0) + 1;
        return ret;
    });
}

module.exports = countWords;