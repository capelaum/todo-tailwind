import { MouseEvent, MouseEventHandler, ReactNode } from 'react'

interface ListButtonProps {
  selected?: boolean
  className?: string
  children: ReactNode
  onClick: (e: MouseEventHandler<HTMLButtonElement>) => void
}

export function ListButton({
  selected,
  className,
  children,
  onClick
}: ListButtonProps) {
  const border = selected ? 'border-b-4 border-purple-400' : ''

  return (
    <button
      onClick={onClick}
      className={`${className}
        text-gray-700
        font-semibold
        hover:text-black
        focus:outline-none
        ${border}
      `}
    >
      {children}
    </button>
  )
}
