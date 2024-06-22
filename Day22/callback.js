function task1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Task 1 complete');
            resolve('1');
        }, 2000);
    })
   
}
function task2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Task 2 complete');
            resolve('2');
        }, 1000);
    })

}
function task3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Task 3 complete');
            resolve('3');
        }, 3000);
    })
}
function task4(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('Task 4 complete');
            resolve('4');
        }, 1500);
    })
}
function final(){
    console.log('finalllll');
}
/*task1(()=>{
    task2(()=>{
        task3(()=>{
        task4(()=>console.log("All complete"))})
    })
})*/
task1((hi)=>{
    console.log('hi');
    return task2();
})
.then((task2)=>{
    console.log('task2');
    return task3();
})
.then((task3)=>{
    console.log('task3');
    return task4();
})
.then((task4)=>{
    final();
})
.catch((error)=>{
    console.log('error', error);
})


