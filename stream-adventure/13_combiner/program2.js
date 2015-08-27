var combine = require('stream-combiner');
var split = require('split');
var through = require('through2'); // 2 !!!
var zlib = require('zlib');
/*

 Read newline separated json -> group [through] -> gzip

 */

module.exports = function () {

    var genre = undefined;

    function write(row, encoding, next) {
        if (row.length == 0) return next();

        row = JSON.parse(row);
        if (row.type === 'genre') {

            streamPush(this, genre);

            genre = {
                name: row.name,
                books: []
            };

        } else if (row.type === 'book') {
            genre.books.push(row.name);
        }

        next();
    }

    function end(next) {
        streamPush(this, genre);
        next();
    }

    function streamPush(self, genre) {
        if (genre !== undefined)
            self.push(JSON.stringify(genre) + '\n');
    }

    return combine(
        // read newline-separated json,
        split('\n'),
        // group books into genres,
        through(write, end),
        // then gzip the output
        zlib.createGzip()
    );
};
