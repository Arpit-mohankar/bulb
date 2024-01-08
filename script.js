//Changing HTml using Dom
var a=document.querySelector('h1');
a.innerHTML='Hello World'; 
var b=document.querySelector('p');
b.innerHTML="I'm a web developer"
//Changing style using Dom
a.style.color="blue";
b.style.color="red";
b.style.fontSize="50px";
document.body.style.backgroundColor="";
//event listener
a.addEventListener('click',function(){
    a.style.color="red";
    a.innerHTML="Good bye"

})
b.addEventListener('click',function(){
    b.style.color="blue";
    b.innerHTML='Not anymore'

})
//bulb
var bulb=document.querySelector("#bulb");
var button=document.querySelector("button")
var flag=0;

button.addEventListener('click',function(){
    if (flag==0){
    bulb.style.backgroundColor="yellow";
    button.innerHTML="OFF"
    flag=1;
    }
    else{
        bulb.style.backgroundColor="white";
        button.innerHTML="ON"
        flag=0;
    }})
console.log(bulb);