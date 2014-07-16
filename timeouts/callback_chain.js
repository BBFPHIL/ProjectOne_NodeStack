//Serves as the chain
function logCar(car, callback){
  console.log("Saw a %s", car);
  if(cars.length){
    process.nextTick(function(){
      callback();
    });
  }
}

//This serves as the call back
function logCars(cars){
  var car = cars.pop();//add
  logCar(car, function(){
    logCars(cars);
  });
}

var cars = ["Ferrari", "Porsche", "Bugatti", 
            "Lamborghini", "Aston Martin"];

logCars(cars);