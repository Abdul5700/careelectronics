import { Reveal, WordReveal } from './Reveal'
import { useTranslation } from 'react-i18next'

type CardProps = { number: string; title: string; description: string; items: string[]; cta?: string; checks?: string[] }

function ServiceCard({ number, title, description, items, cta, checks }: CardProps) {
  return <div className="group relative h-full w-full overflow-hidden rounded-[1.25rem] border border-white/15 bg-[radial-gradient(circle_at_top_right,rgba(66,168,93,0.16),transparent_34%),linear-gradient(135deg,#282b28_0%,#171918_52%,#0d0f0e_100%)] p-6 sm:p-8 lg:p-10 shadow-[0_24px_60px_rgba(0,0,0,0.28)] transition-all duration-500 hover:scale-[1.012] hover:shadow-[0_28px_70px_rgba(0,0,0,0.38)]">
    <div className="absolute inset-0 rounded-[1.25rem] border border-[#42A85D]/0 transition-colors duration-500 group-hover:border-[#42A85D]/40" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.24)_100%)]" />
    <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-[#42A85D]/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative flex h-full flex-col">
      <p className="text-xs font-medium tracking-[0.16em] text-[#42A85D]">{number}</p>
      <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold leading-tight tracking-tighter text-white sm:text-3xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">{description}</p>
      <div className="mt-5 h-px w-full bg-gradient-to-r from-[#42A85D]/60 via-white/15 to-transparent" />
      <div className="mt-5 flex flex-wrap gap-2.5">{items.map(item => <span key={item} className="rounded-full border border-[#42A85D]/30 bg-white/[0.07] px-3.5 py-2 text-xs font-medium text-white/90 backdrop-blur-md transition-all duration-300 group-hover:border-[#42A85D]/55 group-hover:bg-[#42A85D]/10 group-hover:shadow-[0_0_18px_rgba(66,168,93,0.12)]">{item}</span>)}</div>
      {checks && <div className="mt-auto grid grid-cols-2 gap-x-4 gap-y-2.5 pt-6 sm:grid-cols-3">{checks.map(check => <span key={check} className="flex items-center gap-2 text-xs font-medium text-white/75"><span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#42A85D]/45 bg-[#42A85D]/10 text-[10px] text-[#8ee3a4]">✓</span>{check}</span>)}</div>}
      {cta && <p className="mt-auto pt-6 text-xs font-medium uppercase tracking-[0.18em] text-white/50"><span className="mr-2 text-[#42A85D]">✦</span>{cta}</p>}
    </div>
  </div>
}

export function Projects(){const {t}=useTranslation();const cards=t('projects.cards',{returnObjects:true}) as CardProps[];return <section id="projects" className="relative pt-12 sm:pt-16 pb-8"><div className="max-w-7xl mx-auto px-6 sm:px-10"><Reveal className="flex items-end justify-between mb-14"><WordReveal as="h2" className="font-['Space_Grotesk'] text-4xl sm:text-5xl font-light tracking-tighter">{t('projects.headingPrefix')} <em className="font-['Instrument_Serif'] italic font-normal">{t('projects.headingEmphasis')}</em></WordReveal><p className="hidden sm:block text-sm text-black/40">{t('projects.experience')}</p></Reveal></div><div className="max-w-7xl mx-auto px-6 sm:px-10 mb-6 sm:mb-10"><div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[3/1] shadow-2xl shadow-black/15"><Reveal panel className="absolute inset-0"><ServiceCard number="01" {...cards[0]}/></Reveal></div></div><div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 mb-6 sm:mb-10"><div className="lg:col-span-7 lg:-mt-4 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/15"><Reveal panel className="absolute inset-0"><ServiceCard number="02" {...cards[1]}/></Reveal></div><div className="lg:col-span-5 lg:mt-24 relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto shadow-2xl shadow-black/15"><Reveal panel className="absolute inset-0"><ServiceCard number="03" {...cards[2]}/></Reveal></div></div><div className="relative overflow-hidden aspect-[16/10] sm:aspect-[3/1]"><Reveal panel className="absolute inset-0"><ServiceCard number="04" {...cards[3]}/></Reveal></div></section>}
