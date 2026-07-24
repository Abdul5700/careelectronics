import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en/translation.json'
import kn from './locales/kn/translation.json'

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: { en: { translation: en }, kn: { translation: kn } },
  fallbackLng: 'en',
  supportedLngs: ['en', 'kn'],
  interpolation: { escapeValue: false },
  detection: { order: ['localStorage'], lookupLocalStorage: 'care-electronics-language' },
})

export default i18n
