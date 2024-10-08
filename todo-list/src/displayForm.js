import { clear } from "./displayTodo"
import { displayProject } from "./displayProject"
import { Project, projects } from "./projects"

import { Todo } from "./todo"
import { displayTodo } from "./displayTodo"

export const showCreateProjectForm = (id) => {
  showProjectForm({ id: "", name: "" })
}

export const showEditProjectForm = (id) => {
  showProjectForm(projects.find((p) => p.id === id))
}

export const showProjectForm = (project) => {
  clear()
  const html = `
      <div class="add-project-box">
          <h2>Create your new project here</h2>
          <form class="add-project-form">
           
              <label for="project-name">Project Name:</label>
              <input
                type="text"
                id="project-name-input"
                placeholder="E.x: Summer workout"
                required
              />

            <div class="project-form-btn">
              <button type="button" class="project-submit-btn">Create</button>
              <button type="button" class="project-cancel-btn">Cancel</button>
            </div>
          </form>
        </div>
    `
  const page = document.querySelector("#page")
  page.innerHTML = html

  page.querySelector("input").value = project.name
  // render input name cu
  // sau do nguoi dung doi input name

  const cancleBtn = page.querySelector("button.project-cancel-btn")
  cancleBtn.addEventListener("click", clear)
  const createBtn = page.querySelector("button.project-submit-btn")
  if (project.id) {
    createBtn.innerHTML = "Update"
  }
  createBtn.addEventListener("click", () => {
    const nameInput = page.querySelector("input")
    if (project.id) {
      const projectIndex = projects.findIndex((p) => p.id === project.id)
      projects[projectIndex].name = page.querySelector("input").value
    } else {
      const project = new Project(nameInput.value)
      projects.push(project)
    }
    // refresh
    clear()
    displayProject()
  })
}

export const showCreateTaskForm = (id) => {
  showTaskForm({ id: "" })
}

export const showEditTaskForm = (taskId) => {
  console.log(taskId)
  const updatedP = projects
    .flatMap((curProject) => curProject.todoList)
    .find((tsk) => tsk.id === taskId)

  console.log(updatedP)

  showTaskForm(updatedP)
}

export const showTaskForm = (task) => {
  clear()
  const html = `
  <div class="add-task-box">
          <h2>Create your new task</h2>
          <form class="add-task-form">
            <label for="task-name">Title:</label>
            <input type="text" id="task-name" placeholder="E.g: Warm up" required/>
            <label for="task-descriptions">Descriptions:</label>
            <textarea name="Descriptions" id="task-descriptions"></textarea>
            <label for="task-due-date">Due date:</label>
            <input type="date" id="task-due-date" required/>
            <label for="task-project-input">Project:</label>
            <select id="task-project-input"></select>
            <label for="task-priority">Priority:</label>
            <select id="task-priority">
              <option class="option-select" value="Low" style="color: lightblue">Low</option>
              <option class="option-select" value="Medium" style="color: lightsalmon">Medium</option>
              <option class="option-select" value="High" style="color: red">High</option>
            </select>
            <div class="task-form-btn">
              <button type="button" class="task-submit-btn">Create</button>
              <button type="button" class="task-cancel-btn">Cancel</button>
            </div>
          </form>
        </div>
  `
  const page = document.querySelector("#page")
  page.innerHTML = html

  if (task.id) {
    console.log(task)
    page.querySelector("#task-name").value = task.title
    page.querySelector("#task-descriptions").value = task.descriptions
    page.querySelector("#task-due-date").value = task.dueDate
    page.querySelector("#task-priority").value = task.priority
  }

  const cancelBtn = page.querySelector(".task-cancel-btn")
  cancelBtn.addEventListener("click", () => {
    clear()
    displayTodo(projects)
  })

  const selectProjectInput = page.querySelector("#task-project-input")
  projects.forEach((project) => {
    selectProjectInput.innerHTML += `<option value="${project.id}">${project.name}</option>`
  })

  const taskPriority = page.querySelector("#task-priority")
  taskPriority.addEventListener("change", () => {
    const priorityOptions = taskPriority.options[taskPriority.selectedIndex]
    const priorityColor = priorityOptions.style.color
    taskPriority.style.color = priorityColor
  })

  const submitBtn = page.querySelector(".task-submit-btn")
  submitBtn.addEventListener("click", () => {
    const titleTask = page.querySelector("#task-name").value
    const descriptionsTask = page.querySelector("#task-descriptions").value
    const dueDateTask = page.querySelector("#task-due-date").value
    const priorityTask = page.querySelector("#task-priority").value
    const selectedProjectId = page.querySelector("#task-project-input").value

    if (task.id) {
      console.log(task)
      projects.forEach((p) => {
        const taskIndex = p.todoList.findIndex((t) => t.id === task.id)
        p.todoList[taskIndex].title = page.querySelector("#task-name").value
        p.todoList[taskIndex].descriptions =
          page.querySelector("#task-descriptions").value
        p.todoList[taskIndex].dueDate =
          page.querySelector("#task-due-date").value
        p.todoList[taskIndex].priority =
          page.querySelector("#task-priority").value
      })
    } else {
      const newTask = new Todo(
        titleTask,
        descriptionsTask,
        dueDateTask,
        priorityTask
      )

      const selectedProject = projects.find((p) => p.id === selectedProjectId)
      if (selectedProject) {
        selectedProject.addTodo(newTask)
      }
    }

    displayTodo(projects)
  })
}
