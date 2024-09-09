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
let editingIdProject = null

const submitFormBtn = document.querySelector(".project-submit-btn")
const projectNameInput = document.querySelector("#project-name-input")
submitFormBtn.addEventListener("click", () => {
  if (editingIdProject !== null) {
    const projectToEdit = projects.find((p) => p.id === editingIdProject)
    if (projectToEdit) {
      projectToEdit.name = projectNameInput.value
    }
    editingIdProject = null
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
    projectContainer.innerHTML += `<div class="project">
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
    editButtons.forEach((currentEditBtn) => {
      currentEditBtn.addEventListener("click", () => {
        projectNameInput.value = currentProject.name
        openProjectForm()
        editingIdProject = currentProject.id
      })
    })
  })
}

function hideProjectSection() {
  projectContainer.innerHTML = ""
}

// task form
const taskFormContainer = document.querySelector(".add-task-box")
const taskSubmitForm = document.querySelector(".task-submit-btn")
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
cancelTaskBtn.addEventListener('click', () => {
  if (!isProjectFormOpened && isTaskFormOpened) {
    closeTaskForm()
    viewProjectSection()
    displayTodoList()
  }
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

let editingIdTask = null

taskSubmitForm.addEventListener("click", () => {
  const titleTask = document.querySelector("#task-name").value
  const descriptionsTask = document.querySelector("#task-descriptions").value
  const dueDateTask = document.querySelector("#task-due-date").value
  const priorityTask = document.querySelector("#task-priority").value

  if (editingIdTask !== null) {
    projects.forEach((p) => {
      const taskToEdit = p.todoList.find((t) => t.id === editingIdTask)
      if (taskToEdit) {
        taskToEdit.title = titleTask
        taskToEdit.descriptions = descriptionsTask
        taskToEdit.dueDate = dueDateTask
        taskToEdit.priority = priorityTask
      }
    })
  } else {
    const task = new Todo(
      titleTask,
      descriptionsTask,
      dueDateTask,
      priorityTask
    )

    projects.forEach((project) => {
      project.addTodo(task)
    })
  }

  closeTaskForm()
  displayTodoList()
})

function closeTodoList() {
  taskList.innerHTML = ""
}

let taskList = document.querySelector(".todo-list")
const displayTodoList = () => {
  taskList.innerHTML = ""
  projects.forEach((currentProject) => {
    currentProject.todoList.forEach((task) => {
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

      const delTaskButtons = document.querySelectorAll(".del-task-btn")
      delTaskButtons.forEach((currentDelButton, taskIndex) => {
        currentDelButton.addEventListener("click", () => {
          currentProject.todoList.splice(taskIndex, 1)
          displayTodoList()
        })
      })

      const editTaskButtons = document.querySelectorAll(".edit-task-btn")
      editTaskButtons.forEach((currentEditBtn) => {
        currentEditBtn.addEventListener("click", () => {
          openTaskForm()
          closeTodoList()
          editingIdTask = task.id
        })
      })

      let currentTime = new Date().getTime()
      const todayTask = document.querySelector("#today-task")
      const upcomingTask = document.querySelector("#upcoming-task")
      const overduedTask = document.querySelector("overdued-task")

      const dueDateTime = new Date(task.dueDate).getTime()
      if (dueDateTime < currentTime) {
        overduedTask.addEventListener('click', () => {
          console.log('Hi')
        })
      }
    })
  })
}

