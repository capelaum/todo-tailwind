import { useState } from 'react'

import { List } from './components/List/List'
import { initialTodosList } from './data/mock'

function App() {
  const [todos, setTodos] = useState(initialTodosList)

  return (
    <div
      className={`
      h-screen
      flex flex-col
      justify-center items-center
    bg-gray-600
    `}
    >
      <List
        todos={todos}
        changed={(newTodosList) => {
          setTodos(newTodosList)
        }}
      />
    </div>
  )
}

export default App
