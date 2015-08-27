/*
 An encrypted, gzipped tar file will be piped in on process.stdin. To beat this
 challenge, for each file in the tar input, print a hex-encoded md5 hash of the
 file contents followed by a single space followed by the filename, then a
 newline.

 You will receive the cipher name as process.argv[2] and the cipher passphrase as
 process.argv[3].
 */

var tar = require('tar');
var zlib = require('zlib');
var crypto = require('crypto');

var tarParser = tar.Parse();
var decrypt = crypto.createDecipher(process.argv[2], process.argv[3]);
var unzip = zlib.createGunzip();

// tarParser entry event (https://github.com/npm/node-tar/blob/master/examples/reader.js)
tarParser.on("entry", function (entry) { // entry is a stream here, therefore on('data') and .on('end') is available
    if(entry.type !== 'File') {
        return;
    }

    var md5 = crypto.createHash('md5', { encoding: 'hex' });

    entry.on('data', function(data) {
        md5.update(data);
    });

    entry.on('end', function() {
        console.log(md5.digest('hex') + ' ' + entry.path);
    });

});

process.stdin
    .pipe(decrypt) // encrypted
    .pipe(unzip) // gzipped
    .pipe(tarParser) // tar
;