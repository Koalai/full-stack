import "./styles.css"
import { Project } from "./projects.js"
import { Todo } from "./todo.js"
import toggleDown from "../image/chevron-down.svg"
import toggleRight from "../image/chevron-right.svg"

const projects = []

const openProjectForm = document.querySelector("#add-project-btn")
const formContainer = document.querySelector(".add-project-box")

openProjectForm.addEventListener("click", () => {
  formContainer.style.display = "block"
})

const cancelBtn = document.querySelector(".cancel-btn")
cancelBtn.addEventListener("click", () => {
  formContainer.style.display = "none"
})

const form = document.querySelector(".add-project-form")
form.addEventListener("submit", (event) => {
  event.preventDefault()

  const name = document.querySelector("#project-name-input")
  const project = new Project(name.value)
  projects.push(project)
  viewProjects()
  formContainer.style.display = "none"
  name.value = ""
})

function viewProjects() {
  const container = document.querySelector(".view-projects")
  container.innerHTML = ""
  projects.forEach((project) => {
    container.innerHTML += `<div class="project-div">${project.name}</div>`
  })
}

function hideProjects() {
  const container = document.querySelector(".view-projects")
  container.innerHTML = ""
}

// change the view button to view or hide projects
const viewProjectBtn = document.querySelector("#view-project-btn")
let toggleOpen = true


viewProjectBtn.addEventListener("click", () => {
  if (toggleOpen) {
    viewProjectBtn.src = toggleRight
    hideProjects()
      toggleOpen = false
  } else {
    viewProjectBtn.src = toggleDown
      viewProjects()
      toggleOpen = true
      }
})
