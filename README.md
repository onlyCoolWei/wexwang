# Personal Introduction

一个使用 Next.js 16 构建的个人介绍网站。

## 技术栈

- **Next.js 16** - React 框架
- **React 19** - UI 库
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架

## 系统要求

- Node.js 20.9 或更高版本

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看结果。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
personal-introduction/
├── app/                # Next.js App Router 目录
│   ├── layout.tsx     # 根布局组件
│   ├── page.tsx       # 首页
│   └── globals.css    # 全局样式
├── public/            # 静态资源目录
├── next.config.js     # Next.js 配置
├── tsconfig.json      # TypeScript 配置
├── tailwind.config.ts # Tailwind CSS 配置
└── package.json       # 项目依赖
```

## 功能特性

- ✅ TypeScript 支持
- ✅ Tailwind CSS 样式
- ✅ ESLint 代码检查
- ✅ 响应式设计
- ✅ 现代化 UI 设计

## 下一步

你可以根据需要修改 `app/page.tsx` 来定制你的个人介绍页面。