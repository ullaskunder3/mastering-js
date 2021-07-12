// DOM (Docuemnt object on model)
/**
 * DOM defines a platform-neutral model for events, aborting activities, and node trees.
 */

/*The data structure the browser use to represent the document follows this shape.
for each box, there is an object, which can be interact with to find out things such as
what html tags it represents and which boxes and text it contains. 
This representation is called the Document Object Model 
*/
// Trees concept is vital!!!

// adding element to the page
//1. first selecting the element ex: select -> body
const body = document.body

//2. Now there are two choises append and appendChild

//append -> we can append all HTML element && strings as well 
//appendChild -> we can only append element like div, spnn, a, &&
// can only append one element at a time
body.append('My Name is');   

//To create element using createElement()
const div = document.createElement('div');

//Modifiying or adding content to the div using innerText or textContent
// div.textContent = "- slim shady"; 
div.innerText = "-is slim shady"; 

/**
 * the difference is: 
 * 
 * textContent will give out all the content in the tag including indentation
 * innerText will only give you the text inside the tag only if it is visible on the screen
 */
//selecting the div class using querySelector 
//rememeber for class use . && for id use #
const spanEl = document.querySelector('.elementText')

console.log(spanEl.textContent);
console.log(spanEl.innerText);

//you can change the innter html using innerHTML
//uncomment to below line
// div.innerHTML = "<h2>bang</h2>";

//now to add div to page
body.append(div)

//to remove element form html 
div.remove()