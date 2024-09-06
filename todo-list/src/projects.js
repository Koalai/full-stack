import { Todo } from "./todo.js"

export class Project {
  todoList = []
  constructor(name) {
    this.name = name
  }
  addTodo(todo) {
    this.todoList.push(todo)
  }
}

export const projects = [];


