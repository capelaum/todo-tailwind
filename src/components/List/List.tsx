import Todo from '../../model/Todo'
import TodosList from '../../model/TodosList'
import { ListFooter } from './ListFooter'
import { ListItem } from './ListItem'

interface ListProps {
  todos: TodosList
  changed: (todos: TodosList) => void
}

export function List({ todos, changed }: ListProps) {
  function updateTodo(todo: Todo) {
    const updatedTodo = todo.alternateStatus()
    const newTodoList = todos.updateTodo(updatedTodo)
    changed(newTodoList)
  }

  function renderTodos() {
    return todos.itens.map((todo) => {
      return (
        <ListItem
          key={todo.id}
          value={todo.description}
          completed={todo.completed}
          alternateStatus={() => updateTodo(todo)}
        />
      )
    })
  }

  return (
    <div className="relative flex w-3/5 items-start">
      <ul
        className="absolute mt-4 -top-14 w-full list-none bg-white shadow-lg rounded-lg
          h-fit max-h-full overflow-y-scroll"
      >
        <ListFooter todos={todos} changed={changed} />
        {renderTodos()}
      </ul>
    </div>
  )
}
