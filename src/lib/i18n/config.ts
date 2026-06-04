export const languages = ['zh-CN', 'en-US'] as const

export type Language = (typeof languages)[number]

export const defaultLanguage: Language = 'zh-CN'

export const languageLabels: Record<Language, string> = {
  'zh-CN': '中文',
  'en-US': 'English',
}

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language)
}
