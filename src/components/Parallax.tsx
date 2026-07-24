import type { ReactNode } from 'react'
import { useParallax } from '../hooks/useParallax'

export function Parallax({ speed, reverse = false, className = '', children }: { speed: number; reverse?: boolean; className?: string; children: ReactNode }) {
  const ref = useParallax(speed, reverse)
  return <div ref={ref} className={className}>{children}</div>
}
