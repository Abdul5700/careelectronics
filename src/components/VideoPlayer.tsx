import { memo } from 'react'
import { useVideoPlayback } from '../hooks/useVideoPlayback'

type Props = { src: string; poster: string; className: string; ariaLabel?: string }
export const VideoPlayer = memo(function VideoPlayer({ src, poster, className, ariaLabel }: Props) {
  const ref = useVideoPlayback()
  return <video ref={ref} src={src} poster={poster} muted playsInline preload="metadata" loop className={className} aria-label={ariaLabel} />
})
