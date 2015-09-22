function countWords(inputWords) {
    return inputWords.reduce(function(countObject, word) {
        countObject[word] = (countObject[word] || 0) + 1;
        return countObject;
    }, {});
}

module.exports = countWords;