export default class Todo {
  #id: number
  #description: string
  #completed: boolean

  constructor(id: number, description: string, completed = false) {
    this.#id = id
    this.#description = description
    this.#completed = completed
  }

  static createActive(id: number, description: string): Todo {
    return new Todo(id, description)
  }

  static createCompleted(id: number, description: string): Todo {
    return new Todo(id, description, true)
  }

  get id(): number {
    return this.#id
  }

  get description(): string {
    return this.#description
  }

  get active(): boolean {
    return !this.#completed
  }

  get completed(): boolean {
    return this.#completed
  }

  alternateStatus(): Todo {
    return this.completed ? this.activate() : this.complete()
  }

  activate(): Todo {
    return Todo.createActive(this.id, this.description)
  }

  complete(): Todo {
    return Todo.createCompleted(this.id, this.description)
  }
}
