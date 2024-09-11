import { projects } from "./projects"
import { showEditProjectForm } from "./displayForm"
import editIconPath from "../image/pencil.svg"
import deleteIconPath from "../image/delete.svg"
import addIconPath from "../image/plus.svg"

export const displayProject = () => {
  const projectMenuContainer = document.querySelector(".projects-container")
  projectMenuContainer.innerHTML = ""

  projects.forEach((currentProject, projectIndex) => {
    projectMenuContainer.innerHTML += `<div class="project">
      <p>${currentProject.name}</p>
      <div class="edit-del-btn">
       <img src="${editIconPath}" alt="Edit" class="edit-project-btn">
       <img src="${deleteIconPath}" alt="Delete" class="del-project-btn">
       <img src="${addIconPath}" alt="Add" class="add-task-btn">
      </div>
    </div>`
  })

  const delButtons = document.querySelectorAll(".del-project-btn")

  delButtons.forEach((delButton, index) => {
    delButton.addEventListener("click", () => {
      projects.splice(index, 1)
      displayProject()
    })
  })

  const editButtons = document.querySelectorAll(".edit-project-btn")
  editButtons.forEach((editButton, index) => {
    editButton.addEventListener("click", () => {
      console.log("hello", projects[index])
      showEditProjectForm(projects[index].id)
    })
  })

  const addButtons = document.querySelectorAll(".add-task-btn")
  addButtons.forEach((addButton) => {
    addButton.addEventListener('click', () => {
      
    })
  })
}
