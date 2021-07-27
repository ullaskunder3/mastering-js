# JavaScript Functions

## Difference Between var, let, and const

| Keyword |      Scope       | Hoisting | Can be Reassigned | Can be Redeclared |
|:-------:|:----------------:|:--------:|-------------------|:-----------------:|
|   var   | `Function scope` |    Yes   |        Yes        |        Yes        |
|   let   |   `Block Scope`  |    NO    |        Yes        |         No        |
|  const  |   `Block Scope`  |    No    |         No        |         No        |

```DO
A commonly accepted practice is to use const as much as possible, and let in the case of loops and reassignment. Generally, var can be avoided outside of working on legacy code.
```

## Hoisting

JavaScript Hoisting refers to the process whereby the compiler allocates memory for `variable and function` declarations `prior to execution of the code`.

```JavaScript

    catName("Chloe");

    function catName(name) {
        console.log("My cat's name is " + name);
    }
    /*
    The result of the code above is: "My cat's name is Chloe"
    */
```

## Functions

By default, functions return `undefined`. To return any other value, the function must have a `return` statement that specifies the value to return.

## Function Parameters

A JavaScript function can have any number of parameters.

```JavaScript

    // 0 parameters
    function zeroParaMeterFun() {
    return 0;
    }

    // 1 parameter
    function identity(user) {
    return `Hello ${user}`;
    }

    // 2 parameters
    function sum(param1, param2) {
    return param1 + param2;
    }

    //function calling
    zeroParaMeterFun();      // => Output: 0
    identity('ullas');       // => Output: Hello ullas
    sum(1, 2);               // => Output: 3

```

## Terminology: “Parameter” Versus “Argument”

The terms parameter and argument are often used interchangeably, because the context usually makes it clear what the intended meaning is. The following is a rule of thumb for distinguishing them.

**Parameters are used to define a function**. They are also called formal parameters and formal arguments. In the following example, `param1` and `param2` are **parameters**:

```JavaScript
function foo(param1, param2) {
    ...
}
```

**Arguments are used to invoke a function**. They are also called actual parameters and actual arguments. In the following example, 3 and 7 are arguments:

```JavaScript
//function calling 
foo(3, 7);
```

## Default parameters

The ES2015 `default function parameters feature` allow named parameters to be initialized with default values if no value or undefined is passed.

```JavaScript

    function addition(a, b = 1) {
        return a + b;
    }
    
    console.log(addition(5, 2));
    // expected output: 7
    
    console.log(addition(5));
    // expected output: 6
    
```

## Function expression

Here, the function is created and assigned to the variable explicitly, just like any other value. No matter how the function is defined, **it’s just a value stored in the variable**

```JavaScript

    let sayHi = function() {
        console.log('function expression has been called: Holaa, cómo estás');
    };

    //calling 
    sayHi();
    //output => function expression has been called: Holaa, cómo estás
```

## Arrow Function {!not hoisted}

- Arrow function expressions were introduced in `ES6`. These expressions are `clean and concise`

- The syntax for an arrow function expression does not require the function keyword and uses a `fat arrow` => to separate the parameter(s) from the body.

- Arrow functions with a single parameter do not require () around the parameter list.

- Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword.

```JavaScript
    // Arrow function with no arguments 
    const printHello = () => { 
        console.log('hello'); 
    }; 
    printHello(); // Prints: hello

    // Arrow functions with a single argument 
    const checkWeight = weight => { 
        console.log(`Baggage weight : ${weight} kilograms.`); 
    }; 
    checkWeight(25); // Prints: Baggage weight : 25 kilograms.

    // Concise arrow functions
    const multiply = (a, b) => a * b; 
    console.log(multiply(2, 2)); // Prints: 4
```

### Function Expression vs Function Declaration

Function type           | Description
:----------------------:|:-------------------------:
Function Declaration    |  a function, declared as a separate statement OR defines a function with the specified parameters.
Function Expression     | a function, created inside an expression OR the function is created and assigned to the variable

- Functions are `values`. They can be assigned, copied or declared in any place of the code.
- If the function is declared as a **separate statement** in the main code flow, that’s called a `“Function Declaration”`.
- If the function is created as a part of an **expression**, it’s called a `“Function Expression”.`
- `Function Declarations` are processed `before` the code block is executed. They are visible everywhere in the block.
- `Function Expressions` are created when the `execution flow reaches them`.

```JavaScript           |
// Function Declaration 
function sum(a, b) {
  return a + b;
}
```

```JavaScript
// Function Expression
let sum = function(a, b) {
  return a + b;
};
```

## Scopes in Javascript

A variable’s `scope` determines when it is and isn’t available throughout your program.

In JavaScript,
  the scope of a variable is controlled by the location of the `variable declaration`,
  and it defines the part of the program where a particular variable is accessible.

There are three ways to declare a variable in JavaScript:

- By using the old `var` keyword, and by using the new `let` and `const` keywords.
 Prior to ES6, using the `var` keyword was the only way to declare a variable, but now we can use `let` and `const`, which have stricter rules and make the code less error prone.

- The three main takeaways are:
  - `Inner scope` can always `read` values defined in an `outer parent scope`.

  - `Outer scope cannot read` values defined in an `inner scope` (except when defined with `var`).

  - The var scope-bleed issue can be overcome using immediately-invoked function expressions (IIFEs).

## Types of Scope

At the most `basic level`, there are two types of scope in JavaScript — 
`Global Scope` and `Local Scope`.

Lets explore `Lexical Scope` and `Block Scope`.

Global scope:

- When you open up a document and begin writing code in JavaScript, you are in the global scope.

- Anything you write in the global scope — functions, variables, etc. are accessible anywhere within your JavaScript code.
- Global variables are also available for the lifetime of your application and only deleted when the application ends

```JavaScript
    let theMadTitan = 'Thanos'
    //its in a global scope

    function functionName(){
        console.log('local scope can call global variable: ', theMadTitan);
        //function scope, Local Scope
        let awesome = 'ullas';
    }

    //calling function
    functionName()
    //output => local scope can call global variable:  Thanos

```

Local scope:

- Whenever we create a new scope within the global scope, we are creating a local scope. Locally scoped variables are only accessible where they are defined

```JavaScript
    let theMadTitan = 'Thanos'
    //its in a global scope

    function functionName(){
        //function scope, Local Scope
        let awesome = 'ullas';
        //this awesome cant be accessed out side this function or this scope
    }

```

Lexical Scope:

- Lexical scope (also referred to as static scope) is the ability of an inner function to access the scope of an outer function.

```JavaScript

    // *GLOBAL*
    var dog = 'Lewis';

    function outerFunc(){
        // *SCOPE 1*
        var cat = 'Jerry';

        function innerFunc(){
            // *SCOPE 2*
            console.log(cat); // Jerry
            console.log(dog); // Lewis
        }
    }

```

Block Scope:

- If a variable is declared inside a code block {...}, it’s only visible inside that block.

```JavaScript

    {
        // local variables OR block level variable that should not be seen outside

        let message = "Hello"; // only visible in this block
        console.log(message); // Hello
    }

    console.log(message); // Error: message is not defined

```

## Scope Benefits

Utilizing scope results in quite a few benefits, including:

- `Security` — Variables and functions are only accessible where they are needed.

- `Reducing Namespace Collisions` — Namespace collisions occur when two or more variables share a common name. Scoping of variables helps reduce global variables which prevents this from occurring.

- `Code Reusability` — Correctly utilizing local scopes means more reusable code with fewer potential side-effects.
Types of Scope
