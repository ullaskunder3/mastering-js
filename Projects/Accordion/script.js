const accordianItemEl = document.querySelectorAll('.accordian__item');


function accordian() {
    accordianItemEl.forEach(itemEl => {
        let accordianHead = itemEl.firstElementChild
        accordianHead.addEventListener('click', function () {
            let accordianDetail = this.nextElementSibling;
            if(accordianDetail.style.maxHeight){
                accordianDetail.style.maxHeight = null
                this.lastElementChild.innerHTML = "+" 
            }else{
                accordianDetail.style.maxHeight = accordianDetail.scrollHeight+"px"
                this.lastElementChild.innerHTML = "-" 
            }
        })
    });
}
accordian()