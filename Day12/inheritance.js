const student={
    name: "John Doe",
}
const priya= {
    __proto__:student,
    name: "hi",
    age: 20
};
console.log(student);
console.log(priya);
const hello={
    greetings:"ni hao",
    __proto__:priya}
console.log(hello.name);
function square(a){
    this.value =a;
}
square.prototype.getValue = function(){
    return this.value;
}
const x= new square(10);
console.log(x.getValue());