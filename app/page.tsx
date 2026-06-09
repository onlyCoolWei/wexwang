'use client';

import Image from 'next/image';
import { DecryptedText, SplitBlurText } from '@/src/components/hero-effects';
import { LanguageToggle } from '@/src/components/language-toggle';
import { MagneticDotGrid } from '@/src/components/magnetic-dot-grid';
import { useTranslation } from '@/src/lib/i18n';

export default function Home() {
  const { dictionary, t } = useTranslation();
  const dockLinks = [
    { label: 'Mail', href: 'mailto:wangw_str@163.com' },
    { label: 'Career', href: '#career' },
    { label: 'MoreAI', href: 'https://moreai.cc/' },
    { label: 'Wegic', href: 'https://wegic.ai/' },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-stone-50">
      <section id="top" aria-labelledby="hero-title" className="relative min-h-screen overflow-hidden">
        <MagneticDotGrid className="opacity-95" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_44%,rgba(56,189,248,0.14),transparent_26%),radial-gradient(circle_at_78%_30%,rgba(168,85,247,0.14),transparent_24%),linear-gradient(90deg,rgba(3,3,3,0.2),rgba(3,3,3,0.66))]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/70 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030303] via-[#030303]/75 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
          <header className="flex items-center justify-between gap-5 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-100/45 opacity-0 [animation:hero-reveal_0.8s_cubic-bezier(0.16,1,0.3,1)_1.2s_both]">
            <a
              href="#top"
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-cyan-50 shadow-[0_0_30px_rgba(103,232,249,0.08)] backdrop-blur-md transition hover:border-cyan-200/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
            >
              {t('brand')}
            </a>
            <div className="flex items-center gap-3">
              <nav
                aria-label={t('nav.ariaLabel')}
                className="hidden items-center rounded-full border border-white/10 bg-black/30 px-2 py-1.5 shadow-[0_0_36px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:flex"
              >
                {dockLinks.map((link) => (
                  <a
                    key={link.label}
                    className="rounded-full px-3 py-2 transition duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-100/10 hover:text-cyan-50"
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

          <div className="grid flex-1 content-center gap-12 py-16 md:grid-cols-[minmax(0,0.6fr)_minmax(320px,0.4fr)] md:items-center lg:gap-16">
            <div className="max-w-5xl">
              <p className="mb-7 font-mono text-xs uppercase tracking-[0.34em] text-cyan-100/45">
                {t('hero.eyebrow')} / Agentic Canvas Owner
              </p>
              <h1
                id="hero-title"
                className="max-w-5xl text-6xl font-black uppercase leading-[0.86] tracking-[-0.08em] text-stone-50 sm:text-7xl lg:text-[8.4rem]"
              >
                <DecryptedText text={t('hero.title')} />
              </h1>
              <p className="mt-9 max-w-2xl text-lg leading-8 text-cyan-50/70 sm:text-2xl sm:leading-9">
                <SplitBlurText text={t('hero.subtitle')} />
              </p>

            </div>

            <figure className="group relative mx-auto w-full max-w-[360px] opacity-0 [animation:hero-reveal_1s_cubic-bezier(0.16,1,0.3,1)_0.8s_both] md:mx-0 md:justify-self-end">
              <div className="absolute -inset-10 rounded-full bg-[conic-gradient(from_140deg,rgba(34,211,238,0.04),rgba(168,85,247,0.28),rgba(45,212,191,0.18),rgba(34,211,238,0.04))] blur-3xl [animation:aurora-drift_8s_ease-in-out_infinite]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_120px_rgba(0,0,0,0.72)] backdrop-blur">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(103,232,249,0.18),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,rgba(255,255,255,0.04))]" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.45rem] bg-neutral-950">
                  <Image
                    src="/images/wex-id-photo.png"
                    alt={t('hero.portraitAlt')}
                    fill
                    priority
                    sizes="(min-width: 768px) 360px, 86vw"
                    className="object-cover brightness-[0.58] contrast-125 saturate-[0.72] transition duration-700 group-hover:brightness-105 group-hover:saturate-100"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(3,3,3,0.3)),radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.16),transparent_40%)] mix-blend-screen" />
                  <div className="absolute inset-0 opacity-40 transition duration-700 [background-image:radial-gradient(rgba(214,232,255,0.38)_1px,transparent_1px)] [background-size:13px_13px] [mask-image:linear-gradient(90deg,transparent,black_18%,black_82%,transparent)] group-hover:opacity-0" />
                  <div className="absolute inset-x-0 top-0 h-1/3 translate-y-[-110%] bg-gradient-to-b from-cyan-200/0 via-cyan-200/25 to-cyan-200/0 blur-sm transition duration-700 group-hover:translate-y-[290%]" />
                </div>
              </div>
              <a
                href="mailto:wangw_str@163.com"
                className="group/contact relative mt-5 flex w-full items-center justify-center overflow-hidden rounded-full border border-cyan-100/20 bg-cyan-100/[0.04] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.28em] text-cyan-50 shadow-[0_0_42px_rgba(34,211,238,0.1)] transition hover:-translate-y-0.5 hover:border-cyan-100/55 hover:bg-cyan-100/10 hover:shadow-[0_0_56px_rgba(34,211,238,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-100"
              >
                <span className="absolute inset-y-0 left-0 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition duration-700 group-hover/contact:translate-x-[220%]" />
                <span className="relative">[ {t('hero.contactCta')} ]</span>
              </a>
            </figure>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="space-y-28 py-24 sm:space-y-36">
          <section id="work" aria-labelledby="work-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{t('work.eyebrow')}</p>
            <div>
              <h2 id="work-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('work.title')}
              </h2>
              <div className="mt-12 space-y-10">
                {dictionary.work.items.map((work) => (
                  <article key={work.name} className="grid gap-3 md:grid-cols-[180px_1fr]">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">{work.period}</p>
                    <div>
                      <h3 className="text-2xl font-medium tracking-[-0.03em]">{work.name}</h3>
                      <p className="mt-3 max-w-3xl text-lg leading-8 text-neutral-300">{work.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="background-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{t('background.eyebrow')}</p>
            <div>
              <h2 id="background-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('background.title')}
              </h2>
              <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-300">{t('background.body')}</p>
            </div>
          </section>

          <section id="career" aria-labelledby="career-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{t('career.eyebrow')}</p>
            <div>
              <h2 id="career-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('career.title')}
              </h2>
              <div className="mt-12 space-y-8">
                {dictionary.career.items.map(([time, company, role]) => (
                  <article key={`${time}-${company}`} className="grid gap-2 md:grid-cols-[180px_1fr]">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">{time}</p>
                    <div>
                      <h3 className="text-xl font-medium tracking-[-0.02em]">{company}</h3>
                      <p className="mt-1 text-neutral-300">{role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="method-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{t('method.eyebrow')}</p>
            <div>
              <h2 id="method-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('method.title')}
              </h2>
              <ol className="mt-12 grid gap-8 md:grid-cols-3">
                {dictionary.method.items.map((method, index) => (
                  <li key={method}>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">0{index + 1}</p>
                    <p className="mt-4 text-lg leading-8 text-neutral-300">{method}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section aria-labelledby="stack-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{t('stack.eyebrow')}</p>
            <div>
              <h2 id="stack-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('stack.title')}
              </h2>
              <ul className="mt-12 flex max-w-4xl flex-wrap gap-x-4 gap-y-3">
                {dictionary.stack.items.map((item) => (
                  <li key={item} className="font-mono text-sm uppercase tracking-[0.16em] text-neutral-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="craft-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{t('craft.eyebrow')}</p>
            <div>
              <h2 id="craft-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('craft.title')}
              </h2>
              <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-300">{t('craft.body')}</p>
            </div>
          </section>

          <section id="reach" aria-labelledby="reach-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{t('reach.eyebrow')}</p>
            <div>
              <h2 id="reach-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('reach.title')}
              </h2>
              <div className="mt-10 flex flex-col gap-4 text-xl sm:flex-row sm:gap-8">
                <a
                  className="underline decoration-neutral-700 underline-offset-4 hover:decoration-stone-50"
                  href="mailto:wangw_str@163.com"
                >
                  {t('reach.email')}
                </a>
                <a
                  className="underline decoration-neutral-700 underline-offset-4 hover:decoration-stone-50"
                  href="tel:15661332411"
                >
                  {t('reach.phone')}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
