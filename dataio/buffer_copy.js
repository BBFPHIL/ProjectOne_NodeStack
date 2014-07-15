//Copy from buffers

var alphabet = new Buffer('abcdegfhijklmnopqrstuvwxyz');//mk buf obj
console.log(alphabet.toString()); // read buffer

// Copy full buffer
var blank = new Buffer(26);
blank.fill();
console.log("Blank: " + blank.toString()); // read blank buf
alphabet.copy(blank);//copy buf
console.log("blank: " + blank.toString()); // show buf

//copy part of buffer
var dashes = new Buffer(26);
dashes.fill('-'); //fill buffer with dashes
console.log("Dashes: " + dashes.toString());// read buffer
alphabet.copy(dashes, 10, 10, 15); // copy dahes @ indexs 10 15 into alphabet
console.log("Dashes:" + dashes.toString());

//Copy to and from direct index of buffer
var dots = new Buffer('-------------------------');
dots.fill('.');
console.log("dots: "+dots.toString());
//loop and read
for(var i =0; i<dots.length; i++){
	if(i % 2){ dots[i] = alphabet[i];}//copy on module 2
}

//Sheps
var dog = new Buffer(50);
dog.fill("I love my german shepherd");
console.log("Pet: " + dog.toString());


// output copied dots
console.log("dots: " + dots.toString());
