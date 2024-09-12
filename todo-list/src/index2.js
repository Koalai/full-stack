import { showCreateProjectForm, showCreateTaskForm } from "./displayForm"
import './styles.css'
import { displayCompleted, displayOverdue, displayUpcoming, displayToday, displayTodo} from "./displayTodo"

const addProjectBtn = document.querySelector('#add-project-btn')
addProjectBtn.addEventListener('click', showCreateProjectForm)

const addTaskBtn = document.querySelector('#add-task')
addTaskBtn.addEventListener('click', showCreateTaskForm)
  
const todayTaskBtn = document.querySelector('#today-task')
todayTaskBtn.addEventListener('click', displayToday)

const upcomingTaskBtn = document.querySelector('#upcoming-task')
upcomingTaskBtn.addEventListener('click', displayUpcoming)

const overduedTaskBtn = document.querySelector('#overdued-task')
overduedTaskBtn.addEventListener('click', displayOverdue)

const completedTaskBtn = document.querySelector('#completed-task')
completedTaskBtn.addEventListener('click', displayCompleted)

const todoListBtn = document.querySelector('#all-task')
todoListBtn.addEventListener('click', displayTodo)