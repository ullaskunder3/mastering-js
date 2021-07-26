# JavaScript Functions

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
