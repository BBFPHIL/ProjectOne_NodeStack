function simpleTimeout(consoleTimer){
  console.timeEnd(consoleTimer);
}

function sayHelloIn5(consoleTimer){
	console.log("Hello");
}
console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");
console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");
console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");

//say hello in 5 seconds
console.time("Say it...");
setTimeout(sayHelloIn5, 5000, "fiveSecond");