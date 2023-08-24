document.addEventListener("DOMContentLoaded", () => {
  
  // ADD SUBMIT EVENT LISTENER
  // grab the form
  const newTaskForm = document.getElementById("create-task-form")
  // add submit event listener to form
  newTaskForm.addEventListener("submit", e => {
    e.preventDefault()
    createNewTask(e)
    e.target.reset()
  })
  // e.preventDefault()
  // create a new li
  // create container for the new li (p or div?)
  // append li to container
  

  // STRETCH
  // add delete button and functionality
});

function createNewTask(e) {
  const newTask = document.createElement("li")
  const taskList = document.getElementById("tasks")
  const deleteBtn = document.createElement("button")
  
  deleteBtn.textContent = "X"
  newTask.appendChild(deleteBtn)

  deleteBtn.addEventListener("click", e => {
    // .remove() the new list item (.parentNode)
    e.target.parentNode.remove()
  })

  newTask.textContent = e.target["new-task-description"].value
  taskList.append(newTask)
}

