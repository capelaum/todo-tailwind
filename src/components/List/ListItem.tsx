import { Selection } from './Selection'

interface ListItemProps {
  value: string
  completed: boolean
  alternateStatus: () => void
}

export function ListItem({ value, completed, alternateStatus }: ListItemProps) {
  const textStyle = completed ? 'line-through text-gray-300' : 'text-gray-500'

  return (
    <li
      onClick={alternateStatus}
      className={`
      flex items-center
      text-black text-md p-5
      border-b border-gray-400
      cursor-pointer

    `}
    >
      <Selection value={completed} />
      <span className={`ml-5 font-light ${textStyle}`}>{value}</span>
    </li>
  )
}
