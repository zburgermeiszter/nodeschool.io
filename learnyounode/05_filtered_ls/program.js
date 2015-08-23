var fs = require('fs');
var path = require('path');

var callback = function (err, list) {
	list.forEach(function(item) {
		if( path.extname(item) === '.'+process.argv[3]) {
			console.log(item);
		}
	});
}

fs.readdir(process.argv[2], callback);
