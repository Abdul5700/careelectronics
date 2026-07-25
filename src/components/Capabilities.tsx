import { useState, type MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Reveal } from './Reveal'
import { CursorPreview } from './CursorPreview'
import { useCursorPreview } from '../hooks/useCursorPreview'

const images=['/services/led-tv.jpg','/services/lcd-tv.jpg','/services/smart-tv.jpg','/services/android-tv.jpg','/services/google-tv.jpg','/services/oled-tv.avif','/services/qled-tv.jpg','/services/dome-crt-tv.jpg','/services/motherboard-repair.jpg','/services/power-supply-board-repair.jpg','/services/t-con-board-repair.jpg','/services/led-backlight-replacement.jpg','/services/lcd-panel-replacement.jpg','/services/cof-bonding.jpg','/services/speaker-repair.jpg','/services/software-installation.jpg','/services/dead-tv-repair.jpg','/services/no-display-repair.jpg','/services/no-sound-repair.jpg','/services/quality-pre-owned-tvs.jpg']

export function Capabilities() {
  const { preview, show, hide, move } = useCursorPreview()
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true }) as string[]
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="notes" className="bg-[#1E4D33] py-24 sm:py-36 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-[#42A85D] font-medium mb-12">
            {t('services.heading')}
          </p>
        </Reveal>
        <div>
          {items.map((label, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <a
                href="#contact"
                onMouseEnter={() => show(images[i])}
                onMouseLeave={hide}
                onMouseMove={(e: MouseEvent) => move(e.clientX, e.clientY)}
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    if (activeIndex !== i) {
                      e.preventDefault()
                      setActiveIndex(i)
                    }
                  }
                }}
                className={`group flex items-center justify-between border-t ${
                  i === items.length - 1 ? 'border-b' : ''
                } border-white/10 py-6 sm:py-8 hover:border-[#42A85D]/50 ${
                  activeIndex === i ? 'border-[#42A85D]/50' : ''
                } transition-colors duration-500`}
              >
                <span className="flex min-w-0 items-center">
                  <div
                    className={`overflow-hidden transition-all duration-500 sm:hidden ${
                      activeIndex === i ? 'w-14 opacity-100 mr-4' : 'w-0 opacity-0 mr-0'
                    }`}
                  >
                    <img
                      src={images[i]}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-14 w-14 max-w-none shrink-0 rounded-lg object-cover"
                    />
                  </div>
                  <span
                    className={`font-['Space_Grotesk'] text-2xl sm:text-4xl transition-all duration-500 font-light tracking-tighter ${
                      activeIndex === i
                        ? 'text-white translate-x-2'
                        : 'text-white/80 group-hover:text-white group-hover:translate-x-2'
                    }`}
                  >
                    {label}
                  </span>
                </span>
                <span
                  className={`text-xs transition-colors duration-500 ${
                    activeIndex === i ? 'text-[#42A85D]' : 'text-white/30 group-hover:text-[#42A85D]'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
      <CursorPreview {...preview} />
    </section>
  )
}
