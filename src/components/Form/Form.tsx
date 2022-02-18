import { useState } from 'react'
import Todo from '../../model/Todo'

interface FormProps {
  createNewTodo: (todo: Todo) => void
}

export function Form({ createNewTodo }: FormProps) {
  const [description, setDescription] = useState('')

  function handleCreateNewTodo() {
    if (description.trim() !== '') {
      const newTodo = Todo.createActive(Math.random(), description)
      createNewTodo(newTodo)
      setDescription('')
    }
  }

  return (
    <div className="flex flex-1 justify-center">
      <input
        placeholder="Create new todo"
        type="text"
        name="todo"
        id="todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyUp={(e) => e.key === 'Enter' && handleCreateNewTodo()}
        className={`
          w-1/2 px-3 py-2 text-sm
          border-2 border-purple-300 rounded-lg focus:outline-none
          focus:ring-2 focus:ring-purple-600
        `}
      />
      <button
        onClick={handleCreateNewTodo}
        className="ml-3 bg-purple-700 text-white text-xl px-5 py-2 rounded-lg focus:outline-none "
      >
        +
      </button>
    </div>
  )
}
