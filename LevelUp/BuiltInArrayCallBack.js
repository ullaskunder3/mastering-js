/**
 * Built-in Method
 * forEach
 * map
 * filter
 * find
 * 
 * reduce
 * some
 * every
 */

let colors = ['red', 'blue', 'green'];
console.log('Array of color is:', colors);
//output => Array of color is: [ 'red', 'blue', 'green' ]

console.log('**********Using forloop**********');
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};
//output => red blue green

console.log('**********Using forEach**********');
//we are passing Anonymous function
colors.forEach(function (color) {
    console.log(color);
});
//output => red blue green

console.log('\n**********forEach array of objects**********\n');

const books = [
    {
        title: 'The Alchemist',
        rating: 9.1
    },
    {
        title: 'Great Lives',
        rating: 8.9
    },
    {
        title: 'Wise Person',
        rating: 8.1
    }
]
books.forEach(function (book) {
    console.log(`The Book ${book.title.toUpperCase()}`);
})

console.log('\n**********sum of array elm forEach ex2***********');

let sum = 0;
let numbers = [1, 2, 3, 4, 5, 8];
console.log('Array of number : ', numbers);
//output => Array of number :  [ 1, 2, 3, 4, 5, 8 ]

function addNum(number) {
    sum += number;
};

numbers.forEach(addNum);

console.log('Using forEach: the sum of array number: ', sum);
//output => Using forEach: the sum of array number:  23

console.log('\n**********using Array method map***********');

/**
 * Map creates a new array width the results of calling a callbacks
 * on every element in the array 
 **/

const array1 = [1, 4, 9, 16];
console.log('Array of number: ', array1);

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log('New Array: ', map1);
// expected output: Array [2, 8, 18, 32]


/************************************************************ */

console.log('\n**********double the array elem using Map***********');

let newNumbers = [1, 2, 3, 4];
console.log('Original array of number', newNumbers);
//output => Original array of number [ 1, 2, 3, 4 ]

let doubleOfNum = [];
for (let i = 0; i < newNumbers.length; i++) {
    doubleOfNum.push(newNumbers[i] * 2);
}
console.log('Using forloop we need to create a new array:', doubleOfNum);
//output => Using forloop [ 2, 4, 6, 8 ]


let doubled = newNumbers.map(function (number) {
    return number * 2;
})
console.log('using map: ', doubled);
//output => using map [ 2, 4, 6, 8 ]

console.log('\n**********Array method find && includes***********');

/**
 * The find() method returns the value of the first element
 *  in the provided array that satisfies the provided testing function.
 *  If no values satisfy the testing function, undefined is returned.
 * 
 * The includes() method determines whether an array includes a certain value 
 * among its entries, returning true or false as appropriate.
 */

const arra = [5, 12, 8, 130, 44];
console.log('\nArray of arra: ', arra);

//find element number greater than 10
const found = arra.find(element => element > 10);

console.log(found);
// expected output: 12


const array2 = [1, 2, 3];
console.log('\nArray of array2: ', array2);

console.log('Does 2 includes in array2:', array2.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];
console.log('Array of pets: ', pets);

console.log('Does cat includes in pets', pets.includes('cat'));
// expected output: true

console.log('Does lion includes in pets: ', pets.includes('lion'));
// expected output: false

/**********************************************************/

let moviesName = [
    'Iron Man',
    'The Alchemist',
    'Caption America',
    'End Game',
    'All Marvels'
]
console.log('\nArray of movieName: ', moviesName);

let movie = moviesName.find(movie => {
    return movie.includes('Game');
})
console.log(movie);

console.log('\n**********Array method filter***********');

/**
 * The filter() method creates a new array with all elements 
 * that pass the test implemented by the provided function.
 */

const words = ['Loki', 'vision', 'cat', 'Thanos', 'Captain America'];
console.log('\nArray of words:', words);
// Array of words: [ 'Loki', 'vision', 'cat', 'Thanos', 'Captain America' ]

//filter out the word whose length is greater then 6
const result = words.filter(word => word.length > 6);

console.log('word whose length is greater then 6: ',result);
// expected output: 
// word whose length is greater then 6:  [ 'Captain America' ]
