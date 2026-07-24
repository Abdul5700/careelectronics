import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const languages = [{ code: 'en', label: 'English' }, { code: 'kn', label: 'ಕನ್ನಡ' }]

export function LanguageGate() {
  const { t, i18n } = useTranslation()
  const [selected, setSelected] = useState(() => localStorage.getItem('care-electronics-language-selected') === 'true')
  if (selected) return null
  const choose = (code: string) => { localStorage.setItem('care-electronics-language-selected', 'true'); localStorage.setItem('care-electronics-language', code); void i18n.changeLanguage(code); setSelected(true) }
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FBFAF7] p-6"><div className="w-full max-w-md rounded-3xl border border-[#1E4D33]/10 bg-white p-8 text-center shadow-2xl shadow-[#1E4D33]/10 sm:p-12"><p className="text-xs font-medium uppercase tracking-[0.25em] text-[#1E4D33]">{t('language.welcome')}</p><h1 className="mt-4 font-['Space_Grotesk'] text-4xl font-light tracking-tighter text-[#12281A]">{t('language.choose')}</h1><div className="mt-10 grid gap-3">{languages.map(language => <button key={language.code} onClick={() => choose(language.code)} className="rounded-full border border-[#1E4D33]/15 px-6 py-3 text-base font-medium text-[#1E4D33] transition-colors duration-300 hover:bg-[#1E4D33] hover:text-white">{language.label}</button>)}</div></div></div>
}
