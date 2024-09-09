

export class Todo {
    constructor(title, descriptions, dueDate, priority, id) {
        this.title = title;
        this.descriptions = descriptions;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = self.crypto.randomUUID()
    }
}