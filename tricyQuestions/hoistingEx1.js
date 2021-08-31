//This will work as expected
/**
 * This invoked the function before the function has been defined 
 * and thats what a hoisting is :=> 
 * 
 * what JS does behind the scenes is =>
 * allocates memory for variable and function declarations
 *  prior to execution of the code.
 * :) meaning moving to the top of their scope OR hoist it
 */
foo();

function foo() {
    console.log('holaaaa!!!');
}

/**
 * let and const never get hosited, 
 * only var and function declaration is hosited
*/

//This will through an Error Message !I'm using try catch
try { bar() }
catch (err) { console.log('TypeError: bar is not a function') }

//only declaration is hoisted and not the assignment(Right Hand Side of the equal sign)
var bar = function () {
    console.log();
}