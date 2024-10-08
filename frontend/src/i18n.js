// src/i18n.js
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import ge from './locales/ge.json';

const messages = {
  en,
  ge,
};

const storedLanguage = localStorage.getItem('selectedLanguage') || 'en';

const i18n = createI18n({
  locale: storedLanguage,
  fallbackLocale: 'en',
  messages,
});

export default i18n;