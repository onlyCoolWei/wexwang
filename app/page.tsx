'use client'

import Image from 'next/image'
import { LanguageToggle } from '@/src/components/language-toggle'
import { useTranslation } from '@/src/lib/i18n'

export default function Home() {
  const { dictionary, t } = useTranslation()

  return (
    <main className="min-h-screen bg-neutral-950 text-stone-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">
          <a href="#top" className="text-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50">
            {t('brand')}
          </a>
          <div className="flex items-center gap-6">
            <nav aria-label={t('nav.ariaLabel')} className="hidden gap-6 sm:flex">
              <a className="transition hover:text-stone-50" href="#work">
                {t('nav.work')}
              </a>
              <a className="transition hover:text-stone-50" href="#career">
                {t('nav.career')}
              </a>
              <a className="transition hover:text-stone-50" href="#reach">
                {t('nav.reach')}
              </a>
            </nav>
            <LanguageToggle />
          </div>
        </header>

        <section
          id="top"
          aria-labelledby="hero-title"
          className="grid min-h-[calc(100vh-72px)] content-center gap-12 py-16 md:grid-cols-[minmax(0,1.1fr)_360px] md:items-center lg:gap-20"
        >
          <div className="max-w-4xl">
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.26em] text-neutral-500">
              {t('hero.eyebrow')}
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[8.5rem]"
            >
              {t('hero.title')}
            </h1>
            <p className="mt-10 max-w-2xl text-xl leading-8 text-neutral-300 sm:text-2xl sm:leading-9">
              {t('hero.subtitle')}
            </p>
            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 font-mono text-xs uppercase tracking-[0.16em] text-neutral-500 sm:grid-cols-4">
              {dictionary.hero.meta.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd className="mt-2 font-sans text-base normal-case tracking-normal text-stone-50">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="justify-self-start md:justify-self-end">
            <div className="relative aspect-[3/4] w-64 overflow-hidden bg-neutral-900 sm:w-72 md:w-80">
              <Image
                src="/images/wex-id-photo.png"
                alt={t('hero.portraitAlt')}
                fill
                priority
                sizes="(min-width: 768px) 320px, 288px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              {t('hero.portraitCaption')}
            </figcaption>
          </figure>
        </section>

        <div className="space-y-28 pb-24 sm:space-y-36">
          <section id="work" aria-labelledby="work-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t('work.eyebrow')}
            </p>
            <div>
              <h2 id="work-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('work.title')}
              </h2>
              <div className="mt-12 space-y-10">
                {dictionary.work.items.map((work) => (
                  <article key={work.name} className="grid gap-3 md:grid-cols-[180px_1fr]">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                      {work.period}
                    </p>
                    <div>
                      <h3 className="text-2xl font-medium tracking-[-0.03em]">{work.name}</h3>
                      <p className="mt-3 max-w-3xl text-lg leading-8 text-neutral-300">
                        {work.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section aria-labelledby="background-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t('background.eyebrow')}
            </p>
            <div>
              <h2 id="background-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('background.title')}
              </h2>
              <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-300">
                {t('background.body')}
              </p>
            </div>
          </section>

          <section id="career" aria-labelledby="career-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t('career.eyebrow')}
            </p>
            <div>
              <h2 id="career-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('career.title')}
              </h2>
              <div className="mt-12 space-y-8">
                {dictionary.career.items.map(([time, company, role]) => (
                  <article key={`${time}-${company}`} className="grid gap-2 md:grid-cols-[180px_1fr]">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-500">
                      {time}
                    </p>
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
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t('method.eyebrow')}
            </p>
            <div>
              <h2 id="method-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('method.title')}
              </h2>
              <ol className="mt-12 grid gap-8 md:grid-cols-3">
                {dictionary.method.items.map((method, index) => (
                  <li key={method}>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-neutral-500">
                      0{index + 1}
                    </p>
                    <p className="mt-4 text-lg leading-8 text-neutral-300">{method}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section aria-labelledby="stack-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t('stack.eyebrow')}
            </p>
            <div>
              <h2 id="stack-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('stack.title')}
              </h2>
              <ul className="mt-12 flex max-w-4xl flex-wrap gap-x-4 gap-y-3">
                {dictionary.stack.items.map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm uppercase tracking-[0.16em] text-neutral-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section aria-labelledby="craft-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t('craft.eyebrow')}
            </p>
            <div>
              <h2 id="craft-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('craft.title')}
              </h2>
              <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-300">
                {t('craft.body')}
              </p>
            </div>
          </section>

          <section id="reach" aria-labelledby="reach-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              {t('reach.eyebrow')}
            </p>
            <div>
              <h2 id="reach-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                {t('reach.title')}
              </h2>
              <div className="mt-10 flex flex-col gap-4 text-xl sm:flex-row sm:gap-8">
                <a className="underline decoration-neutral-700 underline-offset-4 hover:decoration-stone-50" href="mailto:wangw_str@163.com">
                  {t('reach.email')}
                </a>
                <a className="underline decoration-neutral-700 underline-offset-4 hover:decoration-stone-50" href="tel:15661332411">
                  {t('reach.phone')}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
