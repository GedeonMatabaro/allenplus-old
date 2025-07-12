import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'fr'],
  defaultLocale: 'en'
});

export const localeNames: Record<string, string> = {
  en: "languageEnglish",
  es: "languageSpanish",
  fr: "languageFrench"
};

export type Locales = typeof routing.locales[number];