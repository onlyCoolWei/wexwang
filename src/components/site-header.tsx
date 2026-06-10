'use client';

import { useEffect, useRef, useState } from 'react';

import { LanguageToggle } from '@/src/components/language-toggle';
import { useTranslation } from '@/src/lib/i18n';

const HIDE_THRESHOLD = 80;

export function SiteHeader() {
  const { t } = useTranslation();
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // Ignore tiny scroll jitters so the header doesn't flicker
      if (Math.abs(delta) > 4) {
        setHidden(delta > 0 && currentY > HIDE_THRESHOLD);
        lastScrollY.current = currentY;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t('nav.products'), href: '#work' },
    { label: t('nav.github'), href: 'https://github.com/onlyCoolWei' },
    { label: t('nav.contact'), href: '#connect' },
  ];

  return (
    <div
      className={`fixed inset-x-0 top-5 z-50 flex justify-center px-5 transition-transform duration-500 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] sm:px-8 ${
        hidden ? '-translate-y-[150%]' : 'translate-y-0'
      }`}
    >
      <header className="flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-white/10 bg-black/35 py-2 pl-5 pr-2 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-100/45 opacity-0 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl [animation:hero-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.2s_both]">
        <a
          href="#top"
          className="rounded-full text-sm font-semibold normal-case tracking-[0.04em] text-cyan-50 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
        >
          {t('brand')}
        </a>

        <div className="flex items-center gap-1.5">
          <nav aria-label={t('nav.ariaLabel')} className="hidden items-center sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="rounded-full px-3 py-2 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100/10 hover:text-cyan-50"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <LanguageToggle />
        </div>
      </header>
    </div>
  );
}
