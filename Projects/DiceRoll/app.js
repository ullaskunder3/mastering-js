const diceTrigger = document.querySelector('.dice__trigger')
const diceImg = document.querySelector('.dice__img')
const diceContainer = document.querySelector('.dice');

console.log(diceTrigger, diceImg, diceContainer);

function randomNum() {
    return Math.floor(1 + Math.random() * 6);
}

whichTransitionEvent = () => {
    let t, el = document.createElement("fakeelement");

    let transitions = {
        "transition": "transitionend",
        "OTransition": "oTransitionEnd",
        "MozTransition": "transitionend",
        "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions) {
        if (el.style[t] !== undefined) {
            return transitions[t];
        }
    }
}

let transitionEvent = whichTransitionEvent();
let counter = 1;


diceTrigger.addEventListener('click', (e) => {
    let diceRandomNum = randomNum();
    diceImg.src = `./img/dice-${diceRandomNum}.png`;

    diceImg.classList.toggle('animate');
    diceImg.addEventListener(transitionEvent, transitionEndCallback);
});

transitionEndCallback = (e) => {
    diceImg.removeEventListener(transitionEvent, transitionEndCallback);
    diceImg.classList.remove('animate');
    counter++;
    console.log(e);
}
