import { useState } from 'react'

export function useCursorPreview() {
  const [preview, setPreview] = useState({ src: '', x: 0, y: 0, visible: false })
  const show = (src: string) => setPreview(p => ({ ...p, src, visible: true }))
  const hide = () => setPreview(p => ({ ...p, visible: false }))
  const move = (x: number, y: number) => setPreview(p => ({ ...p, x: x + 28, y: y - 80 }))
  return { preview, show, hide, move }
}
