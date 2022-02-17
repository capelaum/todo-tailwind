export default class Todo {
  #id: number
  #description: string
  #completed: boolean

  constructor(id: number, description: string, completed = false) {
    this.#id = id
    this.#description = description
    this.#completed = completed
  }

  static createActive(id: number, description: string) {
    return new Todo(id, description)
  }

  static createCompleted(id: number, description: string) {
    return new Todo(id, description, true)
  }

  get id() {
    return this.#id
  }

  get description() {
    return this.#description
  }

  get completed() {
    return this.#completed
  }

  alternateStatus() {
    return this.completed ? this.activate() : this.complete()
  }

  activate() {
    return Todo.createActive(this.id, this.description)
  }

  complete() {
    return Todo.createCompleted(this.id, this.description)
  }
}
