'use strict';

console.log('\n*********Hoisting...🎌 with var, let, const***********');

/* This is hoisting with variable */

//using var not gona throw error but will be undefined
console.log('try to hoist the variable using var: ',me);

// ReferenceError: Cannot access 'FirstName' before initialization
// do not uncomment => 😨
// console.log(FirstName);
// console.log(year);

var me = 'ullas';
let FirstName = 'ullas';
const year = 1999;

console.log('\n*********Hoisting...🎌 with functions ***********\n');

// hositing with function declaration will work
console.log('hositing function declaration calling add(2, 3)',funDecl(2, 3));

//using const ReferenceError: Cannot access 'addFunExpr' before initialization
//do not uncomment => 😨
// console.log(addFunExpr(2, 3));
console.log('\ncan\'t hositing function expression = 😓');

console.log('can\'t hositing arrow function => 😓 ');
//TypeError: addArror is not a function
//do not uncomment => 😨
// console.log(addArror(2, 3));


function funDecl(a, b){
    return a+b;
}

const addFunExpr = function (a, b) {
    return a + b;
};

var addArror = (a, b) => a + b;

/*
//// pitfall of hositing
//// as 0 is a falsy value
//// *******************************************************

console.log(numProducts);

if(!numProducts) deleteCart();

var numProducts = 10;
console.log(`Your cart has ${numProducts} products`);

function deleteCart() {
    console.log('every thing is deleted');
    console.log('oohh no, oohh no, no no, no no no ');
}

//// *******************************************************
*/

/*
//this will points to windows objects
console.log(this);

const calcAge = function (birthYear) {
    console.log(2030 - birthYear);
}
calcAge(1999);
*/

// const calcAgeArror = birthYear => {
//     console.log(2030 - birthYear);
//     console.log("arror function with this point to global scope point to parent again its windows");
//     console.log(this);
// }
// calcAgeArror(1999);

// *******************************************************
// const ullass = {
//     year: 1999,
//     calcAge: function () {
//         console.log(this);
//         console.log(2030 - this.year);
//     }
// }
// ullass.calcAge();
// *******************************************************

/*
const ullas = {
    FirstName: "ullas",
    year: 1999,
    calcAge: function () {
        console.log(this);
        console.log(2030 - this.year);

        // const self = this;
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1981 && self.year <= 1996);
        // };
        // isMillenial();

        const isMillenial = () => {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };
        isMillenial();
    },
    greet: () => console.log(`Awesome ${this.FirstName}`),

};
ullas.calcAge();
ullas.greet();

// argument keyword
const addFunExpr = function (a, b) {
    console.log(arguments);
    return a + b;
};
addFunExpr(2, 5);
addFunExpr(2, 5, 5, 6);

var addArror = (a, b) => {
    // console.log(arguments);//not gona work
    return a + b
};

addArror(1, 2)
*/
