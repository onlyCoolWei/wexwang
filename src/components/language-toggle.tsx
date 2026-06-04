'use client'

import { isLanguage } from '@/src/lib/i18n/config'
import { useTranslation } from '@/src/lib/i18n'

export function LanguageToggle() {
  const { language, languageLabels, languages, setLanguage, t } =
    useTranslation()

  return (
    <label className="inline-flex items-center gap-3">
      <span className="sr-only">{t('language.label')}</span>
      <select
        aria-label={t('language.label')}
        className="bg-transparent px-1 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500 outline-none transition hover:text-stone-50 focus-visible:ring-2 focus-visible:ring-stone-50"
        value={language}
        onChange={(event) => {
          const nextLanguage = event.target.value

          if (isLanguage(nextLanguage)) {
            setLanguage(nextLanguage)
          }
        }}
      >
        {languages.map((option) => (
          <option key={option} value={option}>
            {languageLabels[option]}
          </option>
        ))}
      </select>
    </label>
  )
}
