
for ( let i=0; i<3; i++){
    console.log("hi");
}
let i=0;
do {
    i+=1;
} while (i<3);
console.log(i);
let x=0;
while(x<2){
    
    x++;
}
let sum = 0, a = 1;
outerloop: while (true) {
    a = 1;
    innerloop: while (a < 3) {
        sum += a;
        if (sum > 12) { 
            break outerloop;
        }
        console.log("sum = " + sum);
        a++;
    }
}
let b=["apple", "banana", "kiwi"];
hi: for (let j=0; j<b.length; j++){
    if (j===1){
        continue hi;
    }
    else{
    console.log(b[j]);
}
}
let student={
    name: "John",
    age: 20
};

const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) {
  console.log(i);
}

for (const i of arr) {
  console.log(i);
}
