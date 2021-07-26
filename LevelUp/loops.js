/* syntax:
    for(initial expression, condition, increment expression ){
        //block of code
    }
*/ 

for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${i} = ${i*i}`);
}
/**
 * let i = 0; => i starts from 0
 * i++;       => i should increment on true value 0, 1, 2, 3...10 
 * i <= 10;   => i shoud go less then or equal to 10
 */

console.log('\n*********Same in reverse order***********\n');

for(let i = 10; i >= 0; i--){
    console.log(`${i} x ${i} = ${i*i}`);
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
let savedReverse ="";
for (let i = word.length-1; i >=0; i--) {
    savedReverse += word[i];
    console.log(savedReverse);
}
console.log('The word in reverse order is: ',savedReverse);

console.log('\n*********looping over an array***********\n');

const fruitBasket = ['Apple', 'BlueB', 'BlackB', 'PineA'];

console.log('Array of: ', fruitBasket);
console.log('Types of fruit we have in the basket: ');

for(let i = 0; i < fruitBasket.length; i++){
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