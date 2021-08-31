function outerFunc(fParam) {
    return function (sParam) {
        console.log('The Value of fParam and sParam is ', fParam, sParam);
        return fParam + sParam;
    }
}

// function outerFunc(fParam) {
//     return function inFun(sParam) {
//         return fParam + sParam;
//     }
// }

// function outerFunc(fParam) {
//     return (sParam) => fParam + sParam;
// }

const funVar = outerFunc(2);

console.log('funVar is a =>', typeof funVar);
console.log('Specifically an =>', funVar);
console.log(funVar(2));
