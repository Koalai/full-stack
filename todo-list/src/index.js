import "./styles.css"
import { Project, projects } from "./projects.js"
import { Todo } from "./todo.js"
import toggleDown from "../image/chevron-down.svg"
import toggleRight from "../image/chevron-right.svg"

// project form
// change the view button to view or hide projects
const viewProjectBtn = document.querySelector("#view-project-btn")
let toggleOpenProject = true
let isProjectFormOpened = false
let isTaskFormOpened = false

const container = document.querySelector(".view-projects")
function viewProjectSection() {
  container.innerHTML = ""
  projects.forEach((project) => {
    container.innerHTML += `<div class="project-div">${project.name}</div>`
  })
}

function hideProjectSection() {
  container.innerHTML = ""
}

viewProjectBtn.addEventListener("click", () => {
  if (!isProjectFormOpened && !isTaskFormOpened) {
    if (toggleOpenProject) {
      hideProjectSection()
      toggleOpenProject = false
      viewProjectBtn.src = toggleRight
    } else {
      viewProjectSection()
      toggleOpenProject = true
      viewProjectBtn.src = toggleDown
    }
  }
})

const openProjectBtn = document.querySelector("#add-project-btn")
const projectFormContainer = document.querySelector(".add-project-box")

function closeProject() {
  projectFormContainer.style.display = "none"
  isProjectFormOpened = false
}

function openProject() {
  projectFormContainer.style.display = "block"
  isProjectFormOpened = true
}

openProjectBtn.addEventListener("click", () => {
  if (!isProjectFormOpened && !isTaskFormOpened) {
    openProject()
  }
})

const cancelFormBtn = document.querySelector(".project-cancel-btn")
cancelFormBtn.addEventListener("click", () => {
  closeProject()
})

const projectForm = document.querySelector(".add-project-form")
projectForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const projectName = document.querySelector("#project-name-input")
  const project = new Project(projectName.value)
  projects.push(project)
  viewProjectSection()
  projectName.value = ""
  closeProject()
})

// task form
const taskFormContainer = document.querySelector(".add-task-box")
const taskForm = document.querySelector(".add-task-form")
const addTaskBtn = document.querySelector("#add-task")
const cancelTaskBtn = document.querySelector('.task-cancel-btn')

function openTask() {
  taskFormContainer.style.display = "block";
  isTaskFormOpened = true
}

function closeTask() {
  taskFormContainer.style.display = "none";
  isTaskFormOpened = false
}

addTaskBtn.addEventListener("click", () => {
  if (!isProjectFormOpened && !isTaskFormOpened) {
    openTask();
    displayProjectsToSelect();
  }
})

cancelTaskBtn.addEventListener('click', () => {
  closeTask();
})

const titleTask = document.querySelector("#task-name").value
const descriptionsTask = document.querySelector("#task-descriptions").value
const dueDateTask = document.querySelector("#task-due-date").value
const projectTask = document.querySelector("#task-project")
const priorityTask = document.querySelector("#task-priority").value

function displayProjectsToSelect() {
  projects.forEach((project, index) => {
    projectTask.innerHTML += `<option value="${index}">${project.name}</option>`
  })
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault()

  const todo = new Todo(
    titleTask,
    descriptionsTask,
    dueDateTask,
    projectTask,
    priorityTask
  )
})
