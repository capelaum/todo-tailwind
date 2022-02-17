import { initialTodosList } from './data/mock'
import Todo from './model/Todo'

function App() {
  let todos = initialTodosList
  todos = todos.filterActiveTodos()
  todos = todos.filterCompletedTodos()
  todos = todos.removeFilters()
  todos = todos.deleteCompletedTodos()

  todos = todos.createTodo(Todo.createCompleted(6, 'Lavar o Ka'))
  todos = todos.createTodo(Todo.createActive(7, 'Lavar o pé'))
  todos = todos.deleteCompletedTodos()

  todos = todos.updateTodo(todos.itens[0].alternateStatus())
  todos = todos.updateTodo(todos.itens[2].alternateStatus())

  function renderTodos() {
    return todos.itens.map((todo: Todo) => (
      <div key={todo.id}>
        <span>{todo.id} | </span>
        <span>{todo.description} | </span>
        <span>{todo.completed ? 'Completed' : 'Active'}</span>
      </div>
    ))
  }

  return (
    <div
      className={`
      flex flex-col
      justify-center
      items-center
      text-white
      bg-gradient-to-tr from-purple-500 to-yellow-600
      h-screen
    `}
    >
      {renderTodos()}
    </div>
  )
}

export default App
