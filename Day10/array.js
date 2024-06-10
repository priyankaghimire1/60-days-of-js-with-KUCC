let a=[1,2,3];
let b=['a', 'b', 'a', 'd'];
console.log(a[1]);
function message(name){
    this.greeting ="hi " +name;
}
name="James";
var m=new message(name);
console.log(m.greeting);
let sum=0;
let count={};
a.forEach((item, index, arr) =>{
    item=item+1;
    sum=sum+item;
    console.log(sum);
    
});
b.forEach((item, index, array)=>{
    if (count[item]){
        count [item]++;
    }
    else {
        count [item]=1;
    }
}
)
let c= b.toString();
console.log(c);
console.log(b.pop());
console.log(b);
let d=a.push(5,6);
console.log(a);
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.shift();
console.log(fruits);
fruits.unshift("Banana");
const myBest = fruits.slice(-3, -1);
console.log(myBest);
fruits.splice(2, 0, "Lemon", "Kiwi");

fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
const def=a.map(fun);
function fun(but){
    return but*10;
}
console.log(def);
const num= [32, 33, 16, 40];
const result = num.filter(check);

function check(n) {
  return n >= 20;
}
console.log(result);