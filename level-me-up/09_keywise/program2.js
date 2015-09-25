var level = require('level');
level(process.argv[2], { valueEncoding: 'json' }, dbHandler);

function dbHandler (err, db) {
    if (err) throw(err);

    var batch = db.batch();

    jsonContent.forEach(function (item) {
        var key = '';

        switch (item.type) {
            case 'user':
                key = item.name;
                break;
            case 'repo':
                key = item.user + '!' + item.name;
                break;
            default:
                return;
        }

        batch.put(key, item);
    });

    batch.write();
}