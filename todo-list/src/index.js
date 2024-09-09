import "./styles.css"
import { Project, projects } from "./projects.js"
import { Todo } from "./todo.js"
import toggleDown from "../image/chevron-down.svg"
import toggleRight from "../image/chevron-right.svg"

// project form
// change the view button to view or hide projects

const viewProjectBtn = document.querySelector("#view-project-btn")
let toggleopenProjectForm = true
let isProjectFormOpened = false
let isTaskFormOpened = false

viewProjectBtn.addEventListener("click", () => {
  if (!isProjectFormOpened && !isTaskFormOpened) {
    if (toggleopenProjectForm) {
      hideProjectSection()
      toggleopenProjectForm = false
      viewProjectBtn.src = toggleRight
    } else {
      viewProjectSection()
      toggleopenProjectForm = true
      viewProjectBtn.src = toggleDown
    }
  }
})

const openProjectFormBtn = document.querySelector("#add-project-btn")
const projectFormContainer = document.querySelector(".add-project-box")

function closeProjectForm() {
  projectFormContainer.style.display = "none"
  isProjectFormOpened = false
}

function openProjectForm() {
  projectFormContainer.style.display = "block"
  isProjectFormOpened = true
}

openProjectFormBtn.addEventListener("click", () => {
  if (!isProjectFormOpened && !isTaskFormOpened) {
    openProjectForm()
  }
})

const cancelFormBtn = document.querySelector(".project-cancel-btn")
cancelFormBtn.addEventListener("click", () => {
  closeProjectForm()
})
let editingIndex = null;

const submitFormBtn = document.querySelector(".project-submit-btn")
const projectNameInput = document.querySelector("#project-name-input")
submitFormBtn.addEventListener("click", () => {
  if (editingIndex !== null) {
    projects[editingIndex].name = projectNameInput.value;
    editingIndex = null
  } else {
    const project = new Project(projectNameInput.value)
      projects.push(project)
  }
  viewProjectSection()
  projectNameInput.value = ""
  closeProjectForm()
})

const projectContainer = document.querySelector(".projects-container") // project container
function viewProjectSection() {
  projectContainer.innerHTML = ""
  projects.forEach((currentProject, projectIndex) => {
    projectContainer.innerHTML += `<div class="project" data-id="${currentProject.name}">
      <p>${currentProject.name}</p>
      <div class="edit-del-btn">
       <img src="../image/pencil.svg" alt="Edit" class="edit-project-btn">
       <img src="../image/delete.svg" alt="Delete" class="del-project-btn">
      </div>
    </div>`

    const delButtons = document.querySelectorAll(".del-project-btn")

    delButtons.forEach((currentDelButton, projectIndex) => {
      currentDelButton.addEventListener("click", () => {
        projects.splice(projectIndex, 1)
        viewProjectSection()
      })
    })

    const editButtons = document.querySelectorAll(".edit-project-btn")
    editButtons.forEach((currentEditBtn, currentProjectIndex) => {
      currentEditBtn.addEventListener("click", () => {
        projectNameInput.value = currentProject.name
        openProjectForm()
        editingIndex = currentProjectIndex
      })
    })
  })
}

function hideProjectSection() {
  projectContainer.innerHTML = ""
}

// task form
const taskFormContainer = document.querySelector(".add-task-box")
const taskForm = document.querySelector(".add-task-form")
const addTaskBtn = document.querySelector("#add-task")
const cancelTaskBtn = document.querySelector(".task-cancel-btn")

function openTaskForm() {
  taskFormContainer.style.display = "block"
  isTaskFormOpened = true
}

function closeTaskForm() {
  taskFormContainer.style.display = "none"
  isTaskFormOpened = false
}

addTaskBtn.addEventListener("click", () => {
  if (!isProjectFormOpened && !isTaskFormOpened) {
    openTaskForm()
    displayProjectsToSelect()
  }
})

cancelTaskBtn.addEventListener("click", () => {
  closeTaskForm()
})

const projectTask = document.querySelector("#task-project")
function displayProjectsToSelect() {
  projects.forEach((project, projectIndex) => {
    projectTask.innerHTML += `<option value="${projectIndex}">${project.name}</option>`
  })
}

// priority color
const taskPriority = document.querySelector("#task-priority")

function updateColorPriority() {
  let priorityOptions = taskPriority.options[taskPriority.selectedIndex]
  let priorityColor = priorityOptions.style.color

  taskPriority.style.color = priorityColor
}

updateColorPriority()
taskPriority.addEventListener("change", updateColorPriority)

// submit task
taskForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const title = document.querySelector("#task-name").value
  const descriptions = document.querySelector("#task-descriptions").value
  const dueDate = document.querySelector("#task-due-date").value
  const priority = document.querySelector("#task-priority").value

  const task = new Todo(title, descriptions, dueDate, priority)

  projects.forEach((project) => {
    project.addTodo(task)
  })

  closeTaskForm()
  displayTodoList()
  log()
})

let taskList = document.querySelector(".todo-list")
const displayTodoList = () => {
  taskList.innerHTML = ""
  projects.forEach((project) => {
    project.todoList.forEach((task) => {
      let taskCard = document.createElement("div")

      taskCard.innerHTML = `<div class="card">
          <div class="card-text">
            <h4>${task.title}</h4>
            <p>${task.dueDate}</p>
            <p>${task.descriptions}</p>
          </div>
          <div class="card-icons">
            <img src="../image/pencil.svg" alt="Edit" class="edit-task-btn">
            <img src="../image/delete.svg" alt="Delete" class="del-task-btn">
          </div>
          </div>`

      taskList.append(taskCard)
    })
  })
}

// let currentTime = new Date().getTime()
// const todayTask = document.querySelector('#today-task');
// todayTask.addEventListener('click', () => {
//   projects.forEach(project => {
//     project.todoList.forEach(task => {
//       let givenTime = new Date(task.dueDate).getTime();
//       if (givenTime > currentTime) {
//         alert("upcoming")
//       } else if (givenTime < currentTime) {
//         alert("overdued")
//       } else {
//         alert("today")
//       }
//     })
//   })
// })
