//Основные переменные
const divforlist = document.getElementById("divforlist");
let button = document.getElementById("formbtn");
let input = document.querySelector('#forminput');
let clearButton = document.querySelector('.clear_btn');
//Задание массива задач
let todoList =[];
//Вытаскиваем данные массива из Local Storage
if(localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    addTodoList();
}
//Слушатель на кнопку добавления задачи, создаем объект массива,
//сохраняем в Local Storage, очищаем поле ввода
button.addEventListener("click",function (event) {
    event.preventDefault();
    if(!input.value) return;
    let newTodo = {
        todo: input.value,
        checked: false,
    };
    todoList.push(newTodo);
    addTodoList();
    localStorage.setItem('todo', JSON.stringify(todoList));
    input.value = '';
});
//Функция добавления задачи в список задач
function addTodoList() {
    let newDiv = "";
    todoList.forEach(function(item,i){
        newDiv += `<div class="list">
        <p class="list_p" id="p_check_${i}">${item.todo}</p>
        <input class="list_check" id="check_${i}" type="checkbox" ${item.checked ? "checked" : ""}>
        </div>`;
        divforlist.innerHTML = newDiv;
    });
}
//Слушатель чекбокса
divforlist.addEventListener('change', function(event){
    let idInput = event.target.getAttribute('id');
    let valueP = divforlist.querySelector('#p_' + idInput).innerHTML;

    todoList.forEach(function (item) {
        if (item.todo === valueP){
            item.checked = !item.checked;
            localStorage.setItem('todo', JSON.stringify(todoList));
        }
    });
});
//Слушатель кнопка очищени спика задач
clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    todoList = [];
    divforlist.innerHTML = 'Нет задач';
})
