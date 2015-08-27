var combine = require('stream-combiner');
var split = require('split');
var through = require('through'); // 1 !!!
var zlib = require('zlib');
/*

 Read newline separated json -> group [through] -> gzip

 */

module.exports = function () {

    var genres = [];

    function write(buffer) {
        if (buffer.length == 0)
            return false;

        buffer = JSON.parse(buffer);
        if (buffer.type == 'genre') {
            genres.push({
                name: buffer.name,
                books: []
            });
        } else if (buffer.type == 'book') {
            genres[genres.length - 1].books.push(buffer.name);
        }
    }

    function end() {
        for (var i = 0; i < genres.length; i++) {
            this.queue(JSON.stringify(genres[i]) + '\n');
        }
        this.queue(null);
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
