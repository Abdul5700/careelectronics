import { useEffect, useRef } from 'react'

export function useParallax(speed: number, reverse = false) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let ticking = false
    const update = () => {
      const rect = el.getBoundingClientRect()
      if (rect.bottom > 0 && rect.top < innerHeight) {
        const direction = reverse ? -0.3 : 1
        const mobileSpeed = innerWidth < 768 ? speed * 0.45 : speed
        el.style.transform = `translate3d(0, ${((scrollY * mobileSpeed * direction) % 600).toFixed(1)}px, 0)`
      }
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(update); ticking = true }
    }
    addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => removeEventListener('scroll', onScroll)
  }, [speed, reverse])
  return ref
}
