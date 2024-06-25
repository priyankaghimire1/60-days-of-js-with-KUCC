//import user, { printUser} from "./hello.js"

setTimeout(()=>{
import ("./hello.js").then(({default: user, printUser })=>{
    const hi=new user("John", "Doe");

printUser(hi);
})
}, 2000); 
