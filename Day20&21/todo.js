const input =document.getElementById("input");
const container =document.getElementById("todo");
const list = document.querySelector('ul');
list.addEventListener('click', function(ev){
  if(ev.target.tagName ==='LI'){
    ev.target.classList.toggle('checked');
  }
}, false)
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("input").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("todo").appendChild(li);
    document.getElementById("input").value = "";
}
  