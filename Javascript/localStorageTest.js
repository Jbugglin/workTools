// Create, Read, Update, Delete...
const noteForm = document.getElementById("note-form")
const noteInput = document.getElementById("note-input")
const noteSubmit = document.getElementById("note-submit")
const notesClear = document.getElementById("list-clear")
const notes = document.getElementById("notes")

let notesStorage = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []

noteForm.addEventListener("submit", (e) => {
    e.preventDefault()
    notesStorage.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notesStorage))
    listBuilder(noteInput.value)
    noteInput.value = ""
})

// Creates li element with a button we'll use to delete li element. 
const listBuilder = (text) => {
    const note = document.createElement("li")
    note.innerHTML = text + '<button onclick="deleteNote(this)">x</button>'
    notes.appendChild(note)
}

// Reads and displays each list item within ul.
const getNotes = JSON.parse(localStorage.getItem("notes"))
getNotes.forEach((note) => {
    listBuilder(note)
})

// This will get the index of the list item to delete and removes it.
const deleteNote = (btn) => {
    let el = btn.parentNode
    const index = [...el.parentElement.children].indexOf(el)
    notesStorage.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesStorage))
    el.remove()
}

