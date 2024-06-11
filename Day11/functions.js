let her="Aarya";
hi(her);
function hi(name){
 console.log("Hi "+name);
}
let a=5;
let b=6;
let c=sum(a,b);
function sum(a,b){
    return a+b;
}
console.log(her);
console.log(c); 
setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, 600);
const person ={
    name:"John Doe",
    age: 30,
    city:"New York",
    hello: function(){
        console.log("hiiiiiiii!");
    }
}
console.log(person.age);
person.hello();
let ab=new Object();
ab.name="John Doe";
ab.age=50;
console.log(ab.name);
console.log(ab.age);

