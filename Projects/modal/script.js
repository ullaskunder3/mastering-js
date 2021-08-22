const triggerBtn = document.querySelector('.trigger');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');


function modelToggle() {
    
    triggerBtn.addEventListener('click', function () {
        modal.classList.toggle('open');
    })
    closeBtn.addEventListener('click', function () {
        modal.classList.remove('open');
    })

    window.addEventListener('click', function (event) {
        if(event.target === modal){
            modal.classList.remove('open');
        }
    })
}
modelToggle();


