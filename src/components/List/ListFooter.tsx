import TodosList from '../../model/TodosList'
import { ListButton } from './ListButton'

interface ListFooterProps {
  todos: TodosList
  changed: (todos: TodosList) => void
}

export function ListFooter({ todos, changed }: ListFooterProps) {
  function renderTodosListQuantity() {
    return (
      <div className="text-gray-500 hidden lg:inline text-sm">
        <span>
          {todos.quantity > 0 ? todos.quantity : ''}{' '}
          {todos.quantity === 0
            ? 'No todos'
            : todos.quantity === 1
            ? 'Todo found'
            : 'Todos found'}
        </span>
      </div>
    )
  }

  function renderFilterButtons() {
    return (
      <div>
        <ListButton
          selected={todos.isFilterNone()}
          onClick={() => changed(todos.removeFilters())}
          className="hidden md:inline"
        >
          All
        </ListButton>
        <ListButton
          selected={todos.isFilterActive()}
          onClick={() => changed(todos.filterActiveTodos())}
          className="mr-4 md:mx-4"
        >
          Active
        </ListButton>
        <ListButton
          selected={todos.isFilterCompleted()}
          onClick={() => changed(todos.filterCompletedTodos())}
        >
          Completed
        </ListButton>
      </div>
    )
  }

  function renderDeleteCompletedTodos() {
    return (
      <div className="mt-5 sm:mt-0">
        <ListButton onClick={() => changed(todos.deleteCompletedTodos())}>
          Delete completed
        </ListButton>
      </div>
    )
  }

  return (
    <li className="flex p-5 flex-col sm:flex-row items-center sm:justify-between justify-center">
      {renderTodosListQuantity()}
      {renderFilterButtons()}
      {renderDeleteCompletedTodos()}
    </li>
  )
}
