// Function in JavaScript

// In JavaScript, functions are first-class objects, 
//because they can have properties and methods just like any other object. 

/**
 * Functions are one of the fundamental building blocks in JavaScript.
 *  A function in JavaScript is similar to a procedure—a 
 * set of statements that performs a task or calculates a value, 
 * but for a procedure to qualify as a function, 
 * it should take some input and return an output. 
 */

/**
 * A function definition (also called a function declaration, or function statement) 
 * consists of the function keyword, followed by:
 * 
 * - The name of the function name (function name should be readable and meaning full :)You will thank your self later)
 * - camelCase naming convension (suggestion)
 * - A list of parameters to the function, if it is parametrized, enclosed in parentheses and separated by commas.
 * - The JavaScript statements that define the function, enclosed in curly brackets, {...}
 * 
 *  function functionName(parameter1, parameter2, ... nNumberOfparameter) {
 *      function body 
 *      Or Block of code 
 *      Or block scope (whenever you see within {curly brackets}, it is a block)
 *  }
 */

//example: 
function showMessage() {
    console.log('showMessage function has been called: "one of us, one of us, one of us"');
}

//calling the function
showMessage();
console.log('\n***********Hoisting function declaration**************\n');

console.log('calling greetUser function:\n');
console.log(greetUser('ullas'));
//As You can see calling is made first && defined at the bottom
// and it worked because 
//Javascript hoist it to the Top just like a flag 
//! its only work with function declaration

function greetUser(userName) {
    console.log(`The function is been called first`);

    return `Hello ${userName}, You are Awesome`;
}

console.log('\n***********Default function parameters**************\n');

var myAdditionFuncCalls = 0;
function myAddition(a, b = 1) {
    myAdditionFuncCalls++;
    console.log(`Using arguments.length:
     we can see how many argument has been passed: 
     at ${myAdditionFuncCalls} call: ${arguments.length} argument`);
    return a + b;
}
console.log('Function with two parameter (a, b=1): ', myAddition, '\n');

console.log('Calling function myAddition with (5 and 2): ', myAddition(5, 2), '\n');
// expected output: 7

console.log('Calling function myAddition with single parameter (5):', myAddition(5));
// expected output: 6

console.log('\n***********Function expressions**************\n');
/**
 * There is another syntax for creating a function that is called a Function Expression.
 */
//example

/**
 * Here, the function is created and assigned to the variable explicitly, 
 * just like any other value. 
 * No matter how the function is defined, it’s just a value stored in the variable sayHi.
 * 
 * function expression => create a function and put it into the variable :) awesome
 * 
 * Remember Normal function declaration is hoisted, function expression dont!
 * hoisting: you an call the function first and then declare 
 */
let sayHi = function () {
    console.log('function expression has been called: Holaa, cómo estás');
};

//calling 
sayHi();

console.log('\n*********** ➡ Arrow Function **************\n');

// Arrow function with no arguments 
const printHello = () => {
    console.log('hello, No argument Arrow Function is called');
};
printHello(); // Prints: hello

// Arrow functions with a single argument 
const checkWeight = weight => {
    console.log(`Baggage weight : ${weight} kilograms.`);
};
console.log('\nSingle argument Arrow Function is called:');
checkWeight(25) // Prints: Baggage weight : 25 kilograms.

// Arrow function with two arguments 
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
console.log('\nArrow function with two argument: ',sum(2, 5)); // Prints: 7 

// Concise arrow functions //clean and clear in one line
const multiply = (a, b) => a * b;
console.log('\nArrow Function clean and concise: in single line ',multiply(2, 30)); // Prints: 60