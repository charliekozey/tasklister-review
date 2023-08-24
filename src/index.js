document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form")
  // Add submit event listener to form 
  newTaskForm.addEventListener("submit", e => {   // Note the event type: "submit" is for forms
    e.preventDefault()  // Stop the form from refreshing the page
    createNewTask(e)    // Run the createNewTask function
    e.target.reset()    // Clear the input field
  })

});

function createNewTask(e) {
  const newTask = document.createElement("li")
  const taskList = document.getElementById("tasks")
  const deleteBtn = document.createElement("button")
  
  deleteBtn.textContent = "X"
  newTask.appendChild(deleteBtn)

  deleteBtn.addEventListener("click", e => {
    // e.target is the button because that's the element we're adding the event listener to
    // We want to remove its parent, the li, so we use .parentnode
    e.target.parentNode.remove()
  })

  // We can access individual inputs in a form by their name, since they are nested under the form element
  // Check out index.html to find or assign a name attribute to the element
  // We use bracket notation and write the name as a string here because of the hyphens
  newTask.textContent = e.target["new-task-description"].value
  taskList.append(newTask)
}