import { initialTodosList } from './data/mock'
import Todo from './model/Todo'

function App() {
  let todos = initialTodosList
  todos = todos.filterActiveTodos()
  todos = todos.filterCompletedTodos()
  todos = todos.removeFilters()
  todos = todos.deleteCompletedTodos()

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
