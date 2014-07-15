
var af = new Buffer("African Swallow?");
var eu = new Buffer("European Swallow?");
var question = new Buffer("Air Speed Velocity of an ");

//reading
console.log(Buffer.concat([question, af]).toString()); // combine two buffers. Then read with toString
console.log(Buffer.concat([question, eu]).toString()); // ^same
