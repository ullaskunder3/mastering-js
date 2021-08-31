# Object Oriented Programming OOP ✨

OOP is an enormously popular paradigm for structuring out complex code

- Easy to add features and functionality
- Performant (efficient in term of memory)
- Easy for us and other developers to reason about (a clear structure)

Objects - store functions with their associated data!

```javascript
const user1 = {
    name: 'ullas',
    score: 2,

    increment: function(){
        user1.score++;
    }

};

user1.increment();
```

This is the principal of encapsulation.

Multiple way to create an object, just to get familier with few means of defining the object

## Using empty object and then populate it with dot notation 🔰

Creating user2 user 'dot notation'

```Javascript

const user2 = {};

user2.name = 'ullas';
user2.score = 6;
user2.increment = function(){
    user2.score++;
};

Square bracket notation [] (never used except in one condition: evaluatng what goes in ex: user2[property] property: 'name')

```

- Using the built in js Object.create which will create empty object

```Javascript

const user3 = Object.create(null);

user3.name = 'ullas';
user3.score = 7;
user3.increment = function(){
    user3.score++;
};

```

- our code is getting repetitive, we are breaking our DRY principle
- What if we have milion of user....?

## Champ => Functions 😁

 They are helpfull in this case so we don't have to repeat the code. They are wrapping up the instructions... write once call as many time you want

## Solution 1. Generate Object using a function

```Javascript
function userCreator(name, score){

    const newUser = { };

    newuser.name = name;
    newuser.score = score;

    newuser.increment = function(){
        newuser.score++;
    };
    
    return newUser;
};

const user1 = userCreator('ullas', 10)
const user2 = userCreator('kingsman', 10)


user2.increment()

```

!this solution is doing its task but **fundamentally Unusable**

Reason:

- In global memory
  
  Initially:

  ```js
    global memory > 
    - [function userCreator()]

    - User1 ...undefined
  ```

user1  = `userCreator('ullas' 10)`

which create a new execuation context

- In a local memory

  ```js
    local Memory >
    - name: 'ullas'
    - score: 10

    - newUser: {
        name: 'ullas'
        score: 10
        increment: -[f]-
    }
  ```

  returning => `newUser` object
  
  - return out to **Gloabl Memory**

- In global memory

  ```js
    global memory > 
    - [function userCreator()]

    - User1 : {
        name: 'ullas'
        score: 10
        increment: -[f]-
    }
  ```

Same with =>  **user2**, declaring user2

- In global memory

  ```js
    global memory with > 
    - [function userCreator()]

    - user1 : {
        name: 'ullas'
        score: 10
        increment: -[f]-
    }
    - user2: ...undefined
  ```

user2  = `userCreator('kingsman' 10)`

which create a new execuation context

- In a local memory

  ```js
    local Memory with >
    - name: 'kingsman'
    - score: 10

    - newUser: {
        name: 'kingsman'
        score: 10
        increment: -[f]-
    }
  ```

    returning => `newUser` object
  
  - return out to **Gloabl Memory**

- In global memory

  ```js
    global memory with > 
    - [function userCreator()]

    - user1 : {
        name: 'ullas'
        score: 10
        increment: -[f]-
    }

    - user2 : {
        name: 'kingsman'
        score: 10
        increment: -[f]-
    }
  ```

next step was => **to increment**

```js
User1.increment()
User2.increment()
```

## Problem

- Each time we create a new user we make space in our computer's memory for our data functions.
But our functions are just copies

In Global memory:

```js
    global memory with > 
    - [function userCreator()]

    - user1 : {
        name: 'ullas'
        score: 10
        increment: -[f]- // same copy
    }

    - user2 : {
        name: 'kingsman'
        score: 10
        increment: -[f]- // same copy
    }

    - what if n number of user...
```

- Each object have brand new increment function defined on them...
We should be able attach multiple function on them not single function ex: login, logout, render etc...

Is there a better way? to getting single copyies of them in `Global Memory`

---

## Solution 2 😮

- Store the increment function in just one object and have the interpreter, if it doesn't find the function on user1, look up to that object to check if it's there

How to make this link ?

## Prototype chain

In Global memory:

```js
    global memory with > 

    [function userCreator()]

    user1 : {
        name: 'ullas'
        score: 10
        => functionStore
    }

    user2 : {
        name: 'kingsman'
        score: 10
        => functionStore
    }

    function functionStore: {
        increment: -[f]-
    }

    // => this bond is called prototypal bond : chain link to or go look functionStore
    /**
     * when user doesn't find increment it goes look in function store for increment() 
     */

```

---

The Code Base

```js
function userCreator (name, score){
    const newUser = Object.create(functionStore);

    newUser.name = name;
    newUser.score = score;

    return newUser;
};

const functionStore = {
    increment: function(){ this.score++; },
    Login: function(){ console.log("Your are loggedin"); }
};

const user1 = userCreator('ullas', 10)
const user2 = userCreator('kingsman', 10)

user1.increment();
```

In the global memory

Initially:

  ```js
    global memory > 

    [function userCreator()]

    functionStore: {
        increment: -[f]-
        login: -[f]- 
    }

    User1 :undefined
  ```

user1  = `userCreator('ullas' 10)`

which create a new execuation context

- In a local memory

  ```js
    local Memory >
    
    - name: 'ullas'
    - score: 10

    - newUser: {
        name: 'ullas'
        score: 10

        => [hidden property:
        _prto_ which is bond to functionStore which we passed in Object.create(`functionStore`);
        ]
    }
  ```

  returning => `newUser` object
  
  - return out to **Gloabl Memory**

  ```js
    global memory > 

    [function userCreator()]

    functionStore: {
        increment: -[f]-
        login: -[f]- 
    }

    User1 : {
        name: 'ullas'
        score: 10

        => [hidden: bond _proto_ to `functionStore` for `Increment()`]
    }
  ```

Now the `increment()`

- This increment() function need to be usable on what ever object we run it on.

- We need some placeholder inside of that function increment in order to refer to that object

Or we need label thats always going to refer to that object on which we are running the function

```js
this
Fundamental rule always pointing to the relevent object to the left-hand side of the dot on which we calling the function

```

Creates a execuation Context

In a local memory

In the example above, `user1` is to “the left of the dot” which means the `this` keyword is referencing the `user1` object. So, it’s as if, inside the `increment` method, the JavaScript interpreter changes `this to user1`.

```js
// this => to user1

this.score++
===> user1.score++
```

- Do we have copies of increment() stored in user1 and user2 => `none`

Super sophisticated but not standard

## solution 3, new Keyword 🤩

`new` keyword that automates all the work. So No Hard Work

```js
const user1 = new userCreator('ullas', 10)
```

When we call the constructor function with `new` keyword in front we automate 2 things

- **Create** a new user object
- **return** the new user object

But now we need to adjust how we write the body of userCreator

- Refer to the auto-created object?
- Known where to put our single copies of functions?

## Interlude - functions are both objects and functions

```js
function multiplyBy2(num){
    return num*2
}

multiplyBy2.stored = 5
multiplyBy2.(3) // 6

multiplyBy2.stored //5
multiplyBy2.prototype // ()

```

We could use the fact that all functions have a default property on their object version, `prototype`, which is itslef an object to replace our functionStore object

Code Base

```js
function UserCreator(name, score){
    this.name = name;
    this.score = score;
}
UserCreator.prototype.increment = function(){
    this.score++;
}
UserCreator.prototype.login = function(){
    console.log("You are loggedin")
}

const user1 = new UserCreator('ullas', 10);
user1.increment();
```

In the global memory

Initially:

  ```js
    global memory > 

    userCreator() -[f]- //userCreator function version

    userCreator: {
        //userCreator object version
        prototype: {
            //functionStore
            increment: -[f]-
            login: -[f]-
        }
    }

    User1 :undefined
  ```

user1  = new `UserCreator('ullas' 10)`

which create a new execuation context

- In a local memory

  ```js
    local Memory >
    
    - name: 'ullas'
    - score: 10

    // due to new it create an empty object first and 'this' label for reference bond to functionStore using _proto_
    // this = object create() returning => { } 

    this: {
        name: 'ullas'
        score: 10
    }

  ```

  returning => `this` object to `user1`
  
  - return out to **Gloabl Memory**

  ```js
    global memory > 

    userCreator() -[f]- //userCreator function version

    userCreator: {
        //userCreator object version
        prototype: {
            //functionStore
            increment: -[f]-
            login: -[f]-
        }
    }

    User1 : {
        name: 'ullas'
        score: 10

        // hidden _proto_ reference to userCreator.prototype => increment()
    }
  ```

Now the `increment()`

```js
user1.increment()
```

Creates a execuation Context

In a local memory

```js
// this => to user1

this.score++
===> user1.score++
```

Benefits

- Faster to write
- Still typicaly practice in professional code

## Solution 4, class 🙌

## The class `Syntatic Sugar`

```js
class userCreator{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    increment(){
        this.score++
    }
    login(){
        console.log('loggin');
    }
}
const user1 = new UserCreator('ullas', 10)
user1.increment()
```

In the global memory

Initially:

  ```js
    global memory > 

    //class
    [
        userCreator() -[f]- //userCreator function version

        userCreator: {
            //userCreator object version
            prototype: {
                // =>functionStore
                increment: -[f]-
                login: -[f]-
            }
        }
    ]

    User1 :undefined
  ```

user1  = new `UserCreator('ullas' 10)`

which create a new execuation context

- In a local memory

  ```js
    local Memory >
    
    - name: 'ullas'
    - score: 10

    // due to new it create an empty object first and 'this' label for reference bond to functionStore using _proto_
    // this = object create() returning => { } 

    this: {
        name: 'ullas'
        score: 10
    }

  ```

  returning => `this` object to `user1`
  
  - return out to **Gloabl Memory**

  ```js
    global memory > 

    userCreator() -[f]- //userCreator function version

    userCreator: {
        //userCreator object version
        prototype: {
            //functionStore
            increment: -[f]-
            login: -[f]-
        }
    }

    User1 : {
        name: 'ullas'
        score: 10

        // hidden _proto_ reference to userCreator.prototype => increment()
    }
  ```

...
