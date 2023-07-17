//const title = document.getElementById("titlelist");
const divforlist = document.getElementById("divforlist");
const button = document.getElementById("formbtn");
const tasks =[];
class Task {
    constructor(to) {
    this.to = to;
    }
    check(){
        this.isChecked = !this.isChecked;
    }
}

function addNewTask(event) {
    event.preventDefault();
    let input = document.getElementById("forminput").value;
    let uniqueId = "id" + Date.now();

    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<div class="list">
    <p class="list_p" id="` + `${uniqueId}` + `">Задача</p>
    <input class="list_check" type="checkbox">
    </div>`;
    divforlist.appendChild(newDiv);

    let newTask = document.getElementById(`${uniqueId}`);
    newTask.textContent = input;
    const task = new Task (newTask);
    console.log(task);
    tasks.push(task);
    //localStorage.setItem('tasks', JSON.stringify(tasks));
    //console.log(JSON.stringify(tasks));
}

button.addEventListener("click", addNewTask);