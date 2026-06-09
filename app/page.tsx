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
  const trajectoryAccents = [
    {
      halo: 'group-hover/card:border-emerald-200/35 group-hover/card:shadow-[0_0_70px_rgba(110,231,183,0.13)]',
      marker: 'bg-emerald-200 shadow-[0_0_22px_rgba(110,231,183,0.55)]',
      year: 'group-hover/card:text-emerald-100 group-hover/card:[text-shadow:0_0_32px_rgba(110,231,183,0.42)]',
    },
    {
      halo: 'group-hover/card:border-cyan-200/35 group-hover/card:shadow-[0_0_70px_rgba(103,232,249,0.14)]',
      marker: 'bg-cyan-200 shadow-[0_0_22px_rgba(103,232,249,0.58)]',
      year: 'group-hover/card:text-cyan-100 group-hover/card:[text-shadow:0_0_32px_rgba(103,232,249,0.46)]',
    },
    {
      halo: 'group-hover/card:border-violet-200/35 group-hover/card:shadow-[0_0_70px_rgba(196,181,253,0.14)]',
      marker: 'bg-violet-200 shadow-[0_0_22px_rgba(196,181,253,0.58)]',
      year: 'group-hover/card:text-violet-100 group-hover/card:[text-shadow:0_0_32px_rgba(196,181,253,0.46)]',
    },
  ] as const;
  const projectAccents = [
    {
      glow: 'from-emerald-200/18 via-cyan-200/8 to-transparent',
      border: 'group-hover/project:border-emerald-200/35 group-hover/project:shadow-[0_0_90px_rgba(16,185,129,0.14)]',
      label: 'text-emerald-100/60',
      visual: 'agent',
    },
    {
      glow: 'from-cyan-200/18 via-sky-200/8 to-transparent',
      border: 'group-hover/project:border-cyan-200/35 group-hover/project:shadow-[0_0_90px_rgba(34,211,238,0.14)]',
      label: 'text-cyan-100/60',
      visual: 'site',
    },
    {
      glow: 'from-amber-200/18 via-yellow-200/8 to-transparent',
      border: 'group-hover/project:border-amber-200/35 group-hover/project:shadow-[0_0_90px_rgba(251,191,36,0.12)]',
      label: 'text-amber-100/60',
      visual: 'code',
    },
    {
      glow: 'from-orange-200/18 via-violet-200/8 to-transparent',
      border: 'group-hover/project:border-orange-200/35 group-hover/project:shadow-[0_0_90px_rgba(251,146,60,0.12)]',
      label: 'text-orange-100/60',
      visual: 'vector',
    },
  ] as const;
  const honorAccents = [
    {
      glow: 'from-amber-200/20 via-orange-200/8 to-transparent',
      node: 'bg-amber-200 shadow-[0_0_34px_rgba(251,191,36,0.55)]',
      text: 'text-amber-100/70',
      ring: 'group-hover/honor:border-amber-100/35 group-hover/honor:shadow-[0_0_90px_rgba(251,191,36,0.13)]',
    },
    {
      glow: 'from-cyan-200/18 via-emerald-200/8 to-transparent',
      node: 'bg-cyan-200 shadow-[0_0_34px_rgba(103,232,249,0.55)]',
      text: 'text-cyan-100/70',
      ring: 'group-hover/honor:border-cyan-100/35 group-hover/honor:shadow-[0_0_90px_rgba(34,211,238,0.13)]',
    },
    {
      glow: 'from-violet-200/18 via-fuchsia-200/8 to-transparent',
      node: 'bg-violet-200 shadow-[0_0_34px_rgba(196,181,253,0.55)]',
      text: 'text-violet-100/70',
      ring: 'group-hover/honor:border-violet-100/35 group-hover/honor:shadow-[0_0_90px_rgba(196,181,253,0.13)]',
    },
    {
      glow: 'from-orange-200/20 via-red-200/8 to-transparent',
      node: 'bg-orange-200 shadow-[0_0_34px_rgba(251,146,60,0.55)]',
      text: 'text-orange-100/70',
      ring: 'group-hover/honor:border-orange-100/35 group-hover/honor:shadow-[0_0_90px_rgba(251,146,60,0.13)]',
    },
  ] as const;

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
              <p className="mb-7 font-mono text-xs uppercase tracking-[0.34em] text-cyan-100/45">{t('hero.eyebrow')}</p>
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
          <section id="career" aria-labelledby="career-title" className="relative">
            <div className="pointer-events-none absolute left-0 top-16 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-transparent via-cyan-100/20 to-transparent md:left-[132px] md:block" />
            <div className="grid gap-8 md:grid-cols-[180px_1fr]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">{t('career.eyebrow')}</p>
              <div>
                <h2 id="career-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                  {t('career.title')}
                </h2>
                <div className="mt-12 space-y-6">
                  {dictionary.career.items.map((item, index) => {
                    const accent = trajectoryAccents[index % trajectoryAccents.length];

                    return (
                      <article
                        key={`${item.period}-${item.company}`}
                        className={`group/card relative grid gap-5 rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/[0.045] md:grid-cols-[180px_1fr] md:p-7 ${accent.halo}`}
                      >
                        <div className="absolute left-5 top-8 h-2.5 w-2.5 rounded-full bg-neutral-700 transition duration-500 group-hover/card:scale-125 md:-left-[52px]">
                          <span
                            className={`absolute inset-0 rounded-full opacity-0 transition duration-500 group-hover/card:opacity-100 ${accent.marker}`}
                          />
                        </div>
                        <div>
                          <p
                            className={`font-mono text-5xl font-semibold leading-none tracking-[-0.08em] text-neutral-800 transition duration-500 sm:text-6xl ${accent.year}`}
                          >
                            {item.year}
                          </p>
                          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                            {item.period}
                          </p>
                        </div>
                        <div>
                          <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-100/45">{item.stage}</p>
                          <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-stone-50 sm:text-3xl">
                            {item.company}
                          </h3>
                          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                            {item.role}
                          </p>
                          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">{item.description}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          <section id="work" aria-labelledby="work-title" className="relative grid gap-8 md:grid-cols-[180px_1fr]">
            <div className="pointer-events-none absolute -inset-x-8 -top-16 h-64 bg-[radial-gradient(circle_at_78%_18%,rgba(34,211,238,0.1),transparent_32%),radial-gradient(circle_at_18%_46%,rgba(251,191,36,0.06),transparent_28%)] blur-2xl" />
            <p className="relative font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t('work.eyebrow')}
            </p>
            <div className="relative">
              <h2 id="work-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('work.title')}
              </h2>
              <div className="mt-12 grid gap-5 lg:grid-cols-2">
                {dictionary.work.items.map((work, index) => {
                  const accent = projectAccents[index % projectAccents.length];

                  return (
                    <article
                      key={work.name}
                      className={`group/project relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_26px_100px_rgba(0,0,0,0.35)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/[0.045] sm:p-7 ${accent.border}`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${accent.glow} opacity-70 transition duration-500 group-hover/project:opacity-100`}
                      />
                      <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:34px_34px] [mask-image:radial-gradient(circle_at_50%_0%,black,transparent_68%)]" />

                      <div className="relative flex h-full flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className={`font-mono text-[11px] uppercase tracking-[0.24em] ${accent.label}`}>
                              {work.meta}
                            </p>
                            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-stone-50 sm:text-4xl">
                              {work.name}
                            </h3>
                          </div>
                          {'badge' in work && work.badge ? (
                            <p className="rounded-full border border-amber-200/20 bg-amber-200/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-100/70">
                              {work.badge}
                            </p>
                          ) : null}
                        </div>

                        <div className="relative mt-8 h-32 overflow-hidden rounded-[1.25rem] border border-white/[0.07] bg-black/25">
                          {accent.visual === 'agent' ? (
                            <div className="absolute inset-0">
                              <div className="absolute left-[18%] top-[32%] h-3 w-3 rounded-full bg-emerald-100 shadow-[0_0_24px_rgba(110,231,183,0.8)] transition duration-500 group-hover/project:translate-x-3" />
                              <div className="absolute left-[48%] top-[20%] h-2.5 w-2.5 rounded-full bg-cyan-100 shadow-[0_0_22px_rgba(103,232,249,0.75)] transition duration-500 group-hover/project:-translate-y-2" />
                              <div className="absolute left-[70%] top-[58%] h-3 w-3 rounded-full bg-violet-100 shadow-[0_0_22px_rgba(196,181,253,0.72)] transition duration-500 group-hover/project:-translate-x-4" />
                              <div className="absolute left-[22%] top-[38%] h-px w-[52%] rotate-[-8deg] bg-gradient-to-r from-emerald-100/10 via-cyan-100/55 to-transparent" />
                              <div className="absolute left-[50%] top-[36%] h-px w-[28%] rotate-[24deg] bg-gradient-to-r from-cyan-100/45 to-violet-100/10" />
                            </div>
                          ) : null}
                          {accent.visual === 'site' ? (
                            <div className="absolute inset-x-8 bottom-5 space-y-2 transition duration-500 group-hover/project:-translate-y-2">
                              <div className="h-8 rounded-t-xl border border-cyan-100/25 bg-cyan-100/[0.08]" />
                              <div className="grid grid-cols-3 gap-2">
                                <div className="h-10 rounded-lg bg-cyan-100/[0.12]" />
                                <div className="h-10 rounded-lg bg-cyan-100/[0.07]" />
                                <div className="h-10 rounded-lg bg-cyan-100/[0.1]" />
                              </div>
                            </div>
                          ) : null}
                          {accent.visual === 'code' ? (
                            <div className="absolute inset-0 translate-y-4 space-y-2 p-5 font-mono text-[10px] uppercase tracking-[0.18em] text-amber-100/45 transition duration-700 group-hover/project:translate-y-0">
                              <p>const intent = parse(prompt)</p>
                              <p className="pl-5 text-amber-100/70">await generate.fullStack(intent)</p>
                              <p className="pl-10 text-amber-100/35">stream.deploy(states)</p>
                              <p className="pl-3 text-amber-100/55">sync.runtime.complete()</p>
                            </div>
                          ) : null}
                          {accent.visual === 'vector' ? (
                            <div className="absolute inset-0">
                              <div className="absolute left-8 top-16 h-px w-[72%] -rotate-6 bg-gradient-to-r from-orange-100/0 via-orange-100/70 to-violet-100/0 transition duration-500 group-hover/project:rotate-3" />
                              <div className="absolute left-[22%] top-[38%] h-3 w-3 rounded-full border border-orange-100/80 bg-black shadow-[0_0_20px_rgba(251,146,60,0.6)]" />
                              <div className="absolute left-[54%] top-[55%] h-3 w-3 rounded-full border border-violet-100/80 bg-black shadow-[0_0_20px_rgba(196,181,253,0.55)]" />
                              <div className="absolute left-[76%] top-[34%] h-3 w-3 rounded-full border border-orange-100/80 bg-black shadow-[0_0_20px_rgba(251,146,60,0.55)]" />
                            </div>
                          ) : null}
                        </div>

                        <p className="mt-7 text-xl font-medium leading-8 tracking-[-0.03em] text-stone-100">
                          {work.hook}
                        </p>
                        <p className="mt-4 text-base leading-7 text-neutral-300">{work.description}</p>
                        <ul className="mt-6 space-y-3">
                          {work.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3 text-sm leading-6 text-neutral-400">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-100/50" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section aria-labelledby="honors-title" className="relative grid gap-8 md:grid-cols-[180px_1fr]">
            <div className="pointer-events-none absolute -inset-x-8 -top-10 h-[34rem] bg-[radial-gradient(circle_at_28%_14%,rgba(251,191,36,0.11),transparent_30%),radial-gradient(circle_at_84%_38%,rgba(103,232,249,0.08),transparent_34%)] blur-2xl" />
            <p className="relative font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t('honors.eyebrow')}
            </p>
            <div className="relative min-w-0">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <h2 id="honors-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                  {t('honors.title')}
                </h2>
                <p className="max-w-sm font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                  Horizontal parallax reel / placeholder photos
                </p>
              </div>

              <div className="mt-12 overflow-x-auto pb-6 [scroll-snap-type:x_mandatory]">
                <div className="flex w-max gap-5 pr-8">
                  {dictionary.honors.items.map((honor, index) => {
                    const accent = honorAccents[index % honorAccents.length];

                    return (
                      <article
                        key={`${honor.number}-${honor.project}`}
                        className={`group/honor relative min-h-[520px] w-[82vw] max-w-[760px] snap-start overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-5 shadow-[0_28px_110px_rgba(0,0,0,0.42)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:bg-white/[0.045] sm:w-[650px] sm:p-7 ${accent.ring}`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${accent.glow} opacity-80`} />
                        <div className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(255,255,255,0.32)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(90deg,black,transparent_88%)]" />
                        <div className="absolute inset-y-8 left-8 hidden w-px bg-gradient-to-b from-transparent via-amber-100/30 to-transparent sm:block" />
                        <div className={`absolute left-7 top-10 hidden h-3 w-3 rounded-full sm:block ${accent.node}`} />

                        <div className="relative grid h-full gap-7 lg:grid-cols-[0.9fr_1.1fr]">
                          <div className="flex flex-col">
                            <div className="flex items-start justify-between gap-4">
                              <p className="font-mono text-7xl font-semibold leading-none tracking-[-0.09em] text-white/[0.06] transition duration-500 group-hover/honor:text-white/[0.12]">
                                {honor.number}
                              </p>
                              <p className={`font-mono text-[11px] uppercase tracking-[0.24em] ${accent.text}`}>
                                {honor.date}
                              </p>
                            </div>
                            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                              {honor.award}
                            </p>
                            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-stone-50 sm:text-4xl">
                              {honor.project}
                            </h3>
                            <p className="mt-5 text-base leading-7 text-neutral-300">{honor.challenge}</p>
                            <p className="mt-5 text-sm leading-7 text-neutral-400">{honor.description}</p>
                          </div>

                          <div className="relative min-h-[300px]">
                            <div className="absolute inset-0 rounded-[1.5rem] border border-white/[0.06] bg-black/25 blur-[1px]" />
                            <div className="absolute inset-4 rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent_34%),radial-gradient(circle_at_40%_22%,rgba(255,255,255,0.12),transparent_24%),linear-gradient(160deg,rgba(120,113,108,0.22),rgba(3,3,3,0.72))]" />
                            <div className="absolute inset-4 opacity-35 transition duration-700 [background-image:linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.16)_48%,transparent_50%)] [background-size:220%_100%] group-hover/honor:[background-position:100%_0]" />
                            <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rotate-[-4deg] rounded-[1.1rem] border border-white/70 bg-stone-100 p-3 shadow-[0_28px_80px_rgba(0,0,0,0.5)] transition duration-500 group-hover/honor:-translate-y-[54%] group-hover/honor:rotate-2 group-hover/honor:scale-[1.03]">
                              <div className="aspect-[4/3] overflow-hidden rounded-[0.7rem] bg-neutral-900">
                                <div className="h-full w-full bg-[radial-gradient(circle_at_25%_24%,rgba(251,191,36,0.38),transparent_28%),radial-gradient(circle_at_76%_38%,rgba(34,211,238,0.22),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.1),rgba(3,3,3,0.9))]" />
                              </div>
                              <p className="mt-3 truncate font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-700">
                                {honor.imageLabel}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
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
