const message = document.querySelector('.message')
const tasksContainer = document.querySelector('.tasks')
const ulElement = document.querySelector('ul')
const taskBtn = document.querySelector('.add-btn')

let html = ""
let allTasks = []

//Add event listener to adding the task to the ul element
taskBtn.addEventListener("click", function () {
    let newTaskInput = document.getElementById("addInputTask")
    const newTask =newTaskInput.value

    console.log(newTask)
    if (!newTask) return

    addTask(newTask)
    newTaskInput.value = ""
});

function addTask(newTask) {
    let task = document.createElement('li')
    task.innerHTML = newTask

    // Create and append an Edit and Delete button on the 
    // Li elements. Then append the Li element to the Ul.
    const buttonContainer = document.createElement('div')
    buttonContainer.setAttribute("class", "buttonContainer")
    const editBtn = document.createElement('button')
    editBtn.innerHTML = "Edit"
    editBtn.setAttribute("class", "editBtn")
    
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("class", "deleteBtn")
    
    //This appends the edit and delete button to the div
    buttonContainer.append(editBtn, deleteBtn)
    //Append the div to the li element
    task.appendChild(buttonContainer)
    //append the li element to the ul element.
    ulElement.appendChild(task)
    
    deleteBtn.addEventListener("click", function() {
        let deleteTask = document.querySelector("li")
        deleteTask.remove(task)
    })
    
}
