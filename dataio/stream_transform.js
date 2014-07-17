var stream = require("stream"); // Includes
var util = require("util");

util.inherits(JSONObjectStream, stream.Transform); // inherticance

//Class JSONObjectStream
function JSONObjectStream (opt) {
  stream.Transform.call(this, opt);
};

//Class member function
//Takes from write request, modifies, pushes modified data out
JSONObjectStream.prototype._transform = function (data, encoding, callback) {
  object = data ? JSON.parse(data.toString()) : ""; //if data is not defined parse json
  this.emit("object", object); // emitter

  object.handled = true; //done
  this.push(JSON.stringify(object)); //push parsed JSOn back a a string
  callback();//send callback to flush!
};

//Class member function
//sends callback flushes stream out
JSONObjectStream.prototype._flush = function(cb) {
  cb();
};

var tc = new JSONObjectStream(); //new JSON object

//Event
tc.on("object", function(object){
  console.log("Name: %s", object.name); //links with obj.name 
  console.log("Color: %s", object.color);
});

//Event
tc.on("data", function(data){
  console.log("Data: %s", data.toString());//output data
});

//App
tc.write('{"name":"Carolinus", "color": "Green"}');
tc.write('{"name":"Solarius", "color": "Blue"}');
tc.write('{"name":"Lo Tae Zhao", "color": "Gold"}');
tc.write('{"name":"Ommadon", "color": "Red"}');
console.log("And...");
tc.write('{"name":"Phil", "color":"Poop-brown"}');