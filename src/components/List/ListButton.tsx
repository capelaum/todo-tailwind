import { MouseEvent, ReactNode } from 'react'

interface ListButtonProps {
  selected?: boolean
  className?: string
  children: ReactNode
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export function ListButton({
  selected,
  className,
  children,
  onClick
}: ListButtonProps) {
  const border = selected ? 'border-b-4 border-purple-400' : ''
  const text = selected ? 'text-black' : 'text-gray-700'

  return (
    <button
      onClick={onClick}
      className={`${className}
        font-semibold
        hover:text-black
        focus:outline-none
        text-sm
        ${text}
        ${border}
      `}
    >
      {children}
    </button>
  )
}
