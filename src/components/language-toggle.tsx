'use client';

import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';

import { isLanguage } from '@/src/lib/i18n/config';
import { useTranslation } from '@/src/lib/i18n';

export function LanguageToggle() {
  const { language, languageLabels, languages, setLanguage, t } = useTranslation();

  return (
    <MenuTrigger>
      <Button
        aria-label={t('language.label')}
        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500 shadow-[0_0_24px_rgba(0,0,0,0.22)] outline-none transition hover:border-cyan-100/30 hover:text-stone-50 focus-visible:ring-2 focus-visible:ring-stone-50"
      >
        {languageLabels[language]}
      </Button>
      <Popover
        offset={8}
        className="rounded-2xl border border-white/10 bg-neutral-950/90 p-1 shadow-[0_20px_60px_rgba(0,0,0,0.55)] outline-none backdrop-blur-xl"
      >
        <Menu
          aria-label={t('language.label')}
          className="min-w-28 outline-none"
          onAction={(key) => {
            const nextLanguage = String(key);

            if (isLanguage(nextLanguage)) {
              setLanguage(nextLanguage);
            }
          }}
        >
          {languages.map((option) => (
            <MenuItem
              key={option}
              id={option}
              textValue={languageLabels[option]}
              className={`cursor-pointer rounded-xl px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] outline-none transition data-[focused]:bg-cyan-100/10 data-[focused]:text-cyan-50 ${
                option === language ? 'bg-cyan-100/10 text-cyan-50' : 'text-neutral-400'
              }`}
            >
              {languageLabels[option]}
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
