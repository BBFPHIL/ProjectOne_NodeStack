//Streaming duplex
//This is using read and write streams on a socket

var stream = require('stream'); 
var util = require('util');

util.inherits(Duplexer, stream.Duplex); // inherit duplex

//class Duplexer
function Duplexer(opt){
	stream.Duplex.call(this, opt);
	this.data = [];
}

//Class function member - read
Duplexer.prototype._read = function readItem(size){
	var chunk = this.data.shift(); //Access first item "chunk" in array
	if(chunk == "stop"){
		this.push(null); // dont send anything
	}else{
		if(chunk){//if true
			this.push(chunk);
		}else{
			setTimeout(readItem.bind(this), 500, size); // send error
		}
	}
};

//Class function member - write
Duplexer.prototype._write = function(data, encoding, callback){
	this.data.push(data);//push data
	callback();
};

//App
var d = new Duplexer();

d.on('data', function(chunk){
	console.log('read:  ', chunk.toString());
});

d.on('end', function(){
	console.log('Message Complete');
});

d.write("I think, ");
d.write("therefore ");
d.write("I am.");
d.write("Rene Descartes");
d.write("stop");//terminates socket duplex
