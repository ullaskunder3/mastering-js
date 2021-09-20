const posts = [
    { title: "Post 1", body: "This is post one" },
    { title: "Post 2", body: "This is post two" }
]

function getPost() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            console.log(post);
            output += `<li>${post.title}`;
        });
        document.body.innerHTML = output;
    }, 1000);
}
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('test');
            posts.push(post)

            // Awesome
            const error = false;

            (!error) ? resolve('Awesome it worked!!!') : reject('Error...')

        }, 2000);
    })
}

createPost({ title: "Post 3", body: "This is post three" })
    .then(getPost)
    .catch(err => console.log(err))