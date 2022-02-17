import Filter from './Filter'
import Todo from './Todo'

export default class TodosList {
  #all: Todo[]
  #filter: Filter

  constructor(all: Todo[], filter = Filter.NONE) {
    this.#all = all
    this.#filter = filter ?? Filter.NONE
  }

  get itens() {
    return this.applyFilter(this.#all)
  }

  get quantity() {
    return this.itens.length
  }

  get filter() {
    return this.#filter
  }

  isFilterNone(): boolean {
    return this.filter === Filter.NONE
  }

  isFilterActive(): boolean {
    return this.filter === Filter.ACTIVE
  }

  isFilterCompleted(): boolean {
    return this.filter === Filter.COMPLETED
  }

  private applyFilter(todos: Todo[]): Todo[] {
    if (this.isFilterActive()) return this.applyFilterActive(todos)
    if (this.isFilterCompleted()) return this.applyFilterCompleted(todos)

    return [...todos]
  }

  private applyFilterActive(todos: Todo[]): Todo[] {
    return todos.filter((todo) => todo.active)
  }

  private applyFilterCompleted(todos: Todo[]): Todo[] {
    return todos.filter((todo) => todo.completed)
  }
}
