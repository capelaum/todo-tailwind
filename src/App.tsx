import { useState } from 'react'

import { List } from './components/List/List'
import { Content } from './components/Template/Content'
import { Header } from './components/Template/Header'
import { initialTodosList } from './data/mock'

function App() {
  const [todos, setTodos] = useState(initialTodosList)

  return (
    <div className="h-screen flex flex-col bg-gray-300">
      <Header></Header>
      <Content>
        <List
          todos={todos}
          changed={(newTodosList) => {
            setTodos(newTodosList)
          }}
        />
      </Content>
    </div>
  )
}

export default App
