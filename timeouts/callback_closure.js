function logCar(logMsg, callback){
  process.nextTick(function() {
    callback(logMsg);
  });
}

var cars = ["Ferrari", "Porsche", "Bugatti"];

//Non-closure callback
for (var idx in cars){
  var message = "Saw a " + cars[idx];
  logCar(message, function(){
    console.log("Normal Callback: " + message);
  });
}

//Closure callback
for (var idx in cars){
  var message = "Saw a " + cars[idx];
  (function(msg){
    logCar(msg, function(){
      console.log("Closure Callback: " + msg);
    });
  })(message);
}

//Tinkering and Playing Code
for (var idx in cars){
  var message = "Saw a " + cars[idx];
  (function(m){
    logCar(m, function(){
      console.log("Closure Callback: " + m);
    });
  })(message + " Add here");
}