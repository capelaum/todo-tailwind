interface SelectionProps {
  value: boolean
}

export function Selection({ value }: SelectionProps) {
  const gradient = value ? 'bg-gradient-to-br from-blue-400 to-purple-500' : ''

  return (
    <div
      className={`
      w-7 h-7 cursor-pointer
      flex justify-center items-center
      border border-gray-400
      text-white
      rounded-full
      ${gradient}
    `}
    >
      {value ? 'x' : ''}
    </div>
  )
}