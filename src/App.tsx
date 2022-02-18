import { useState } from 'react'

import { List } from './components/List/List'
import { Content } from './components/Template/Content'
import { Header } from './components/Template/Header'
import { Form } from './components/Form/Form'

import Todo from './model/Todo'

import { initialTodosList } from './data/mock'

function App() {
  const [todos, setTodos] = useState(initialTodosList)

  function createNewTodo(newTodo: Todo) {
    setTodos(todos.createTodo(newTodo))
  }

  return (
    <div className="h-screen flex flex-col bg-gray-300 relative">
      <Header>
        <Form createNewTodo={createNewTodo} />
      </Header>
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
