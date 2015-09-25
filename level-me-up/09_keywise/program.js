var level = require('level');
var db = level(process.argv[2], { valueEncoding: 'json' });
var jsonContent = require(process.argv[3]);

jsonContent.forEach(function(item) {
    var key = '';

    switch(item.type) {
        case 'user':
            key = item.name;
            break;
        case 'repo':
            key = item.user + '!' + item.name;
            break;
        default:
            return;
    }

    db.put(key, item);
});