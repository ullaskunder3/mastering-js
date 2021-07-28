//Scopes in Javascript

/**
 * Variables defined inside a function are in local scope 
 * while variables defined outside of a function are in the global scope. 
 * Each function when invoked creates a new scope.
 * 
 * More concepts in the README file
 */


// Initialize global variable
// its in a global scope
let theMadTitan = 'Thanos'

function functionName() {
    // local scope
    console.log('This is local scope: calling global variable: ', theMadTitan)

    // function scope OR Local Scope
    let awesome = 'ullas';
    // output => This is local scope: calling global variable:  Thanos
}

//calling function
functionName()

console.log('\n**********************Global Scope*********************\n');

//Global variables
let rapGod = 'Eminem';
let letsCheck = 'globalScope'

function MyNameIs(name) {
    var letsCheck = 'Shushhhh'
    return `Will the real Slim Shady please stand up?: ${name}`
}

console.log(MyNameIs(rapGod));

console.log('This is calling: ', letsCheck);
// output => This is calling:  globalScope

console.log('\n*******************Block scope***********************\n');

// Initialize a global variable
let species = "human";
var fullMoon = true;

if (fullMoon) {
    // Initialize a block-scoped variable
    let species = "werewolf";
    console.log(`It is a full moon. Lupin is currently a ${species}. 'its from block-scope'`);
}

console.log(`It is not a full moon. Lupin is currently a ${species}.`);

console.log('\n*******************Nesting scope***********************\n');

var name = 'Peter';
function greet() {
    var greeting = 'Hello';
    {
        let lang = 'English';
        console.log(`${lang}: ${greeting} ${name}`);
    }
}
greet();

console.log('\n*******************Lexical scope***********************\n');

// Think about nested function

function outerFun() {
    let teamCall = 'Avengers'

    function innerFun() {
        let codeRed = `Iron-Man 🤖: '${teamCall}' Assemble, 🦸‍♂️, 🕷...`
        console.log(codeRed);
    }

    innerFun();
}
//calling outer function
console.log(`Lexical scope: 
{Avenger} is not defined in inner(child function)
 but still child can access its parent data\n`);
 
outerFun();

console.log('\n*******************scope chaining***********************\n');

let foo = 'foo';
function bar() {
    let baz = 'baz';
    // Prints 'baz'
    console.log(baz);
    // Prints 'foo'
    console.log(foo);
    number = 42;
    console.log(number);  // Prints 42
}
bar();