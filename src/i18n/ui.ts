import en from './en.json';
import ru from './ru.json';
import type { Locale } from './config';

const translations = { en, ru } as const;

type TranslationTree = typeof en;

function getNestedValue(obj: unknown, keys: string[]): unknown {
  let value: unknown = obj;
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return value;
}

export function useTranslations(locale: Locale) {
  const dict = translations[locale];

  function t(key: string): string {
    const value = getNestedValue(dict, key.split('.'));
    return typeof value === 'string' ? value : key;
  }

  function tRaw<K extends keyof TranslationTree>(section: K): TranslationTree[K] {
    return dict[section];
  }

  return { t, tRaw };
}

export function getMeta(locale: Locale) {
  return translations[locale].meta;
}
