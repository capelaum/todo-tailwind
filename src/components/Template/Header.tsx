import { ReactNode } from 'react'

interface HeaderProps {
  children?: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <div className="flex h-1/3 bg-img-todos bg-no-repeat bg-cover">
      <div
        className="h-full flex flex-1 justify-center items-center
        bg-gradient-to-r from-purple-600 via-transparent to-blue-600"
      >
        {children}
      </div>
    </div>
  )
}
