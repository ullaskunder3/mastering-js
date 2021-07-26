/* syntax:
    for(initial expression, condition, increment expression ){
        //block of code
    }
*/

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}
/**
 * let i = 0; => i starts from 0
 * i++;       => i should increment on true value 0, 1, 2, 3...10 
 * i <= 10;   => i shoud go less then or equal to 10
 */

console.log('\n*********Same in reverse order***********\n');

for (let i = 10; i >= 0; i--) {
    console.log(`${i} x ${i} = ${i * i}`);
}
/**
 * let i = 10; => i starts from 10
 * i--;       => i should decrement on true value 10, 9, 8...0 
 * i >= 10;   => i shoud go less then or equal to 0
 */

console.log('\n*********looping over string***********\n');

const word = 'awesome';
console.log(`The String (word) is '${word}'.`);

for (let i = 0; i < word.length; i++) {
    console.log(`${i} letter is ${word[i]} and lets make it capital ${word[i].toUpperCase()} `);
}
console.log('\n');
let savedReverse = "";
for (let i = word.length - 1; i >= 0; i--) {
    savedReverse += word[i];
    console.log(savedReverse);
}
console.log('The word in reverse order is: ', savedReverse);

console.log('\n*********looping over an array***********\n');

const fruitBasket = ['Apple', 'BlueB', 'BlackB', 'PineA'];

console.log('Array of: ', fruitBasket);
console.log('Types of fruit we have in the basket: ');

for (let i = 0; i < fruitBasket.length; i++) {
    console.log(i, fruitBasket[i]);
}

console.log('\n*********looping over an array of Objects***********\n');
const bookShop = [
    {
        bookName: 'Hitler',
        price: 200
    },
    {
        bookName: 'SHAKESPEAR',
        price: 200
    },
    {
        bookName: 'Wise Homo sapiens',
        price: 200
    }
];

console.log('The book shop => array of objects', bookShop);

for (let i = 0; i < bookShop.length; i++) {
    let bookNames = bookShop[i];
    console.log(`The book ${bookNames.bookName} cost ${bookNames.price}`);
}

let totalCost = 0;
for (let i = 0; i < bookShop.length; i++) {
    let bookNames = bookShop[i];
    totalCost += bookNames.price;

}
console.log('The total cost of the books is ', totalCost);
console.log('\n*********Nested loop***********\n');

console.log('For each iteration of the outer loop inner loop complete its cycle');
for (let i = 0; i <= 2; i++) {
    console.log('Outer loop: ', i, "time");
    for (let j = 0; j <= 3; j++) {
        console.log(' =>Inner loop: ', j, "time");

    }
}
console.log('\n*********Nested loop pyramid***********\n');

for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 1; j <= i; j++) {
        //Count the '*' for each row
        str += '*';
    }
    //Print the pyramid pattern for each row
    console.log(str);
}

console.log('\n\t____Left and right pyramid____\n');

for (let i = 1; i <= 5; i++) {
    let str = '';
    //Add the white space to the left
    for (let k = 1; k <= 5 - i; k++) {
        str += ' ';
    }
    //Add the '*' for each row
    for (let j = 1; j <= i; j++) {
        str += '*';
    }
    //Print the pyramid pattern for each row
    console.log(str);
}

console.log('\n\t____Triangle pyramid____\n');

for (let i = 1; i <= 5; i++) {
    let str = '';
    //Add the white space to the left
    for (let k = 1; k <= (5 - i); k++) {
        str += ' ';
    }
    //Add the '*' for each row
    for (let j = 0; j != (2 * i - 1); j++) {
        str += '*';
    }
    //Add the white space to the right
    for (let k = i + 1; k <= 5; k++) {
        str += ' ';
    }
    //Print the pyramid pattern for each row
    console.log(str);
}

console.log('\n*********Nested loop X2***********\n');
const additionOfArray = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [2, 1, 1, 1],
];
console.log('The nested array is: ', additionOfArray);

let totalNum = 0;
for (let i = 0; i < additionOfArray.length; i++) {
    let row = additionOfArray[i];
    console.log(`The Outer loop row-${i}, ${row}`);
    for (let j = 0; j < row.length; j++) {
        totalNum += row[j]
    }
}
console.log('The total: ', totalNum);

console.log('\n*********While Loop***********\n');

/**
 * The while statement creates a loop that executes a 
 * specified statement as long as the test condition 
 * evaluates to true.
 */

console.log('loop starts from 3');
let loopValue = 3;
while (loopValue) {
    /**
     * when i becomes 0, 
     * the condition becomes falsy, and the loop stops
     */
    console.log('The condition: ', loopValue);
    loopValue--;
}
console.log('loop stop at 0');


var condition = 0;
var x = 0;

console.log(`\nThe initial value of x: ${x} and condition: ${condition}`);

while (condition < 3) {
    console.log(`The value of x: ${x} condition: ${condition}.
    increment the condition++ and add it to x`);
    condition++;
    x += condition; //similar to x = x + condtion

    console.log(x);
}

/**
 * Each iteration, the loop increments n and adds it to x.
 * Therefore, x and 'condition' take on the following values:
 
 - After the first pass:  'condition' = 1 and x = 1
 - After the second pass: 'condition' = 2 and x = 3
 - After the third pass:  'condition' = 3 and x = 6
 
 After completing the third pass, the condition 'condition' < 3
 is no longer true, so the loop terminates.
 */
console.log('\n*********for...in loop***********\n');

/**
 * The for...in statement iterates over all enumerable properties of an object 
 * that are keyed by strings
 * 
 * syntax:
 * for (variable in object) {
        statement
    }
 */

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// expected output:
// "a: 1"
// "b: 2"
// "c: 3"

console.log('_____Another example with strings______\n');

var person = { fname: "ullas", lname: "Awesome", status: "Cool"};

for(let key in person){
    console.log(`${key} => ${person[key]}`);
    //person[key] is used to access the value of key
}
/**
 * Output
fname => ullas
lname => Awesome
status => Cool
*/

console.log('\n*********for..of loop =>Don\'t support IE***********\n');
/**
 * Iterable objects are a generalization of arrays. 
 * That’s a concept that allows us to make any object useable in a for..of loop.
 */

/**
 * for(variabe of iteratable){
 *    code block
 * }
 */


let heroes = ['Black Panther..', 'Iron Man.......', 'Caption America', 'all...Marvel...']
let herroCount = 1;
for (let hero of heroes) {
    console.log(`This is Awesome: ${hero} counter. ${herroCount}`);
    herroCount++;
}

console.log('\nfor..of (iterable) we can use it on Object directly\n');

const marvelMovies = {
    'Iron Man...........................': 9.3,
    'Black Panther......................': 9.4,
    Thor_______________________________: 9.5,
    'Captain Marvel.....................': 9.4,
    'Avengers: Infinity War.............': 9.5,
    'Captain America: The First Avenger.': 9.4,
    'Marvel\'s The Avengers..............': 9.3,
    'Guardians of the Galaxy............': 9.3,
    'Ant-Man............................': 9.4,
    'Spider-Man: Homecoming.............': 9.2,
    'Doctor Strange.....................': 9.8
};

//for(let eachMarvelMovie of marvelMovies){
// console.log(eachMarvelMovie); error not iterable
//}
console.log('We can use Object.keys & Object.value to acces the object properties \n');
for (let eachMarvelMovie of Object.keys(marvelMovies)) {
    console.log(`Awesome: Movie ${eachMarvelMovie} rated: ${marvelMovies[eachMarvelMovie]}`);
}


