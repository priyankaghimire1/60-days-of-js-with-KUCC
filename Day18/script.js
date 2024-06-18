localStorage.setItem('name', 'Bob');
localStorage.setItem('age', '50');
console.log(localStorage.getItem(age));
localStorage.removeItem('name');

sessionStorage.setItem("greetings", "hi");
sessionStorage.removeItem("greetings");


document.cookie= 'name=Ram; expires=' + new Date (2024, 10, 30)
.toUTCString();
