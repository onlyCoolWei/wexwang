'use client'

import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { defaultLanguage, type Language } from './config'

type LanguageState = {
  language: Language
  setLanguage: (language: Language) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: defaultLanguage,
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'wexwang-language',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
