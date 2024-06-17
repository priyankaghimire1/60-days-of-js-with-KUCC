const grandparent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
grandparent.addEventListener('click', e=>{
    console.log('grandparent capture');
    e.stopPropagation();
},{capture: true
})
parent.addEventListener('click', e=>{
    console.log('parent capture');
}, {capture : true})
child.addEventListener('click', e=>{
    console.log('child capture');
}, {capture: true})
document.addEventListener("click", e=>{
    console.log('document capture');
}, {capture: true})
grandparent.addEventListener('click', e=>{
    console.log('grandparent');
})
parent.addEventListener('click', e=>{
    console.log('parent');
}, {once: true})
child.addEventListener('click', e=>{
    console.log('child');
}, {})
document.addEventListener('click', printHi()
)
function printHi(){
    console.log('hi');
}
const newDiv=document.createElement('div')
newDiv.style.width='200px';
newDiv.style.backgroundcolor="purple";
newDiv.style.width='300px';
document.body.append(newDiv);





