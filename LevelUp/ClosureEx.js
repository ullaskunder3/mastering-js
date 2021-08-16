/** 
 * Medium -Eric Elliott
 * 
 * Closures are frequently used in JavaScript for object data privacy,
 * in event handlers and callback functions, and in partial applications,
 * currying, and other functional programming patterns.
 * 
 * A closure gives you access to an outer function’s scope
 *  from an inner function. 
 * In JavaScript, closures are created every time a function is created,
 *  at function creation time.
 * 
 * To use a closure, define a function inside another function and expose it.
 *  To expose a function, return it or pass it to another function.
 * 
 * More example cf.js line no. 128
 */

function callMe() {
    let myName = 'monday';

    function askName() {
        console.log('name ? ', myName);
    }
    return askName;
}

let funVar = callMe();
funVar();

console.log('********************************');

function printMessage(firstPass) {
    let lastCall = 'Call me last'
    return function innerFun(secondPass) {
        console.log(firstPass);
        console.log(secondPass);
        console.log(lastCall);
    }
}

let varFun = printMessage('call me first');
varFun('call me second');

console.log('************* Privileged(exposed) method *******************');
// privileged methods. 
// In JavaScript, any exposed method defined within the closure scope is privileged.

// https://gist.github.com/ericelliott/2b624243f030405abe0c