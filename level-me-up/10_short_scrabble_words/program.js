module.exports.init = function (db, words, callback) {
    // insert each word in the words array here
    // then call `callback()` when you are done inserting words

    var batch = db.batch();

    words.forEach(function (word) {
        batch.put(word.length + '|' + word, word);
    });

    batch.write(callback);
};

module.exports.query = function (db, word, callback) {
    // `word` may have '*' chars to denote single-letter wildcards
    // call callback(err, results) with an array of matching words
    var matchingWords = [];
    var originalLength = word.length;
    var wordPrefix = word.replace(/\*/g, '');
    var key = originalLength + '|' + wordPrefix;

    db.createReadStream({start: key, end: key + '\xff'})
        .on('data', function (data) {
            if (data.value.length == originalLength) {
                matchingWords.push(data.value);
            }
        })
        .on('error', function (err) {
            if (callback)
                callback(err);
        })
        .on('end', function () {
            if (callback)
                callback(null, matchingWords);
        });
};
