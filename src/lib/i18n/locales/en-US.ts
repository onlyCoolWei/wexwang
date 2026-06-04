export const enUS = {
  brand: 'wexwang',
  nav: {
    ariaLabel: 'Primary navigation',
    work: 'Work',
    career: 'Career',
    reach: 'Reach',
  },
  language: {
    label: 'Change language',
  },
  hero: {
    eyebrow: '00 / MMXXVI',
    title: 'Wex builds AI native interfaces.',
    subtitle:
      'AI Native Frontend / Agent Engineer focused on AI agents, editor architecture, and complex interaction systems.',
    portraitAlt: 'Portrait of Wei Wang',
    portraitCaption: 'Portrait / Wex Wang',
    meta: [
      ['Who', 'Wei Wang'],
      ['What', 'Agent Engineer'],
      ['Where', 'Beijing'],
      ['Born', '1999'],
    ],
  },
  work: {
    eyebrow: '01 / Recently',
    title: 'Selected.',
    items: [
      {
        name: 'MoreAI',
        period: 'MMXXVI',
        description:
          'Built an AI Agent workspace and Electron client from zero to one, covering chat, knowledge bases, Skills, workflow canvas, and cross-device sync.',
      },
      {
        name: 'AutoCoder',
        period: 'MMXXV',
        description:
          'Worked on the agent workflow that turns natural language into full-stack applications, including long-running task states and dynamic interactions.',
      },
      {
        name: 'Wegic',
        period: 'MMXXV',
        description:
          'Improved the AI website generation-to-publish flow and helped increase final website conversion by 30%.',
      },
    ],
  },
  background: {
    eyebrow: '03 / Background',
    title: 'Beginnings.',
    body: 'Four years of experience building complex web applications and AI products, from online design tools and AI website builders to agent workspaces. I work across canvas systems, streaming chat, tool calling, multi-device sync, and modern frontend engineering.',
  },
  career: {
    eyebrow: '04 / Career',
    title: 'Trajectory.',
    items: [
      ['2025.11 - 2026.05', 'Intelligent Generation (Beijing) Technology Co., Ltd.', 'Agent Frontend Engineer'],
      ['2022.03 - 2025.09', 'Beijing JsDesign Technology Co., Ltd.', 'Frontend Tech Owner'],
      ['2018.09 - 2022.06', 'Inner Mongolia Agricultural University', 'B.S. in Software Engineering'],
    ],
  },
  method: {
    eyebrow: '05 / Method',
    title: 'Approach.',
    items: [
      'Reduce complex interactions into verifiable state models before shaping the UI.',
      'Let performance data guide architectural tradeoffs, especially around streaming rendering, canvas loading, and first paint.',
      'In AI native products, design tool calls, workflows, and user intent as one interaction loop.',
    ],
  },
  stack: {
    eyebrow: '08 / Stack',
    title: 'Tools.',
    items: [
      'Next.js',
      'React',
      'TypeScript',
      'Electron',
      'Zustand',
      'ReactFlow',
      'Monaco Editor',
      'WebSocket',
      'Tailwind CSS',
    ],
  },
  craft: {
    eyebrow: '09 / Craft',
    title: 'Colophon.',
    body: 'This site is built with Next.js 16, React 19, TypeScript, and Tailwind CSS. It stays static-first and lets typography, space, and semantic structure carry the interface.',
  },
  reach: {
    eyebrow: '10 / Reach',
    title: 'Contact.',
    email: 'wangw_str@163.com',
    phone: '15661332411',
  },
} as const
