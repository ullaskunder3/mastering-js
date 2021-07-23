# Basic of JavaScript

## Intro

ECMAScript:

ECMAScript (or ES) is a general-purpose programming language, standardised by Ecma International according to the document ECMA-262.

*ECMAScript is a Standard for a scripting languages.*

ECMAScript is based on several originating technologies, the most well-known being `JavaScript (Netscape)` and `JScript (Microsoft)`. The language was invented by __Brendan Eich__ at Netscape and first appeared in that company's Navigator 2.0 browser. It has appeared in all subsequent browsers from Netscape and in all browsers from Microsoft starting with Internet Explorer 3.0.

`JavaScript` (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.

## Comments in js

>we can use `//` or `/**/`

## Variables and Data types

### Variables

A variable is a named reference to a value... well it's a `container`

### Variable naming

```javascript
    //camel case means the variable name look like a camel hump 

    //declaring
    let myVariable;
    //initializing
    myVariable = value;

    // or in one line
    // declaring and initializing
    //  define the variable and assign the value
    let newVariable = value;
--------------------------------------------------------
There are two limitations on variable names in JavaScript:

    - The name must contain only letters, digits, or the symbols $ and _.
    - The first character must not be a digit.
    - Do not use reserve keywords like let, for, class,...
```

keyWord in javascript to create variables

`let`, `const`, `var`

The `let` statement declares a `block-scoped` *local* variable, optionally initializing it to a value.

Using `const` keyword, Once the variable declared it can't be changed

Dont use it -> `Var` is the old way of declaring variables.

### Primitive Types

- Numbers `its a numberic value`
- String `anything inside quote`
- Boolean `true or false value`
- Null ``
- NaN `Its conside as a numeric value but tells something is not a number`
- Undefined ``
- Symbol ``
- BigInt ``

### Numbers in javaScript

- Positive Number
- Negative Number
- Floating(decimal) Number

Infinity (creepy but yess)

Infinity is a property of the global [object]. In other words, it is a variable in global scope. The initial value of Infinity is Number

To perform mathematical operation in JavaScript:
using `Arthmetic Operators`

- **Operators**
  - `+` Addition

  - `-` Subtraction

  - `*` Multiplication

  - `**` Exponential (ES2016)

  - `/` Division

  - `%` Modulus (Remainder)

  - `++` Increment

  - `--` Decrement

  - `()` Expression grouping

  - `!` Logical not

  - `|` Bitwise OR

  - `&` Bitwise AND

  - `||` Logical OR

  - `&&` Logical AND

**PEMDAS** is an acronym used to mention the order of operations to be followed while solving expressions

*PEMDAS stands for P- Parentheses, E- Exponents, M- Multiplication, D- Division, A- Addition, and S- Subtraction.*

### Strings in javascript

Anything in between quotes whether be in single or double  

```javaScript
    const firstName = 'Ullas';

    let yourName = "It will work"
```

String concatenates

```javaScript
    const fullName = "Ullas"+" "+"Kunder";
```

String Indexing
Indexing starts from 0 as expected>

`index will always be (length-1)`

To access it index we can use square brackets [index]

One of the properties called `length` is helpful in getting the length of the strings

```javaScript
    const myName = "ullas";
    console.log(myName.length);//output: 5
    console.log(myName[0]);//output: u
    console.log(myName[1]);//output: l
    console.log(myName[2]);//output: l
    console.log(myName[3]);//output: a
    console.log(myName[4]);//output: s
```

String Methods

with the built-in js method we can perform functions like:

- Character access
- Comparing strings
- Searching within the string
- Changing Cases
- Replacing the strings, character...
- ...(mind blown)

Changing case

The string methods `toLowerCase()` and `toUpperCase()` take a string and convert all the characters to lower- or uppercase, respectively.

```javascript
let message = "Awesome javascript is unbelivable"
console.log(message.toLowerCase()) //awesome javascript is unbelivable
console.log(message.toUpperCase()) //AWESOME JAVASCRIPT IS UNBELIVABLE
```

`The trim()` method removes whitespace from both ends of a string.

```javaScript
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";

```

There are two ways to access an individual character in a string. The first is the `charAt()` method:

```javaScript
let ststus = 'dev';
console.log(status.charAt(0)); //output: d
```

`indexof()` Finding a substring inside a string and extracting it

```Javascript
let browserType = 'mozilla';
browserType.indexOf('zilla'); //output: 2
```

The `slice()` method extracts a section of a string and returns it as a new string, without modifying the original string.

slice(beginIndex)
slice(beginIndex, endIndex)

```JavaScript
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// expected output: "the lazy dog."

console.log(str.slice(4, 19));
// expected output: "quick brown fox"

console.log(str.slice(-4));
// expected output: "dog."

console.log(str.slice(-9, -5));
// expected output: "lazy"
```

`replace()` method

```js
"they who remain".replace('they', 'He')
//output: He who remain 
```

### Escape sequences

- `\n` :newline
- `\\` :backslash
- `\"` :double quote
- `\'` :single quote
- `\t` :tab
- ...

```js
//single quote in between string
"We haven\'t"

//new line
"Hello\nWorld"

//usinhg tab
"\tAwesome"
```

## Template literals (Template strings)

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

```JavaScript
`string text`

`string multi line
 string text line 2`

let myName = "Kang";

`Hello, Myself ${myName}.`

// Expression interpolation
let a = 5;
let b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."
```

## null

The value null represents the intentional absence of any object value.
It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

```javascript
// foo does not exist. It is not defined and has never been initialized:
foo; //ReferenceError: foo is not defined

// foo is known to exist now but it has no type or value:
var foo = null;
foo; //null
```

## Undefined

The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types

```javascript
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null  == undefined   // true
null === null        // true
null == null         // true
!null                // true
isNaN(1 + null)      // false
isNaN(1 + undefined) // true
```

## Comparison Operator

- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to
- `==` equality operator
- `===` strict equality operator
- `!=` not equal to
- `!==` strict not equal to

```JavaScript
console.log(5 > 3);
// expected output: true

console.log(5 < 3);
// expected output: false


console.log(3 >= 3);
// expected output: true

console.log(5 <= 3);
// expected output: false

```

### equality operator (double equal)

- Check for `equality of value` not its `type` and returning a Boolean result
- It attempts to convert(`coerces`) and compare operands that are of different types.

```js
//using double equal to
console.log(1 == 1);
// expected output: true

console.log('hello' == 'hello');
// expected output: true

```

### Strict equality [advice use strict equality]

- Check for equality of value && type

```Js
//Using strict equality
console.log(1 === 1);
// expected output: true

console.log('1' ===  1);
// expected output: false

console.log('hello' === 'hello');
// expected output: true

```
