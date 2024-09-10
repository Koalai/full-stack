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

function checkProjectName(name) {
  return projects.some((project) => project.name === name)
}

const submitFormBtn = document.querySelector(".project-submit-btn")
const projectNameInput = document.querySelector("#project-name-input")
submitFormBtn.addEventListener("click", () => {
  const isTheProjectExisted = checkProjectName(projectNameInput.value)
  if (isTheProjectExisted && editingIdProject === null) {
    alert("This project is existed!")
    return
  }

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
  if (projects.length <= 0) {
    alert("You must add the project first!")
    closeTaskForm()
  }
})
cancelTaskBtn.addEventListener("click", () => {
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
  taskContainer.innerHTML = ""
}

function isTaskCompleted(taskId, isChecked) {
  projects.forEach((project) => {
    const selectedTask = project.todoList.find((task) => task.id === taskId)
    if (selectedTask) {
      selectedTask.completed = isChecked
      displayTodoList()
    }
  })
}

const taskContainer = document.querySelector(".todo-list")
const completedTaskContainer = document.querySelector(".completed-task-list")
const displayTodoList = () => {
  taskContainer.innerHTML = ""
  completedtaskContainer.innerHTML = ""
  
  projects.forEach((currentProject) => {
    currentProject.todoList.forEach((task) => {
      let taskCard = document.createElement("div")

      taskCard.innerHTML = `<div class="card">
          <div class="card-check">
            <input type="checkbox" class="project-check">
          </div>
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

      if (task.completed) {
        completedTaskContainer.append(taskCard)
      } else {
        taskContainer.append(taskCard)
      }

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

      const checkboxs = taskCard.querySelector(".project-check")

      checkboxs.addEventListener("change", (event) => {
        const isChecked = event.target.checked
        isTaskCompleted(task.id, isChecked)
      })
    })
  })
}

const completedTaskToggle = document.querySelector("#completed-task")
completedTaskToggle.addEventListener("click", () => {
  displayTodoList()
})

// so sanh ngay thang nam
// yyyy/mm/dd : task.dueDate => timestamp
// yyyy/mm/dd : currentTime
// new Date(): thoi gian đúng tới giây

function startOfDayTimeStamp(date) {
  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)
  return startOfDay.getTime()
}

let currentTime = new Date()
// const dueDateTimestamp = dueDate.toTimeStamp.startOFDate.toTimeStamp
// const currentTime = timeStampt.startOFDate.timeStampt
// dueDate = currentDate => startDate
const todaytaskContainer = document.querySelector(".today-task-list")
const displayTodayTask = () => {
  todaytaskContainer.innerHTML = ""
  projects.forEach((currentProject) => {
    const todayTask = currentProject.todoList.filter(
      (task) =>
        startOfDayTimeStamp(task.dueDate) === startOfDayTimeStamp(currentTime)
    )
    todayTask.forEach((t) => {
      let taskCard = document.createElement("div")

      taskCard.innerHTML = `<div class="card">
          <div class="card-text">
            <h4>${t.title}</h4>
            <p>${t.dueDate}</p>
            <p>${t.descriptions}</p>
          </div>
          <div class="card-icons">
            <img src="../image/pencil.svg" alt="Edit" class="edit-task-btn">
            <img src="../image/delete.svg" alt="Delete" class="del-task-btn">
          </div>
          </div>`
      todaytaskContainer.append(taskCard)
      const delTaskButtons = document.querySelectorAll(".del-task-btn")
      delTaskButtons.forEach((currentDelButton, taskIndex) => {
        currentDelButton.addEventListener("click", () => {
          currentProject.todoList.splice(taskIndex, 1)
          displayTodayTask()
        })
      })

      const editTaskButtons = document.querySelectorAll(".edit-task-btn")
      editTaskButtons.forEach((currentEditBtn) => {
        currentEditBtn.addEventListener("click", () => {
          openTaskForm()
          close(todaytaskContainer)
          editingIdTask = task.id
        })
      })
    })
  })
}
const upcomingtaskContainer = document.querySelector(".upcoming-task-list")
const displayUpcomingTask = () => {
  upcomingtaskContainer.innerHTML = ""
  projects.forEach((currentProject) => {
    const upcomingTask = currentProject.todoList.filter(
      (task) =>
        startOfDayTimeStamp(task.dueDate) > startOfDayTimeStamp(currentTime)
    )
    upcomingTask.forEach((t) => {
      let taskCard = document.createElement("div")

      taskCard.innerHTML = `<div class="card">
          <div class="card-text">
            <h4>${t.title}</h4>
            <p>${t.dueDate}</p>
            <p>${t.descriptions}</p>
          </div>
          <div class="card-icons">
            <img src="../image/pencil.svg" alt="Edit" class="edit-task-btn">
            <img src="../image/delete.svg" alt="Delete" class="del-task-btn">
          </div>
          </div>`
      upcomingtaskContainer.append(taskCard)
      const delTaskButtons = document.querySelectorAll(".del-task-btn")
      delTaskButtons.forEach((currentDelButton, taskIndex) => {
        currentDelButton.addEventListener("click", () => {
          currentProject.todoList.splice(taskIndex, 1)
          displayUpcomingTask()
        })
      })

      const editTaskButtons = document.querySelectorAll(".edit-task-btn")
      editTaskButtons.forEach((currentEditBtn) => {
        currentEditBtn.addEventListener("click", () => {
          openTaskForm()
          close(upcomingtaskContainer)
          editingIdTask = task.id
        })
      })
    })
  })
}
const overduedtaskContainer = document.querySelector(".overdued-task-list")
const displayOverduedTask = () => {
  overduedtaskContainer.innerHTML = ""
  projects.forEach((currentProject) => {
    const overduedTask = currentProject.todoList.filter(
      (task) =>
        startOfDayTimeStamp(task.dueDate) < startOfDayTimeStamp(currentTime)
    )
    overduedTask.forEach((t) => {
      let taskCard = document.createElement("div")

      taskCard.innerHTML = `<div class="card">
          <div class="card-text">
            <h4>${t.title}</h4>
            <p>${t.dueDate}</p>
            <p>${t.descriptions}</p>
          </div>
          <div class="card-icons">
            <img src="../image/pencil.svg" alt="Edit" class="edit-task-btn">
            <img src="../image/delete.svg" alt="Delete" class="del-task-btn">
          </div>
          </div>`
      overduedtaskContainer.append(taskCard)
      const delTaskButtons = document.querySelectorAll(".del-task-btn")
      delTaskButtons.forEach((currentDelButton, taskIndex) => {
        currentDelButton.addEventListener("click", () => {
          currentProject.todoList.splice(taskIndex, 1)
          displayOverduedTask()
        })
      })

      const editTaskButtons = document.querySelectorAll(".edit-task-btn")
      editTaskButtons.forEach((currentEditBtn) => {
        currentEditBtn.addEventListener("click", () => {
          openTaskForm()
          close(overduedtaskContainer)
          editingIdTask = task.id
        })
      })
    })
  })
}

function close(task) {
  task.innerHTML = ""
}

const todayTaskToggle = document.querySelector("#today-task")
todayTaskToggle.addEventListener("click", () => {
  displayTodayTask()
  closeTodoList()
  close(upcomingtaskContainer)
  close(overduedtaskContainer)
})

const upcomingTaskToggle = document.querySelector("#upcoming-task")
upcomingTaskToggle.addEventListener("click", () => {
  closeTodoList()
  displayUpcomingTask()
  close(todaytaskContainer)
  close(overduedtaskContainer)
})

const overduedTaskToggle = document.querySelector("#overdued-task")
overduedTaskToggle.addEventListener("click", () => {
  closeTodoList()
  displayOverduedTask()
  close(upcomingtaskContainer)
  close(todaytaskContainer)
})

const todoListContainer = document.querySelector("#all-task")
todoListContainer.addEventListener("click", () => {
  displayTodoList()
  close(upcomingtaskContainer)
  close(todaytaskContainer)
  close(overduedtaskContainer)
})
