//creating custom readable stream

var stream = require('stream');
var util = require('util'); // modules required

util.inherits(Answers, stream.Readable); // Answers inherits Readable class. utils just facilitates this

//Answers class
function Answers(opt){
	stream.Readable.call(this, opt);//Create instance of object
	this.quotes = ["yes", "no", "maybe"];//quotes data member array
	this._index = 0; //
}

//_read class member
Answers.prototype._read = function() { // Answers _read calls push() to .. push data
	if(this._index > this.quotes.length){//if index is igger than quotes length send nothing!
		this.push(null); // must push null or string/buffer
	}else{
		this.push(this.quotes[this._index]);//push the quotes from index starting at 0
		this._index += 1;
	}
};

var r = new Answers(); // create Answers object
console.log("Direct read: " + r.read().toString());//must do r.read() first then r.[etc] will work

r.on('data', function(data){ //create read callback w/ anonymous function data item
	console.log("Callback read:" + data.toString());
});

r.on('end', function(data){
	console.log("no more answers");
});