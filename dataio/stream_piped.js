
var stream = require('stream');
var util = require('util');

util.inherits(Reader, stream.Readable);
util.inherits(Writer, stream.Writable);

//reader class
function Reader(opt){
	stream.Readable.call(this, opt);
	this._index = 1;
}

//Reader pipeline member
Reader.prototype._read = function(size){
	var i = this._index++;
	if(i > 10){
		this.push(null);
	}else{
		this.push("Item "+ i.toString());
	}
};

//Writer class
function Writer(opt){
	stream.Writable.call(this, opt);
	this._index = 1;
}

//Writer member
Writer.prototype._write = function(data, encoding, callback){
	console.log(data.toString());
	callback();
}

//App
var r = new Reader();
var w = new Writer();
r.pipe(w);