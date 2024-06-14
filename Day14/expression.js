let pattern = /w3schools/i;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "YouTube");
console.log(result);
console.log(text);
function geekFunc() {
  let a = 10;
  try {
      console.log("Value of variable a is : " + a);
  }
  catch (e) {
      console.log("Error: " + e.description);
  }
}
geekFunc();
try {
  console.log('try');
} catch (e) {
  console.log('catch');
} finally {
  console.log('finally');
} 
