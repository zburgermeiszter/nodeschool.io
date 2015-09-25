var level = require('level');

var db = level(process.argv[2]);
var input_json_obj = JSON.parse(process.argv[3]);

for(var prop in input_json_obj) {
    if(input_json_obj.hasOwnProperty(prop)) {
        var value = input_json_obj[prop];
        db_put(prop, value);
    }
}

function db_put(key, value) {
    db.put(key, value, function (err) {
        if (err)
            return console.error('Error in put():', err);
    });
}