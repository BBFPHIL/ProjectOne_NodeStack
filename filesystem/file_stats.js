
var fs = require('fs');
fs.stat('file_stats.js', function(err, stats){
	if(!err){
		console.log('stats: ' + JSON.stringify(stats, null, ' ')); // JSON to string
		console.log(stats.isFile() ? "Is a File" : "Is not a file");
		console.log(stats.isDirectory() ? "Is a Folder" : "Is not a Folder");
		console.log(stats.isSocket() ? "Is a Socket" : "Is not a Socket");
		stats.isDirectory();
		stats.isBlockDevice();
		stats.isCharacterDevice();
		stats.isFIFO();
		stats.isSocket();
	}
});