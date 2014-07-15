//Writing Stream

var stream = require('stream'); //include stream
var util = require('util');

util.inherits(Writer, stream.Writable);//inherit stream to writer class

function Writer(opt){
	stream.Writable.call(this, opt); //callback 
	this.data = new Array();
}

//Writer write function
Writer.prototype._write = function(data, encoding, callback){
	this.data.push(data.toString('utf8')); // push data as utf8
	console.log("Adding: " + data);
	callback();
};

//App
var W = new Writer(); // Writer obj
for(var i = 1; i<=5; i++){ // take 5 written items
	W.write("Item " + i, 'utf8');
}

W.end("ItemLast");//last item
console.log(W.data);//output writen from array
