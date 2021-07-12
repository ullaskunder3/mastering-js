/**
 * javascript es6 or ecmascript 6 introduce the spread operator. 
 * The syntax is three dots(...) followed by the array (or the iteratable)
 * it expands the array into individual elements.
 * So it can be used to expand the array in a places 
    * where zero or more elements are expected. 
 */

//1. copying an array

let MyNameis = ['slim', 'shady'];

let myNewName = [...MyNameis];

console.log(myNewName);

//2. Copying one array element to another array

let realFName = ['ullas'];

let iLike = ['mysteries'];

let beLike = [...realFName, ...iLike];

console.log(beLike);

//3. spreading elements together with an individual element

let elements = ['hi', 'hello', 'lee'];

let moreElem = [...elements, 'Bbc', 'news' ];

console.log(moreElem);

//4. Spread elemts on function calls

let prepareFor = ['Vulturous', 'Negative', 'Nepotist']

let functionWhatEv = (para1, para2, para3) => {
    console.log(`prepare your self from: ${para1}, ${para2}, ${para3}...`);
}

functionWhatEv(...prepareFor);