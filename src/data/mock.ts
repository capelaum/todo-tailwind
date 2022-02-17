import Filter from '../model/Filter'
import Todo from '../model/Todo'
import TodosList from '../model/TodosList'

export const initialTodos: Todo[] = [
  Todo.createActive(1, 'Learn React'),
  Todo.createCompleted(2, 'Learn Next'),
  Todo.createActive(3, 'Learn TailwindCSS')
]

export const initialTodosList: TodosList = new TodosList(
  initialTodos,
  Filter.NONE
)
