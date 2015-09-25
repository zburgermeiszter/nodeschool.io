var level = require('level');
var sublevel = require('level-sublevel');
var db = sublevel(level(process.argv[2]));

var robots = db.sublevel('robots');
var dinosaurs = db.sublevel('dinosaurs');

robots.put('slogan', 'beep boop');
dinosaurs.put('slogan', 'rawr');