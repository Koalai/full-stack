
import "./styles.css";
import { Project } from './projects.js';
import { Todo } from './todo.js';
import toggleDownIcon from '../image/chevron-down.svg';
import toggleRightIcon from '../image/chevron-right.svg'

const projects = [];



const openProjectForm = document.querySelector('#add-project');
const formContainer = document.querySelector('.add-project-box');


openProjectForm.addEventListener('click', () => {
    formContainer.style.display = "block";
})

const cancelBtn = document.querySelector('.cancel-btn');
cancelBtn.addEventListener('click', () => {
    formContainer.style.display = 'none'
})

const submitBtn = document.querySelector('.submit-btn');
submitBtn.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#create-project-input').value;
    const project = new Project(name);
    projects.push(project);
    formContainer.style.display = 'none';
})