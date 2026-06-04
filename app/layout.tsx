import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'wexwang',
  description: 'A personal introduction website built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
