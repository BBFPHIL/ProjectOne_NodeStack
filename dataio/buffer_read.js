//Read from buffer

bufUTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \u20ac", 'utf8');
console.log(bufUTF8.toString());//read all from buffer
console.log(bufUTF8.toString('utf8', 5, 9));//read buffer indexed

var StringDecoder = require('string_decoder').StringDecoder; //Generate string decoder file access
var decoder = new StringDecoder('utf8'); //new stringDecoder object in utf8
console.log(decoder.write(bufUTF8)); //read from buffer - decoded
console.log(bufUTF8[18].toString(16)); // read from buffer index 18 to 16
console.log(bufUTF8.readUInt32BE(18).toString(16)); // read buffer Big Endiean format