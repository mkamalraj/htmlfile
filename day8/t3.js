function fun(){
var arrayname=[{name:"kamal",age:22,mobile:7993863254},
{name:"suresh",age:21,mobile:8121824536},            
{name:"param",age:22,mobile:9133707671}];
arrayname.forEach(function(item){
	console.log(item.name);
	console.log(item.age);
	console.log(item.mobile);
});
}
// 
// document.getElementById('Kamal').innerHTML=arrayname[i].name;