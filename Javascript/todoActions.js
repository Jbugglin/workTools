const message = document.querySelector('.message')
const tasksContainer = document.querySelector('.tasks')
const ulElement = document.querySelector('ul')
const taskBtn = document.querySelector('.add-btn')

let html = ""
let allTasks = []

taskBtn.addEventListener("click", function () {
    let newTaskInput = document.getElementById("addInputTask");
    const newTask =newTaskInput.value;

    console.log(newTask);
    if (!newTask) return;

    //addTask(newTask);
    newTaskInput.value = "";

});