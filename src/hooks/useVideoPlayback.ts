import { useEffect, useRef } from 'react'

export function useVideoPlayback() {
  const ref = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    const video = ref.current
    if (!video) return
    video.muted = true
    video.playsInline = true
    const play = () => void video.play().catch(() => undefined)
    if (!('IntersectionObserver' in window)) { play(); return }
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting ? play() : video.pause(), { threshold: 0.35 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])
  return ref
}
