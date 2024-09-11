import { Todo } from "./todo.js"
// import { v4 as uuidv4 } from 'uuid';
export class Project {
  todoList = []
  constructor(name,id) {
    this.name = name,
      this.id = self.crypto.randomUUID();
  }
  addTodo(todo) {
    this.todoList.push(todo)
  }
}

export let projects = []


