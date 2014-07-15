//Slicing a buffer

var numbers = new Buffer("123456789"); 
console.log(numbers.toString());
var slice = numbers.slice(3, 6); //slice at index 3 to 6 end
console.log(slice.toString());
slice[0] = '#'.charCodeAt(0); // Add # to front
slice[slice.length-1] = '#'.charCodeAt(0); // add # to tail
console.log(slice.toString());//read buffer sliced
console.log(numbers.toString()); // out number string as a whole

//Elephants
var elephants = new Buffer("Elephants Cry");
console.log(elephants.toString());
var sliceElephant = elephants.slice(4, 10);
console.log(sliceElephant.toString()); 
sliceElephant[4] = '$$'.charCodeAt(0);
console.log(sliceElephant.toString());