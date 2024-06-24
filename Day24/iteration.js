let log = console.log;
let characters=['hi', 'greeetings', 'hola', 'hello'];
function* genny(){
    for(let i=0; i<characters.length; i++){
        yield characters[i];
    }
    return 'end';
    
}
let iter=genny();
log(iter);
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());
let student={
    name:"Ram",
    age: 30
}
let count=-1;
let hi={
    [Symbol.iterator]:(obj)=>{
        return{
            next: ()=>{
                count++;
                switch(count){
                    case 0:
                        return{
                            value: obj.name,
                            done: false}
                    case 1:
                        return{
                            value: obj.age,
                            done: false} 
                    default:
                        return{
                            value: undefined, done: true
                        }
                    }           }
                        }
                }
            }
let data=hi[Symbol.iterator](student);
log(data.next());
log(data.next());
log(data.next());

