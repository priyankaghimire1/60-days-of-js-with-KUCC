class hi{
    constructor(name, message){
        this.name=name;
        this.print=message;
    }
    get personName(){
        return this.name +" is a user.";
    }
}
class intro extends hi{
    constructor(name, message){
        super(name,message);
    }
    get personName(){
        return this.name +" is another name.";
    }
}
let hero=new intro("Ram", "Greetings");
console.log(hero.personName);
let mira=new hi("Mira","Hi!!!" );
console.log(mira.personName);
const hi1 = class hi{
    constructor(name, message){
        this.name=name;
        this.print=message;
    }
    static species(){
        return "human";
    }
    static sentence(){
        return 'The most intelligent animal is '+ this.species();
    }
    get clientName(){
        return this.name;
    }
    set details(value){
        this.name=value;
    }
    display(){
        return this.print;
    }
}
let aarya= new hi1("Aarya", "hello");
console.log(hi1.species());
console.log(hi1.sentence());
console.log(aarya.details=5);
console.log(aarya.display());
class count{
    #value=0;
    
    increment(){
        this.#value++;
    }
    get count(){
        return this.#value;
    }
}

let counter= new  count();
console.log(counter.count);
counter.increment();
console.log(counter.count);

