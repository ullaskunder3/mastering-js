const inputElm = document.querySelector('.todo__input');
const listsElm = document.querySelector('.todo__list');

const itemElm = document.querySelectorAll('.todo__item');

function creatingListItem(event, className) {
    const liElement = document.createElement('li');

    if ((!(event.target.value === " ")) && event.target.value.length > 2) {
        const listContent = document.createTextNode(event.target.value.trim());

        liElement.appendChild(listContent)
        
        // listsElm.appendChild(liElement);
        listsElm.insertBefore(liElement, listsElm.childNodes[0]);
        liElement.classList.add(className)
        event.target.value = "";
    }
}


function performTask() {
    inputElm.addEventListener("keypress", function (e) {
        if (e.keyCode === 13) {
            creatingListItem(e, "todo__item")
        }
    })
}

function taskDone() {
    listsElm.addEventListener('click', function (e) {
        // e.target.classList.toggle('done');
        if (e.target.classList.contains('todo__item')) {
            e.target.classList.toggle('done');
        }
    })
}

performTask();
taskDone()