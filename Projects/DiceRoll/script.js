const btn = document.querySelector('.btn')
const diceContainer = document.querySelector('.dice')

function hasImg() {
    let addRemove = ['add', 'remove'] ;
    let [add, remove] = addRemove;
    if (diceContainer.firstChild) {
        add = diceContainer.removeChild(diceContainer.firstChild)
    }else{
        remove = diceContainer.appendChild(imgElm)
    }
    return addRemove;
}

function randomDice() {

    const RandomNum = Math.floor(1 + Math.random() * 7);

    const imgElm = document.createElement('img');
    console.log('img: elem', imgElm);

    imgElm.src = `./img/dice-${RandomNum}.png`;

    // if(diceContainer.firstChild){
    //     console.log('worked');
    //     diceContainer.removeChild(diceContainer.firstChild);
    // }else{
    //     console.log('damm');
    //     diceContainer.appendChild(imgElm);
    // }
    if (!(diceContainer.firstChild)) {
        console.log('worked');
        diceContainer.appendChild(imgElm);
    } else {
        diceContainer.removeChild(diceContainer.firstChild);
        console.log('damm');
    }
}
btn.addEventListener('click', randomDice)

console.log(hasImg(0));