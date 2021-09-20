const posts = [
    {title:"Post 1", body:"This is post one"},
    {title:"Post 2", body:"This is post two"}
]

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post)=>{
            console.log(post);
            output += `<li>${post.title}`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post, callback) {
    setTimeout(() => {
        console.log('test');
        posts.push(post)
        callback()
    }, 2000);
}

createPost({title: "Post 3", body: "This is post three"}, getPost)