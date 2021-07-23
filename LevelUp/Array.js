// To create an array use []
let books = ['Bio', 'javaScript', 'lastSubject'];

//Or using array literal syntax
new Array()

//Access an Array item using the index position
//indexing is always be one less than the size of length
console.log('The array is: ',books);
console.log('The length of the array is: ',books.length);//output 3
console.log('index 0 of array of books is: ',books[0]);
console.log('index 2 of array of books is: ',books[2]);
console.log('access last item in an array using (length - 1): ',books[books.length - 1]);

console.log('**************************************************');

// looping over the array using for loop
console.log('using forLoop from 0 to (length - 1)which is last index [0, 1, 2] ');
for(let i = 0; i<books.length; i++){
    console.log(books[i]);
}
console.log('**************************************************');

//can be modified
books[1] = "changed";
console.log('The new array after changed: ',books);

console.log('***********************Array Methods**************************');

console.log('Array methods: push(), pop(), shift(), unshift()');

//lets create a new array

let basket = ['Pears', 'Apple', 'Strawberries'] 
console.log('New array for fruits: ',basket);

//using push method which take parameter, add as many as you want 
basket.push('Blueberry', 'eggplant');
console.log('Using push method: ',basket);

//pop method Remove an item from the end of an Array
//using pop method lets remove eggplant 
basket.pop()
//string literal
console.log(`using Array methods: pop() remove '${basket[basket.length-1]}'.`);
console.log('array for fruits : ',basket);

//Not a big fan of Pears so lets remove it from front or beginning 
//Using Shift method Remove an item from the beginning of an Array
console.log(`Not a big fan of Pears Use: shift() to remove '${basket[0]}'.`);
basket.shift()
console.log('array for fruits : ',basket);

// Add an item to the beginning of an Array
//Using unshift method to add an item at the beginning of an Array
console.log('Lets add Raspberries at the beginning');
basket.unshift('Raspberries');
console.log('array for fruits after using unshift() : ',basket);

// Remove an item by index position
let indexOfRasp = basket.indexOf('Raspberries')
console.log(`The index of Raspberries is ${indexOfRasp}`);
let removedFruit = basket.splice(indexOfRasp, 1); //start from 0 till 1 but 1 is not included(excluded) 

console.log('The removed fruit from the basket is', removedFruit);
console.log('New fruit basket is : ',basket);

//Copy an Array
let newShallowBasket = basket.slice() 
console.log('New copy of our fruit basket using slice(): ',newShallowBasket , '\n');

// let build new array
let myFirstBox = ['pen', 'paper'];
let mySecondBox = ['pencil', 'eraser'];

console.log('firstBox include', myFirstBox);
console.log('SecondBox include', mySecondBox);

//to concat two array we use .concat()

console.log('We need all in one array so concat(): ',myFirstBox.concat(mySecondBox));

//we can pass multi parameter to concat() method so lets do it
let myThirdBox = ['books', 'sharpener']
console.log('multi parameter to concat()', myThirdBox);
let newCompleteBox = myFirstBox.concat(mySecondBox, myThirdBox);
console.log('All in one array so concat(): ', newCompleteBox);

console.log('\nLets reverse the array simply using reverse()', newCompleteBox.reverse());

/*
The sort() method sorts the elements of an array in place and returns the sorted array.
The default sort order is ascending, built upon converting the elements into strings, 
then comparing their sequences of UTF-16 code units values.
*/
console.log('\nLets sort the array simply using sort()', newCompleteBox.sort());

console.log('\nLets using join() give parameter of ("-") see what happens: ', newCompleteBox.join('-'));
console.log('\nLets using join() give parameter of (",") see what happens: ', newCompleteBox.join(","));

//Creating a Nested Array
var favMovies = [
    'Begin Again',
    'Soul', 
    ['Matrix', 'Matix Reloaded', 'Matrix Revolutions'],
    ['Frozen', 'Frozen 2', ['Tangled', 'Alladin']]
]
console.log('\nThe Nested array', favMovies);
console.log('The arrays are listed according to the index [2][0]:',favMovies[2][0])

/**Output: 
 * The Nested array [
 'Begin Again',
 'Soul',
 [ 'Matrix', 'Matix Reloaded', 'Matrix Revolutions' ],
 [ 'Frozen', 'Frozen 2', [ 'Tangled', 'Alladin' ] ]
]
The arrays are listed according to the index [2][0]: Matrix
*/

//We can convert the array to string and the split it using .split() method
console.log('\nConvert the array to string and the split():', favMovies.toString().split(","))