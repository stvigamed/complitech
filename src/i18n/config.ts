export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
};

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
};

export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  ru: 'ru_RU',
};
