
var events = require('events');

//Account function 
function Account(){
	this.balance = 0;
	events.EventEmitter.call(this);
	this.deposit = function(amount){
		this.balance += amount;
		this.emit('balanceChanged');
	};
	this.withdraw = function(amount){
		this.balance -= amount;
		this.emit('balanceChanged');
	};
}
Account.prototype.__proto__=events.EventEmitter.prototype;

//Display bank balance
function displayBalance(){
	console.log("Account balance: $%d", this.balance);
}

//Overdrawn!
function checkOverdraw(){
	if(this.balance <0){
		console.log("Account overdrawn!!!");
	}
}

//Goal check
function checkGoal(acc, goal){
	if (acc.balance >goal ){
		console.log("Goal Achieved!!!");
	}
}

//Implement Emitters
var account = new Account();
account.on("balanceChanged", displayBalance);
account.on("balanceChanged", checkOverdraw);
account.on("balanceChanged", function(){
	checkGoal(this, 1000);
});

account.deposit(220);
account.deposit(320);
account.deposit(600);
account.withdraw(1200);
