const bill = 500;


//defining function or function defination
function calculateBill(bill, taxRate = 1.13) {
    //function block and body of the function

    //now the textrate relies on global variale
    const total = bill * 1+taxRate;
    const discount = total - Math.floor(total)
    return [Math.floor(total), discount];
}

//calling the function or function call or **run**
const value = calculateBill(bill, 0.13);

console.log(`Your total bill is ${value[0]} with the discount of ${value[1]}`);

/**  Anonymous functions */
//using in callback 
//using them in ife
const Anonymousfunctions = function (myName){
    return `Myself ${myName}`
} 

// function expression //
const funExpression = function (myName){
    return `Myself ${myName}`
} 
console.log(funExpression('ullas'));

///they are different because of of its Hoisting
//regular function are hoisted
//js does not hoist the function expression

// arrow function
// they dont have their own scope of this keyword
//they are anonmous function

// explicit
// const inchToCm = (inch) => {
//     return inch * 2.54;
// }

//implicit
const inchToCm = inch => inch * 2.54;

console.log(inchToCm(3));

const arrowFunAdd = (a, b = 3) => a + b;

// function makeName(first, last){
//     const names = {
//         name: `${first} ${last}`
//     }
//     return names;
// }

//curly may be confused by the block or the creation of object
//to implicitly return use () 
const makeName = (first, last) => ({ name: `${first} ${last}`});

//iife
//immediately invoke function expression

// (function(name){
//     console.log('running the function,', name);
//     return `${name} your are Awesome `;
// })('ullas');
//parenthesis run's first in javascript 
//so it will first return the function value and 
//immediately run the function

/* Mathods */
// method is simply a function which live inside an object

const methodExample = {
    name: 'ullas',
    //method
    greet: function () {
        console.log(this);
        console.log(`hola... ${this.name}`);
        return `hola... ${this.name}`
    },
    //short hand method
    supp(){
        console.log(`supp... ${this.name}`);
    },
    //arrow function
    greetMe: ()=> {
        //not gonaa work
        console.log(`hola... ${this.name}`);
    } 
}
// methodExample.greet();
// methodExample.supp();
// methodExample.greetMe();

/* callback function */
//something will happen when something is done

//click callback
const btn = document.querySelector('.clickMe');
// console.log(btn);

//we are not running it so this wont work
//callback function
btn.addEventListener('click', methodExample.supp);

//timer callback
// setTimeout(function(){
//     console.log('log after one second');
// }, 1000);

const people = [
    {name: 'ullas', rank: 1, country: 'USA'},
    {name: 'Villas', rank: 2, country: 'USA'},
    {name: 'Master', rank: 3, country: 'USA'},
]
// console.table(people);

// people.forEach((person, index)=>{
//     if(person.name === 'ullas' ){
//         console.count('There he is');
//     }
// });

/* closures */

function outerFun() {
    const outerVar = 'outer function varibale';
    function innerFun() {
        const innerVar = 'inner function variable';
        console.log('call ',innerVar);
        console.log('call ',outerVar);
    }
    return innerFun;
}
const inFun = outerFun();
inFun();
//even tho the outer function is done innner function is still accessible

function greeting(greet = '') {
    const greetMe = greet.toUpperCase(); 
    return function (name) {
        return `${greetMe} ${name}`;
    }
}

const greetTo = greeting('hello');
const sayheyy = greeting('ullas');

console.log(greetTo('ullas'));

function createGame(gameName) {
    let score = 0;
    return function win() {
        score++;
        return `Your ${gameName} score is ${score} `;
    }
}
const DonkyKong = createGame('DonkeyKong');

console.log(DonkyKong());
