console.log('*************conditions*******************');

//using if else
let x = 20;
if( x === 10 ){
    console.log('x is equal to 10');
}else if(x === 20){
    console.log('x is equal to 20');
}else if(x === 30){
    console.log('x is equal to 30');
}else{
    console.log('I dont know...');
}

//lets nest it
let myPassId = "440369";
if( myPassId.length >= 6){
    if((myPassId[0] == 4)){
        console.log('Your id start with 4 Your lucky');
    }else{
        console.log("Your in to the party");
    }
}else{
    console.log("Your are not allowed");
}

console.log('********switch statement**********');

let day = 2;

switch (day) {
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log('Invalid');
}

console.log('****************************');

//truthy
//when the value truthy it will be coersed to the value to true

//falsy

// example
if("something"){
    // if coerced to true and equal to true, condition passes
    console.log('truthy');
} else {
    console.log('falsy');
}

//anything is not falsey its truthy
// these are all the falsy value
// 0, "", null, nudefined, NaN 

// Operators

console.log('lets chack using && operator: ', (1 <= 2 && 'a' === 'a'));
console.log('lets chack using || operator: ', (1 != 1 || 2 == 1));
console.log('lets chack using ! operator: ', !(1 == 1));

// order of percedences

let num = 12;
console.log('order of percedences: ', (!(num == 12 || num === '12' ) && num > 10));
// ! opearator has hhigher precedences that && and ||, && has heigher precedence that ||
// can use () as we need

console.log('*************Ternary Operator*******************');

var age = 26;
var beverage = (age >= 21) ? "Pizza" : "Apple";
console.log(beverage); // "Beer"


console.log('*************scope*******************');
// scopes

// lexical scope define how varibale names are resolved in nested function.
// if we have a child function within a parent function then the child function will have access to the scope of the parent function and has access to the global scope

let x1 = 1;
const parentFun = ()=>{
    let parentvalue = 2;
    console.log('This is a global scope value ', x1);
    console.log('This is a parent scope value ', parentvalue);
    
    const childFun = () => {
        console.log('global scope +1 added ', x1+=1);
        console.log('parent scope +1 is added ', parentvalue+=1);
    }
    childFun();
}
parentFun();

console.log('************************************');

// explicit conversion
// using things like function to explicitly convert one data type to another
console.log('boolean explicit converion ',Boolean(0));
console.log('boolean explicit converion ',Boolean(1));

// implicit converion
// autometic conversion of data types also called coersion

console.log('1' * '2');
console.log('1' * 2);

/*
1. Avoid direct comparisons

// this is redudance
if(x === false ){
    
}
// instead of that use
if(!x){
    
}*/

//example:
const userName = '';

if(!userName){
    console.log('No UserName');
}else{
    console.log(`Hello ${userName}`);
}

//2. Use triple equals (strict equality operator)
//bec they dont allow type conversion 

if(true === true){
    console.log("The same");
}


console.log('************************************');
// Usage of break statement

//The break statement terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.

let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log('Break statement in while loop:', i);
// expected output: 3

console.log('*********************************');
console.log('Break using switch statement');

const food = "sushi";

switch (food) {
  case "sushi":
    console.log("Sushi is originally from Japan.");
    break;
  case "pizza":
    console.log("Pizza is originally from Italy.");
    break;
  default:
    console.log("I have never heard of that dish.");
    break;
}