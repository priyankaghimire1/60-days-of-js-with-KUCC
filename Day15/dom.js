const title= document.getElementById("main");
console.log(title);
title.style.color="blue";
const list=document.getElementsByClassName("items");
console.log(list);

const ul=document.querySelector("ul");
console.log(ul);

const elem=document.createElement('li');
ul.append(elem);
elem.innerText="hi";
elem.setAttribute('class', 'items');
for(i=0; i<list.length; i++){
    list[i].style.color ="pink";
}
console.log(elem.classList.contains('items'));
elem.remove();
const firstItem=document.querySelector(".items");
console.log(firstItem.innerHTML);
const container=document.querySelector('div');
console.log(container);
let parent=document.querySelector('ul'
);
console.log(parent.parentNode.parentNode);
const html=document.documentElement;
console.log(html.parentNode);
console.log(parent.parentNode.parentNode);
console.log(parent.childNodes);
console.log(parent.firstChildNodes);
parent.childNodes[1].style.backgroundColor='magenta';
console.log(parent.children);