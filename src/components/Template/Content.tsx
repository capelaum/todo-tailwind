import { ReactNode } from 'react'

interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps) {
  return <div className="flex flex-1 justify-center">{children}</div>
}
