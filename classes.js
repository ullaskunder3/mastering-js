// before class concept one must know the following topics
/**
 * Javascript's  prototype system can be interpreted as a somewhat informal take
 * on an object oriented concept called classes. A class define the shape of the type of object
 * - what method and properties it has. Such an object is called an instance of the class
 */

/**
 * Prototypes are useful for defining properties for which all instance of class 
 * share the same value, such as method, properties that differ per instance, 
 * such as our rabbits' type property need to be stored directly in the objects themselves.s
 */

/**
 * So to create an instance of a given class, you have to make an object that derives
 * form the proper prototype, but you also have to make sure it, itself,
 * has the properties that instance of this class are supposed to have. 
 * This is what constructor function does
 */
function makeRabbit(type) {
    let rabbit = Object.create(protoRbbit);
    rabbit.type = type;
    return rabbit;
}
/**
 * Js provides a way to make defining this type of function easier. if you put the keyword new
 * in front of a function call, the function is treated as a constructor. 
 * This means that an object with the right prototype is autometically created, 
 * bound to this in function, and returned at the end of the function.
 * 
 * The prototype object used when constructing object is found by taking 
 * the prototype property of the constructor function  
 */
function Rabbit(type) {
    this.type = type;
}
Rabbit.prototype.speak = function (line) {
    console.log(`This ${this.type} rabbit says '${line}'`);
};
let littleRabbit = new Rabbit('Hola');

console.log(littleRabbit);

/**
 * Constructors (all functions, in fact) autometically get a prototype names prototype,
 * which by default holds a plain, empty object that derives form Object.prtotype.
 * We can overwrite it with a new object if we want.
 * or we can add properties to the existing object
 * 
 * Convension: name of constructors are capitalized for distinguished fro other functions.
 */

//CLASS
/**
 * Javascript classes are constructor function with a prototype property. 
 * That is how they work and untill 2015, as per the eloquentjavascript stated :)
 * "These days, we have a less awkward notation.""
 */

class RabbitClass{
    constructor(type){
        this.type = type;
    }

    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let bugsRabbit = new RabbitClass('Amesome');
console.log(bugsRabbit);  

let bugsBunny = new RabbitClass('What\'s up doc ');
console.log(bugsBunny);  

/**
 * The class keyword starts a class declaration, which allows us to define a constructor 
 * and a set of methods all in a single place.
 * Any number of method may be written inside the declaration's braces. 
 * The one named constructor is treated specially. It provieds the actual constructor function,
 * which will be bound to the name Rabbit.
 * The other are packaged into that constructor's prototype.
 * 
 * Class declaration currently allow only methods 
 * -properties that hold functions-to be added to the prototype.
 * This can be somewhat inconvenient when you want to save a non-function value in there.
 * The nex version of language is probably improve this. for now you ca create such properties
 * by directly manipilating the prototype after you've defined the class.  
 */
//Like function, class can be used both in statements and in expressions. 
//When used as an expression, it doesn’t define a binding 
//but just produces the constructor as a value.
//You are allowed to omit the class name in a class expression.

 let object = new class { getWord() { return "hello"; } };
 console.log(object.getWord());
 // → hello

/**
 * manage student id name and subjects
 * able to add and change the subject they are taking
 * width object we can add behaviour
 */

/*
const student1 = {
    id: 1,
    name: "ullas",
    subjects: [],
    addSubject(subject){
        // this represent the refenence to the current object
        //which equal to the new array of the previous value using 
        //spread operator and the add new one as last element
        this.subjects = [...this.subjects, subject];
    }
};

student1.addSubject('bio');

console.log(student1.subjects);
*/

// problem
//imagin another student2 and so on...

/*
//constructor function
//constructor function represent the data it makes not a specifc operaton

//like other function
function Student(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
    //remember we are not returning the values
}

//Now to call custructor function use new
// console.log(new Student(1, 'ullas'));

// with new keyword object instance implicitly returned form the function

// Using constructor function also give us the ability to share functionality 
// through a special property called the prototype

// remember the function are just special js objects as a result 
// functions can have properties just like any other js type

//do not use arrow function
Student.prototype.addSubject = function (subject) {
    this.subjects = [...this.subjects, subject];
}

const student1 = new Student(1, 'ullas');
student1.addSubject('bio');
student1.addSubject('math');

// console.log(student1.subjects);

//this is all a prototypical inheritance

// console.log(Object.getPrototypeOf({}));
// console.table(Object.getPrototypeOf(student1));
// console.log(new Object);
*/

//Now classe and prototypes in js arent different 
/**
 * Classes way to work with constructor function and the prototype
 * classes are just a cleaner way to work with constructor function
 * Since the js is based on the prototypical inheritance.
 * When you create a new instance methods and properties are not copied to the new object 
 * you're merly linking that created object to the function constructor properties 
 * which is the source of inherited properties
 * So when you call the method on an instance of a constructor you really just calling
 * it from that function's
 */

/*
// console.log(class ClassNameExample {});
// console.log(typeof function ConstructorName(){});//function
// console.log(typeof class ClassNameExample {});//function
//see they are both same

class Student{
    constructor(id, name, subjects = []){
        this.id = id;
        this.name = name;
        this.subjects = subjects;
    }
    getStudentName(){
        return `Student: ${this.name}`
    }
    addSubject(){
        this.getStudentName();
    }
}
//instanciating the objects
const stu3 = new Student(2, 'shady');

// console.log(stu3.id);
// console.log(stu3["name"]);

console.log('The instance of the student3: ', stu3);
console.log('calling the method',stu3.getStudentName());
*/

class Product {
    constructor(name, price, disountable){
        this.name = name;
        this.price = price;
        this.disountable = disountable;
    }
    isDiscountable(){
        return this.disountable;
    }
}

// const product1 = new Product('rubics cube', 20.05, true);

class SaleProduct extends Product {
    constructor(name, price, disountable, percentOff) {
        super(name, price, disountable);
        this.percentOff = percentOff;
    }
    getSalePrice(){
        if(super.isDiscountable()){
            return this.price*((100 - this.percentOff)/100);
        }else{
            return `${this.name} is not eligible for discount`
        }
    }
}
const product1 = new SaleProduct("rubics cube", 20.05, true, 10);
console.log(product1.getSalePrice());