
var zlib = require("zlib");
var input = '...............text...............';

//deflate function
zlib.deflate(input, function(err, buffer){
	if(!err) {
		console.log("deflate (%s):", buffer.length, buffer.toString('base64'));
		zlib.inflate(buffer, function(err, buffer){
			if(!err){
				console.log("inflate (%s)", buffer.length, buffer.toString());
			}
		});
		zlib.unzip(buffer, function(err, buffer){
			if (!err){
				console.log("unzip deflate (%s): ", buffer.length, buffer.toString());
			}
		});
	}
});

//deflate raw data
zlib.deflateRaw(input, function(err, buffer){
	if(!err){
		console.log("delfateRaw (%s): ", buffer.length, buffer.toString());
		zlib.inflateRaw(buffer, function(err, buffer){
			if(!err){
				console.log("inflateRaw (%s): ", buffer.length, buffer.toString());
			}
		});
	}
});

//gzip
zlib.gzip(input, function(err, buffer){
	if(!err){
		console.log("gzip (%s): ", buffer.length, buffer.toString('base64'));
		zlib.gunzip(buffer, function(err, buffer){
			if(!err){
				console.log("gunzip (%s): ", buffer.length, buffer.toString());
			}
		});
		zlib.unzip(buffer, function(err, buffer){
			if(!err){
				console.log("unzip gzip (%s): ", buffer.length, buffer.toString());
			}
		});
	}
});