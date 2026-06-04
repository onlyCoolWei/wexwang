# 设计规范（Design Spec）

> 灵感来源：[ozgur.design](https://ozgur.design/) —— Oz Gultekin 的产品体验设计师作品集。
> 本文档提炼该站点的设计语言，用于指导一个「极简、编辑式、Bauhaus 风格」个人作品集网站的实现。

---

## 1. 设计哲学

核心信条：**形式追随功能（Form follows function）**。

- **去装饰**：没有 CMS、没有臃肿、没有多余的修饰。结构本身即是表达。
- **静态优先**：每个页面都是一份扁平文件（flat file）。每一个设计决策都是一个代码决策。
- **克制即奢侈**：如果一个功能不服务于读者，它就不该上线；如果一个依赖不值其重量，就删掉它。
- **意图与产物零偏差（No drift between intent and artifact）**：所见即所写。
- 像 Bauhaus 剥离装饰、让结构说话一样，本站剥离技术栈，让作品说话。

---

## 2. 信息架构

整站采用**编号章节（numbered sections）**的编辑式叙事结构，从 `00` 到 `10` 顺序排列，像一本作品集册子的目录。

| 编号 | 章节标题 | 内容 |
| --- | --- | --- |
| `00 / MMXXVI` | Hero | 一句话定位 + 个人名片（Who / What / Where / How / When）|
| `01 / Recently` | Selected work | 近期精选项目（可加密保护）|
| `02 / Previously` | Archived | 早期归档项目 |
| `03 / Background` | Beginnings | 起源故事 |
| `04 / Career` | Trajectory | 职业轨迹 / 简历 |
| `05 / Method` | Approach | 工作方法论 |
| `06 / Projects` | Tinkering | 业余项目 / 玩具站点 |
| `07 / Writing` | Takes | 文章 / 观点 |
| `08 / Stack` | Tools | 工具栈 |
| `09 / Craft` | Colophon | 版本说明 / 技术声明 |
| `10 / Reach` | Contact | 联系方式 |

设计要点：
- 编号使用 `两位数字 + 斜杠 + 关键词` 的格式（如 `01 / Recently`）。
- 年份使用**罗马数字**（`MMXXVI` = 2026），强化「印刷品 / 铭文」气质。
- 每个章节有一个**短促有力的单词标题**（Beginnings. / Trajectory. / Approach.），以句号结尾。

---

## 3. 排版（Typography）

排版是整个设计的主角，承担了几乎全部的视觉表达。

- **字体搭配（双字族体系）**：
  - **标签 / 元信息**：等宽字体（Monospace），用于编号、分类标签、导航等小字，营造「代码 / 技术文档」的精确感。
  - **正文 / 标题**：高可读性的无衬线体或衬线体（参考 Inter / Geist / 经典 Grotesk），大字号、宽行距、强阅读节奏。
- **层级**：
  - 章节标题字号大、字重中等、紧凑字距（tight tracking）。
  - 正文段落长行宽（measure 约 60–75 字符），段间留白充足。
  - 元信息（mono 标签）字号小、字距略宽（loose tracking）、常用大写或灰阶降权。
- **节奏**：依靠字号差、留白与对齐建立视觉层级，而非颜色或线框。

---

## 4. 色彩（Color）

极简的近黑白配色，最大化对比与可读性。

| 角色 | 说明 |
| --- | --- |
| 背景 | 近白 / 纸张色（off-white），或暗色模式下的近黑 |
| 前景文字 | 近黑 / 高对比墨色 |
| 次级文字 | 中灰（用于元信息、标签、辅助说明）|
| 强调 | 极少量，仅在必要处用于链接 hover / 焦点态 |

原则：**色彩不承担装饰职能**，只服务于可读性与状态反馈（hover、focus、visited）。

---

## 5. 布局与栅格（Layout & Grid）

- **单列为主、内容居中**：长文阅读体验优先，最大宽度受控（measure 约束）。
- **大量留白**：章节之间通过垂直留白分隔，而非分割线或卡片。
- **左对齐**：标题、正文、列表统一左对齐，建立稳定的阅读基线。
- **元信息对齐**：编号 / 标签常以左侧或对齐栏的方式排布，形成「目录式」韵律。
- **响应式**：移动端单列堆叠，桌面端可在列表区使用双栏（项目名 + 一句话描述）。

---

## 6. 动效（Motion）

- **渐进增强（progressive enhancement）**：动效是锦上添花，不是必需。无 JS 时站点完全可用。
- **尊重用户偏好**：严格遵守 `prefers-reduced-motion`。开启「减少动态效果」时，**暂停所有动画**并明确提示。
- **克制的入场**：滚动入场使用淡入 / 轻微位移，时长短、缓动自然（GSAP / Motion）。
- 不使用炫技式、抢夺注意力的动画。

---

## 7. 技术栈（Tech Stack / Colophon）

严格对应站点的「版本说明」声明：

- **内容**：Markdown 编写。
- **框架**：[Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)。
- **组件**：必要处使用 React / shadcn。
- **动效**：GSAP、Motion。
- **部署**：Vercel（或 Cloudflare）。
- **JS 用量**：极少，仅用于渐进增强。
- **产物**：静态 HTML / CSS，每页一份扁平文件。

---

## 8. 可访问性（Accessibility）

- 语义化 HTML（`<section>`、`<article>`、标题层级正确）。
- 高对比文字，满足 WCAG AA。
- 键盘可达，焦点态清晰可见。
- 尊重 `prefers-reduced-motion` 与 `prefers-color-scheme`。
- 图片提供 `alt`，链接文案具描述性。

---

## 9. 设计检查清单（Checklist）

- [ ] 是否每个章节都有编号 + 单词标题（句号结尾）？
- [ ] 是否使用「等宽标签 + 阅读体正文」的双字族体系？
- [ ] 配色是否克制在近黑白 + 中灰？
- [ ] 留白是否充分，是否用留白而非线框分隔？
- [ ] 动效是否遵守 `prefers-reduced-motion`？
- [ ] 是否无多余依赖、无多余装饰（form follows function）？
- [ ] 站点在禁用 JS 时是否仍完全可读可用？
