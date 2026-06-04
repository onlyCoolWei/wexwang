import Image from 'next/image'

const works = [
  {
    name: 'MoreAI',
    period: 'MMXXVI',
    description:
      '从 0 到 1 搭建 AI Agent 工作台与 Electron 客户端，覆盖对话、知识库、Skills、工作流画布与多端同步。',
  },
  {
    name: 'AutoCoder',
    period: 'MMXXV',
    description:
      '参与自然语言到前后端应用生成的 Agent 流程体系，处理长任务状态与动态交互流转。',
  },
  {
    name: 'Wegic',
    period: 'MMXXV',
    description:
      '推动 AI 建站生成到发布链路优化，最终用户建站转化率提升 30%。',
  },
]

const career = [
  ['2025.11 - 2026.05', '智能生成（北京）科技有限公司', 'Agent 前端开发工程师'],
  ['2022.03 - 2025.09', '北京即设科技有限公司', '前端技术 Owner'],
  ['2018.09 - 2022.06', '内蒙古农业大学', '软件工程本科'],
]

const methods = [
  '把复杂交互先拆成可验证的状态模型，再进入 UI 实现。',
  '用性能数据约束架构取舍，尤其关注流式渲染、画布加载与首屏体验。',
  '在 AI Native 产品里，把工具调用、工作流与用户意图放在同一个交互闭环里设计。',
]

const stack = [
  'Next.js',
  'React',
  'TypeScript',
  'Electron',
  'Zustand',
  'ReactFlow',
  'Monaco Editor',
  'WebSocket',
  'Tailwind CSS',
]

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-stone-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 py-6 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-500">
          <a href="#top" className="text-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-50">
            wexwang
          </a>
          <nav aria-label="Primary navigation" className="hidden gap-6 sm:flex">
            <a className="transition hover:text-stone-50" href="#work">
              Work
            </a>
            <a className="transition hover:text-stone-50" href="#career">
              Career
            </a>
            <a className="transition hover:text-stone-50" href="#reach">
              Reach
            </a>
          </nav>
        </header>

        <section
          id="top"
          aria-labelledby="hero-title"
          className="grid min-h-[calc(100vh-72px)] content-center gap-12 py-16 md:grid-cols-[minmax(0,1.1fr)_360px] md:items-center lg:gap-20"
        >
          <div className="max-w-4xl">
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.26em] text-neutral-500">
              00 / MMXXVI
            </p>
            <h1
              id="hero-title"
              className="max-w-5xl text-5xl font-medium leading-[0.95] tracking-[-0.06em] sm:text-7xl lg:text-[8.5rem]"
            >
              Wex builds AI native interfaces.
            </h1>
            <p className="mt-10 max-w-2xl text-xl leading-8 text-neutral-300 sm:text-2xl sm:leading-9">
              AI Native Frontend / Agent Engineer，专注 AI Agent、图形编辑器架构与高复杂度交互系统。
            </p>
            <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 font-mono text-xs uppercase tracking-[0.16em] text-neutral-500 sm:grid-cols-4">
              <div>
                <dt>Who</dt>
                <dd className="mt-2 font-sans text-base normal-case tracking-normal text-stone-50">
                  王伟
                </dd>
              </div>
              <div>
                <dt>What</dt>
                <dd className="mt-2 font-sans text-base normal-case tracking-normal text-stone-50">
                  Agent Engineer
                </dd>
              </div>
              <div>
                <dt>Where</dt>
                <dd className="mt-2 font-sans text-base normal-case tracking-normal text-stone-50">
                  Beijing
                </dd>
              </div>
              <div>
                <dt>Born</dt>
                <dd className="mt-2 font-sans text-base normal-case tracking-normal text-stone-50">
                  1999
                </dd>
              </div>
            </dl>
          </div>

          <figure className="justify-self-start md:justify-self-end">
            <div className="relative aspect-[3/4] w-64 overflow-hidden bg-neutral-900 sm:w-72 md:w-80">
              <Image
                src="/images/wex-id-photo.png"
                alt="王伟头像"
                fill
                priority
                sizes="(min-width: 768px) 320px, 288px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              Portrait / Wex Wang
            </figcaption>
          </figure>
        </section>

        <div className="space-y-28 pb-24 sm:space-y-36">
          <section id="work" aria-labelledby="work-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              01 / Recently
            </p>
            <div>
              <h2 id="work-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Selected.
              </h2>
              <div className="mt-12 space-y-10">
                {works.map((work) => (
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
              03 / Background
            </p>
            <div>
              <h2 id="background-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Beginnings.
              </h2>
              <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-300">
                4 年复杂 Web 应用与 AI 产品开发经验，从在线设计工具、AI 建站到 Agent 工作台，长期处理画布、流式对话、工具调用、多端同步与工程化体系中的复杂问题。
              </p>
            </div>
          </section>

          <section id="career" aria-labelledby="career-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              04 / Career
            </p>
            <div>
              <h2 id="career-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Trajectory.
              </h2>
              <div className="mt-12 space-y-8">
                {career.map(([time, company, role]) => (
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
              05 / Method
            </p>
            <div>
              <h2 id="method-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Approach.
              </h2>
              <ol className="mt-12 grid gap-8 md:grid-cols-3">
                {methods.map((method, index) => (
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
              08 / Stack
            </p>
            <div>
              <h2 id="stack-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Tools.
              </h2>
              <ul className="mt-12 flex max-w-4xl flex-wrap gap-x-4 gap-y-3">
                {stack.map((item) => (
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
              09 / Craft
            </p>
            <div>
              <h2 id="craft-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Colophon.
              </h2>
              <p className="mt-10 max-w-3xl text-lg leading-8 text-neutral-300">
                本站使用 Next.js 16、React 19、TypeScript 与 Tailwind CSS 构建。页面保持静态优先，视觉依靠排版、留白与语义结构完成。
              </p>
            </div>
          </section>

          <section id="reach" aria-labelledby="reach-title" className="grid gap-8 md:grid-cols-[180px_1fr]">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-neutral-500">
              10 / Reach
            </p>
            <div>
              <h2 id="reach-title" className="text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
                Contact.
              </h2>
              <div className="mt-10 flex flex-col gap-4 text-xl sm:flex-row sm:gap-8">
                <a className="underline decoration-neutral-700 underline-offset-4 hover:decoration-stone-50" href="mailto:wangw_str@163.com">
                  wangw_str@163.com
                </a>
                <a className="underline decoration-neutral-700 underline-offset-4 hover:decoration-stone-50" href="tel:15661332411">
                  15661332411
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
