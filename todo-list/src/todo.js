

export class Todo {
    constructor(title, descriptions, dueDate, priority, id, completed = false) {
        this.title = title;
        this.descriptions = descriptions;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = self.crypto.randomUUID()
        this.completed = completed
    }
}