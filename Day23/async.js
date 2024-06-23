const posts=[
    {title: 'num1', body: 'First one'},
    {title: 'num2', body: 'Second one'}
];

function getPosts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post, index)=>{
            output+= `<li>${post.title}</li>`
        });
        document.body.innerHTML =output;
}, 1000)
}
function createPost(post) {
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
    posts.push(post);
    const error=false;
    if(!error){
        resolve();
    }else{
        reject('Error: There is something wrong');
    }
}, 2000);
});
}

//createPost({title:'num3', body:'Third one'}).then(getPosts)
//.catch(err=> console.log(err));
async function init(){
    await createPost({title:'num3', body:'Third one'});
    getPosts();
}
init();