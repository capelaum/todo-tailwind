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
          {todos.quantity}{' '}
          {todos.quantity === 0
            ? 'Nenhuma tarefa encontrada'
            : todos.quantity === 1
            ? 'Tarefa encontrada'
            : 'Tarefas encontradas'}
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
          Todas
        </ListButton>
        <ListButton
          selected={todos.isFilterActive()}
          onClick={() => changed(todos.filterActiveTodos())}
          className="mr-4 md:mx-4"
        >
          Ativas
        </ListButton>
        <ListButton
          selected={todos.isFilterCompleted()}
          onClick={() => changed(todos.filterCompletedTodos())}
        >
          Concluídas
        </ListButton>
      </div>
    )
  }

  function renderDeleteCompletedTodos() {
    return (
      <div className="mt-5 sm:mt-0">
        <ListButton onClick={() => changed(todos.deleteCompletedTodos())}>
          Excluir concluídas
        </ListButton>
      </div>
    )
  }

  return (
    <li className="flex p-5 flex-col sm:flex-row items-center sm:justify-between">
      {renderTodosListQuantity()}
      {renderFilterButtons()}
      {renderDeleteCompletedTodos()}
    </li>
  )
}
