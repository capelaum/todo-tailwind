import { useState } from 'react'

import { Form } from './components/Form/Form'
import { List } from './components/List/List'
import { Header } from './components/Template/Header'
import { Content } from './components/Template/Content'
import { Footer } from './components/Template/Footer'

import Todo from './model/Todo'

import { initialTodosList } from './data/mock'

function App() {
  const [todos, setTodos] = useState(initialTodosList)

  function createNewTodo(newTodo: Todo) {
    setTodos(todos.createTodo(newTodo))
  }

  return (
    <div className="h-screen flex flex-col bg-gray-300 ">
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
      <Footer />
    </div>
  )
}

export default App
