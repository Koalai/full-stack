import { showTaskForm } from "./displayForm"


export const clear = () => {
    const page = document.querySelector('#page')
    page.innerHTML = ''
}

export const displayToday = () => {
    displayTodo(projects.map((curProject) => {
        const todayTask = curProject.todoList.filter(
            (task) =>
              startOfDayTimeStamp(task.dueDate) === startOfDayTimeStamp(currentTime)
          )
        return {
            ...curProject,
            todoList: todayTask
        }
    }))
}
export const displayCompleted = () => {
    displayTodo(projects.map((curProject) => {
        const completedTask = curProject.todoList.filter(
            (task) => task.completed
          )
        return {
            ...curProject,
            todoList: completedTask }
    }))
}
export const displayOverdue = () => {
    displayTodo(projects.map((curProject) => {
        const overdueTask = curProject.todoList.filter(
            (task) =>
              startOfDayTimeStamp(task.dueDate) < startOfDayTimeStamp(currentTime)
          )
        return {
            ...curProject,
            todoList: overdueTask
        }
    }))
}
export const displayUpcoming = () => {
    displayTodo(projects.map((curProject) => {
        const todayTask = curProject.todoList.filter(
            (task) =>
              startOfDayTimeStamp(task.dueDate) > startOfDayTimeStamp(currentTime)
          )
        return {
            ...curProject,
            todoList: todayTask
        }
    }))
}

export const displayTodo = (projects) => {
    clear()
  
    projects.forEach((currentProject) => {
      currentProject.todoList.forEach((task) => {
        // 4 task - task 2 index 1
        const taskCard = document.createElement("div")
        taskCard.classList.add("card")
  
        const checkboxWrapper = document.createElement("div")
        checkboxWrapper.classList.add("card-check")
        const checkbox = document.createElement("input")
        checkbox.type="checkbox"
        checkbox.classList.add("project-check")
        checkbox.addEventListener("change", (event) => {
          const isChecked = event.target.checked
          isTaskCompleted(task.id, isChecked)
        })
        checkboxWrapper.append(checkbox)
  
        const infoWrapper = document.createElement("div")
        infoWrapper.classList.add("card-text")
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
          const foundedIndex = currentProject.todoList.findIndex((curTask) => curTask.id === task.id)
          currentProject.todoList.splice(foundedIndex, 1)
          displayTodo()
        })
  
        const editTaskIcon = document.createElement("img")
        editTaskIcon.src = editIconPath
        editTaskIcon.addEventListener("click", () => {
            showTaskForm(task.id)
        })
        btnWrapper.append(delTaskIcon, editTaskIcon)
        // 4 cai card
        taskCard.append(checkboxWrapper, infoWrapper, btnWrapper)
  
          
          page.append(taskCard)
      })
    })
}