
var fs = require('fs');

//JSON
var config = {
	maxFiles: 20, 
	maxConnections:15, 
	rootPath: "C:\Users\pwalker\Documents\GitHub\NodeProjectOne\filesystem"
};

var configTxt = JSON.stringify(config);
var options = {encoding:'utf-8', flag:'w'};

fs.writeFile('../filesystem/config.txt', configTxt, options, function(err){
	if(err){
		console.log("Config Write Failed");
	}else{
		console.log("Config Saved.");
	}
});