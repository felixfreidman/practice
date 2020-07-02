document.addEventListener('click', function(event) {
    let variable = event.target.dataset.id;
    if (variable != undefined) {
        document.getElementById(variable).parentNode.removeChild(document.getElementById(variable));
    }
});

const addButton = document.getElementById("addTask");
const capture = document.querySelector(".capture");
const unorderedList = document.getElementById("ulToHide");
const addingForm = document.querySelector(".adding_form");
const closingButton = document.querySelector(".closingButton");
const closeButton = document.querySelector(".close_btn");
const addTaskButton = document.querySelector(".addTaskButton");
const nameTask = document.getElementById("task_name");
const dateTask = document.getElementById("task_date");
const mark = document.querySelectorAll('input[type="radio"]');
const readyMark = document.getElementById("readyMark");
const notreadyMark = document.getElementById("notreadyMark");
const changeLink = document.querySelectorAll(".change");
const changingForm = document.querySelector(".change_form");

addButton.addEventListener('click', () => {
    capture.classList.toggle('hide');
    unorderedList.classList.toggle('hide');
    addingForm.classList.toggle('hide');
});

closingButton.addEventListener('click', () => {
    capture.classList.toggle('hide');
    unorderedList.classList.toggle('hide');
    addingForm.classList.toggle('hide');
});

addTaskButton.addEventListener("click", () => {
    let newLiElement = document.createElement('li');
    let nameOfTask = nameTask.value;
    let dateOfTask = dateTask.value;
    let statusOfTask = "";


    if (readyMark.checked) {
        statusOfTask = "ready";
        messageStatus = "Выполнено";
    } else if (notreadyMark.checked) {
        statusOfTask = 'not_ready';
        messageStatus = "Не выполнено";
    } else {
        statusOfTask = 'received_response';
        messageStatus = "Получен ответ";
    }
    newLiElement.innerHTML = `
        <div class="name general">${nameOfTask}</div>
        <div class="date general">${dateOfTask}</div>
        <div class="readiness">
            <div class="${statusOfTask} mark">${messageStatus}</div>
        </div>
        <div class="change general"><a href="change_task.html"><span>Изменить</span></a></div>
        <div>
            <button data-id="first" class="delete">
                <span class="cross first-line"></span>
                <span class="cross second-line"></span>
            </button>
        </div>
    `;
    unorderedList.append(newLiElement);
    nameTask.value = "";
    dateTask.value = "";
    capture.classList.toggle('hide');
    unorderedList.classList.toggle('hide');
    addingForm.classList.toggle('hide');
});
for (let i = 0; i < changeLink.length; i++) {
    changeLink[i].addEventListener('click', (event) => {
        console.log(event.target);
        capture.classList.toggle('hide');
        unorderedList.classList.toggle('hide');
        changingForm.classList.toggle('hide');
    });
}


closeButton.addEventListener('click', () => {
    capture.classList.toggle('hide');
    unorderedList.classList.toggle('hide');
    changingForm.classList.toggle('hide');
});