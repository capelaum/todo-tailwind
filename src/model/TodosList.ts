import Filter from './Filter'
import Todo from './Todo'

export default class TodosList {
  #all: Todo[]
  #filter: Filter

  constructor(all: Todo[], filter = Filter.NONE) {
    this.#all = all
    this.#filter = filter ?? Filter.NONE
  }

  get itens(): Todo[] {
    return this.applyFilter(this.#all)
  }

  get quantity(): number {
    return this.itens.length
  }

  get filter(): Filter {
    return this.#filter
  }

  createTodo(newTodo: Todo): TodosList {
    const allTodos = [...this.#all]

    allTodos.push(newTodo)
    return new TodosList(allTodos, this.filter)
  }

  updateTodo(todo: Todo): TodosList {
    const allTodos = [...this.#all]

    const index = allTodos.findIndex((t) => t.id === todo.id)

    allTodos[index] = todo
    return new TodosList(allTodos, this.filter)
  }

  deleteCompletedTodos(): TodosList {
    const onlyActives = this.applyFilterActive(this.#all)

    return new TodosList(onlyActives)
  }

  filterActiveTodos(): TodosList {
    if (!this.isFilterActive()) return new TodosList(this.#all, Filter.ACTIVE)

    return this
  }

  filterCompletedTodos(): TodosList {
    if (!this.isFilterCompleted())
      return new TodosList(this.#all, Filter.COMPLETED)

    return this
  }

  removeFilters(): TodosList {
    if (!this.isFilterNone()) return new TodosList(this.#all, Filter.NONE)

    return this
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
