// Async JavaScript

/*
navigator.geolocation.getCurrentPosition(position =>{
    console.log(position);
})
console.log('this will print first before the above code');
*/

//To resolve this issue
// Promises in javascript
//pending
//fullfilled
//rejected

/**
const promises = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('done'), 1000);
    setTimeout(() => reject(Error('Promise Failed')), 1000);
});

promises
    .then(value => console.log(`success ${value}`))
    .catch(value => console.error(`failure ${value}`))
    .finally(() =>console.log('done'))
*/

//now to turn callback base pattern into promise base pattern

/*
const promise = new Promise((resolve, reject) =>{
    // navigator.geolocation.getCurrentPosition(position =>{
    //     resolve(position);
    // }, error =>{
    //     reject(error);
    // });

    //Or like this
    
    navigator.geolocation.getCurrentPosition(resolve, reject);
})

promise
    .then(position => console.log(position))
    .catch(error => console.log(error))
    .finally(() =>console.log('done'))
*/

// API Application Program Interface
//mean for software to communicate with other software

/*
C - create (POST)
R - read (GET)
U - update (PUT/PATCH)
D - delete (DELETE)
*/

// fetch(apiEndpoint)
/*
GET /posts
GET /posts/1
POST /posts
PUT /posts/1
PATCH /posts/1
DELETE /posts/1
*/

// fetch('http://jsonplaceholder.typicode.com/posts/1')
//     .then(res => res.json())
//     .then(data => console.log(data))

/*
const blogPost = {
    title: 'Push limit',
    body: 'Cause I\'m Slim Shady, yes I\'m the real Shady All you other Slim Shadys are just imitating. So won\'t the real Slim Shady please stand up',
    userId: 1
}

// console.log(fetch('http://jsonplaceholder.typicode.com/posts/1'));
// fetch('http://jsonplaceholder.typicode.com/posts/1')
fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(blogPost), 
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(resonse => resonse.json())
    .then(data => console.log(data))
*/

// fetch('http://jsonplaceholder.typicode.com/posts/1')

/**
// now we want this function to resolve promises 
async function getBlogPost() {
    return 'works as well'
}
//it always return promises if use async before function keyword
getBlogPost()
    .then((value) =>console.log('see this works as a promise:', value))


//if using arrow function then it showuld be
// const getBlogPost = async () => {}
 */

// async function getBlogPost() {
//     const promise = new Promise((resolve, reject) =>{
//         setTimeout(() => resolve('blog post'), 1000);
//     })

//     const result = await promise
//     console.log(result);
//     console.log('done');
// }
// getBlogPost()


async function getPost() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts/1')
    const data = await response.json();
    console.log(data.title);
    console.log('done');
}
getPost();