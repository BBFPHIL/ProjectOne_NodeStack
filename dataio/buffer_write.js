
buf256 = new Buffer(256);

buf256.fill(0); // Fill buffer with zeros
buf256.write("add some text"); //write to bugger
console.log(buf256.toString());//print to console
buf256.write("more text", 9, 9);//add to buffer at indx 9
console.log(buf256.toString());//write string to terminal
buf256[18] = 67; //Add C
console.log(buf256.toString());