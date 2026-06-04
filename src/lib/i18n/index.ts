'use client';

import { useCallback, useMemo } from 'react';
import { defaultLanguage, languageLabels, languages } from './config';
import { enUS } from './locales/en-US';
import { zhCN } from './locales/zh-CN';
import { useLanguageStore } from './use-language-store';

export { languageLabels, languages, type Language } from './config';
export { useLanguageStore } from './use-language-store';

const dictionaries = {
  'zh-CN': zhCN,
  'en-US': enUS,
} as const;

type Dictionary = typeof zhCN | typeof enUS;

function getValue(source: unknown, key: string) {
  return key.split('.').reduce<unknown>((current, segment) => {
    if (current && typeof current === 'object' && segment in current) {
      return (current as Record<string, unknown>)[segment];
    }

    return undefined;
  }, source);
}

export function useTranslation() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const dictionary = useMemo<Dictionary>(() => dictionaries[language] ?? dictionaries[defaultLanguage], [language]);

  const t = useCallback(
    (key: string) => {
      const value = getValue(dictionary, key);
      return typeof value === 'string' ? value : key;
    },
    [dictionary],
  );

  return {
    dictionary,
    language,
    languageLabels,
    languages,
    setLanguage,
    t,
  };
}
