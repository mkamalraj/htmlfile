// function kamal()
// {

var print = [
{name: "Hari", age: 23, designation: "software"},
{name: "chandu", age: 22, designation: "Hardware"},
{name: "kamal", age: 21, designation: "Devops"}
];
// for(var i = 0;i<=print.length; i++){
// 	document.write(print[i].name +"<br>");
// 	document.write(print[i].age +"<br>");
// 	document.write(print[i].designation+"<br>");
// }
function array()
{
	print.forEach(function (item){
		// console.log(item.name);
		// console.log(item.age);
		// console.log(item.designation);

	});

}
array();