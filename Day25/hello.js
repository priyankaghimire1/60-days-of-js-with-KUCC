export default class user{
    constructor (first, last){
        this.first = first
        this.last = last
}
}

export function printUser(user){
    console.log(`${user.first} ${user.last}`);
}