document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector ('form')
  form.addEventListener ('submit', function (e) {
    e.preventDefault()
    createList(document.getElementById('new-task-description').value)
  })

  function createList (typedToDo) {
  let createLiTags = document.createElement('li')
  createLiTags.textContent = typedToDo
  createLiTags.className = 'list_of_todos'
 

  document.getElementById('tasks').appendChild(createLiTags)

  
  let createBttn = document.createElement('button')
  createBttn.textContent = 'Delete'

  createLiTags.append(createBttn)
    
  createBttn.addEventListener ('click', () => {
    createLiTags.remove()
  })



}



});


