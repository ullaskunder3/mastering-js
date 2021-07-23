// The Secret Life of Objects
/*
"An abstract data type is realized by writing a special kind of program [...]
which defines the types in terms of the operations which can be performed on it"
*/

// Encapsulation

/*
The core idea in object-oriented programming is to devide programs into smaller pieces 
and make each piece responsibe for managing its own state.

inspired by how cells were encapsulated by a membrane and communicated via message passing.
All those ideas came together to form the the foundations of OOP: 
encapsulation and message passing.
*/

//Method
/*
Methods are nothing more than properties that hold function values. This is a simple method.
*/

let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The rabit says '${line}'`);
};
rabbit.speak("I'm alive.");

/*
Usually a method needs to do something with the object it was called on. 
When a function is called as a method—looked up as a property and immediately called, 
as in object.method()—the binding called this in its body automatically points at the object 
that it was called on.
 */

function speak(line) {
    console.log(`The ${this.type} rabit says ${line}`);
}
let whiteRabbit = {type: "white", speak}
let hungryRabbit = {type: "hungry", speak}

whiteRabbit.speak("Oh my ears and whiskers, "+"How late it's gettting!");

hungryRabbit.speak("I could use a carrot right now.");

/*
You can think of this as an extra parameter that is passed in a different way. 
If you want to pass it explicitly, you can use a function’s call method, 
which takes the this value as its first argument and treats further arguments 
as normal parameters.
 */

speak.call(hungryRabbit, "Burp! ");

/*
Since each function has its own this binding, whose value depends on the way it is called, 
you cannot refer to the this of the wrapping scope in a regular function 
defined with the function keyword.
 */

/*
Arrow functions are different—they do not bind their own this but can see the this binding 
of the scope around them. Thus, you can do something like the following code, 
which references this from inside a local function:
 */

function normalize() {
    console.log(this.coords.map(n => n/this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});

// If I had written the argument to map using the function keyword, the code wouldn’t work.

// ProtoTypes

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

/*
Pulled a property out of an empty object. magic!

not exactly, I have simply been withholding information about the way js object work.
In addition to their set of properties, most object also have a prototype.
A prototype is another object that is used as fallbak source of properties.
When an object get a request for a property, then the prototype's prototype, and so on.

So, who is the prototype of the empty object? 
Its is the great ancestral prototype, the entity behind almost all object.prototype
 */

console.log(Object.getPrototypeOf( {} ) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

// You can use Object.create to create an object with a specific prototype.
let prototyRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}`);
    }
};

let killerRabbit = Object.create(prototyRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('Awesome!');

/**
 * A prototype like speak(line) in an object expression is a shorthand way of defining a method.
 * It create a property called speak and gives it a function as its value.
 * 
 * The prototy rabbit acts as a container for the properties that are shared by all rabbits. 
 * an individual rabbit object, like the killer rabbit, contains properties that apply only
 * to itself in the case its type and derives shared properties form its prototype 
 */
// -> Classes