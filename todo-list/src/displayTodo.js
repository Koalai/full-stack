import { showEditTaskForm } from "./displayForm"
import { projects } from "./projects"
import editIconPath from "../image/pencil.svg"
import deleteIconPath from "../image/delete.svg"

export const clear = () => {
  const page = document.querySelector("#page")
  page.innerHTML = ""
}

const currentTime = new Date()

const startOfDayTimeStamp = (date) => {
  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)
  return startOfDay.getTime()
}

export const displayToday = () => {
  displayTodo(
    projects.map((curProject) => {
      const todayTask = curProject.todoList.filter(
        (task) =>
          startOfDayTimeStamp(task.dueDate) === startOfDayTimeStamp(currentTime)
      )
      return {
        ...curProject,
        todoList: todayTask,
      }
    })
  )
}
export const displayCompleted = () => {
  displayTodo(
    projects.map((curProject) => {
      const completedTask = curProject.todoList.filter((task) => task.completed)
      return {
        ...curProject,
        todoList: completedTask,
      }
    })
  )
}
export const displayOverdue = () => {
    const updatedP = projects.map((curProject) => {
        const overdueTask = curProject.todoList.filter(
          (task) =>
            startOfDayTimeStamp(task.dueDate) < startOfDayTimeStamp(currentTime)
        )
        return {
          ...curProject,
          todoList: overdueTask,
        }
    })
    console.log(updatedP)
    displayTodo(updatedP)
}
export const displayUpcoming = () => {
  displayTodo(
    projects.map((curProject) => {
      const todayTask = curProject.todoList.filter(
        (task) =>
          startOfDayTimeStamp(task.dueDate) > startOfDayTimeStamp(currentTime)
      )
      return {
        ...curProject,
        todoList: todayTask,
      }
    })
  )
}

export const displayTodo = (projects) => {
  clear()

  const priorityColorMap = {
    Low: 'lightblue',
    Medium: 'lightsalmon',
    High: 'red'
  };

  const page = document.querySelector("#page")
  projects.forEach((currentProject) => {
    currentProject.todoList.forEach((task) => {
      // 4 task - task 2 index 1
      const taskCard = document.createElement("div")
      taskCard.classList.add("card")
      
      const priorityColor = priorityColorMap[task.priority]
      
      

      const checkboxWrapper = document.createElement("div")
      checkboxWrapper.classList.add("card-check")
      const checkbox = document.createElement("input")
      checkbox.type = "checkbox"
      checkbox.classList.add("project-check")
      checkbox.addEventListener("change", (event) => {
        const isChecked = event.target.checked

        projects.forEach((p) => {
          const selectedTask = p.todoList.find((t) => t.id === task.id)
          if (selectedTask) {
            selectedTask.completed = isChecked
          }
        })
      })
      checkboxWrapper.append(checkbox)

      const infoWrapper = document.createElement("div")
      infoWrapper.classList.add("card-text")
      infoWrapper.style.color = priorityColor;
      infoWrapper.innerHTML = `
              <h4>${task.title}</h4>
              <p>${task.dueDate}</p>
              <p>${task.descriptions}</p>
        `

      const btnWrapper = document.createElement("div")
      btnWrapper.classList.add("card-icons")

      const delTaskIcon = document.createElement("img")
      delTaskIcon.src = deleteIconPath

      delTaskIcon.addEventListener("click", () => {
        const foundedIndex = currentProject.todoList.findIndex(
          (curTask) => curTask.id === task.id
        )
        currentProject.todoList.splice(foundedIndex, 1)
        displayTodo(projects)
      })

      const editTaskIcon = document.createElement("img")
      editTaskIcon.src = editIconPath
      editTaskIcon.addEventListener("click", () => {
        showEditTaskForm(task.id)

      })
      btnWrapper.append(delTaskIcon, editTaskIcon)
      // 4 cai card
      taskCard.append(checkboxWrapper, infoWrapper, btnWrapper)

      page.append(taskCard)
    })
  })
}
