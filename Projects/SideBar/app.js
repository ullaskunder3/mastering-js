const navTriggerElm = document.querySelector('.hamburger');
const navElm = document.querySelector('nav');
const contentElm = document.querySelector('.content');
const hamElm = document.getElementsByTagName('span');

function navToggle() {
    navTriggerElm.addEventListener('click', function () {
        navElm.classList.toggle('open')
        contentElm.classList.toggle('shift')
        animateHam();
    })
}
function animateHam() {
    for(let item of hamElm){
        item.classList.toggle('change');
    }
}
navToggle();
