module.exports = function (db, date, callback) {
    var stream = db.createReadStream({start: date});
    var tweetCount = 0;
    stream
        .on('data', function (line) {
            tweetCount++;
        })
        .on('end', function () {
            callback(null, tweetCount);
        })
        .on('error', function (err) {
            callback(err);
        });
};