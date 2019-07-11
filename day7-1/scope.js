
local(a);

var a=5;
var x=45;
var y=15;

function local(){
	var d=a*a*a;
	console.log(d);
}
function global(){
	// var y=20;
	var z=x+y;
	console.log(z);
}
global(x,y);

function pass(a,x){
	var g=a-x;
	console.log(g);
}

pass(10,15);
