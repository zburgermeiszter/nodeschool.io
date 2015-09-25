module.exports = function (db, date, callback) {
    var end =  date + '\xff';
    var stream = db.createReadStream({start: date, end: end});
    var tweets = [];
    stream
        .on('data', function (line) {
            tweets.push(line.value);
        })
        .on('end', function () {
            if(callback) {
                callback(null, tweets);
            }
            callback = null;
        })
        .on('error', function (err) {
            if(callback) {
                callback(err);
            }
            callback = null;
        });
};