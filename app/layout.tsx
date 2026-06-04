import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'wexwang',
  description: '王伟的 AI Native Frontend / Agent Engineer 个人网站',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
