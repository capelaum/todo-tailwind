import Todo from './model/Todo'

function App() {
  let todo: Todo = new Todo(1, 'Learn React')
  todo = todo.alternateStatus()
  todo = todo.alternateStatus()
  todo = todo.alternateStatus()

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
      <span>{todo.id}</span>
      <span>{todo.description}</span>
      <span>{todo.completed ? 'Completed' : 'Ativa'}</span>
    </div>
  )
}

export default App
