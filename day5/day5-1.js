var a=11;
var b=13;
var c=a+b;
var person={name:"kamal",age:"21",place:"hindupur"};
var array=["kamal","raj","mayakuntla"];
document.getElementById("integers").innerHTML=c;
document.getElementById("object").innerHTML=person.place;
document.getElementById("arr").innerHTML=array[2];
if(a!=b)
{
alert("mismatch");
}