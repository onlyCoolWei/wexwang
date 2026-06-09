🌌 个人网站 · 首屏（Hero Section）完全体架构
1. 基础视觉层 (Base Visual)
底色体系：采用极致的暗黑底色（如 #030303 或 #050505），营造深邃的科技感与极客理想主义。

全屏蒙版（Mask Gradient）：使用 CSS 的 mask-image 或 radial-gradient，让整个首屏的视觉焦点从中心向四周自然淡出（Fade out），制造极强的空间纵深感。

2. 背景层：方案 A 磁吸微动圆点网格 (Interactive Magnetic Dot Grid)
视觉隐喻：整齐的淡灰色圆点网格（Dot Grid），天然具备设计工具的画布感（Canvas Feel）与 IDE 代码编辑器的严谨感，完美呼应你作为设计工具/复杂画布技术 Owner 的专家背景。

交互动效：

底层使用 Canvas 渲染整齐的网格阵列。

实时监听鼠标坐标，当用户鼠标在首屏划过时，鼠标周围一定半径内的圆点会被“磁吸”一样产生轻微的向心位移、温和放大并微微变亮。

鼠标移开后，圆点带有阻尼感地优雅回弹。

3. 左侧分栏：文本与核心行动点 (Typography & CTA)
占据屏幕左侧约 60% 宽度，文字采用极具视觉张力的大字报排版，结合 React Bits 组件让文字“动”起来：

主标题 (Main Hook)：采用超大粗体（text-6xl md:text-8xl font-black）。

文案：Building AI-Native Realities.

React Bits 组件：引入 <TextPressure/>（根据鼠标位置产生挤压微动）或 <Decrypted Text/>（开屏时类似黑客帝国代码解密流瞬间校准成字）。

副标题 (Sub-headline)：

文案：Hi, I'm Wang Wei. An AI Native Frontend / Agent Engineer dedicated to leading complex AI workspaces and design platforms from 0 to 1.

React Bits 组件：引入 <BlurText/> 或 <SplitText/>。在主标题解密完成后，副标题以单个字符为单位，带着优雅的模糊滤镜错落淡入。

核心行动点 (CTA Button)：

悬浮一个带有 <ShinyText/> 边框微光效果的流线型按钮，文字为 [ Start Collaboration ]，点击后丝滑滚动锚点至页尾联系表单。

高阶极客彩蛋 (Easter Egg)：

在按钮旁放置一个极简单行输入框，Placeholder 提示：Type 'help' or tell me what to build...

当懂行的面试官或技术总监输入任意内容敲击回车时，纯前端使用 <TextType/> 模拟一段大模型流式（Stream）编译代码的响应响应：“Initializing Wegic & MoreAI pipelines... Let's connect at wangw_str@163.com.”，瞬间彰显你对 AI 交互表现层的极客理解。

4. 右侧分栏：创意头像融入 (Creative Persona)
占据屏幕右侧约 40% 宽度，将简历中的干净、自信的个人证件照进行高端化前端处理，拒绝呆板。提供以下三种融合手法（可根据开发复杂度三选一）：

手法 ①（Canvas 像素粒子化）—— 🌟 炫技推荐：利用 Canvas 读取照片数据，将你的头像同样转化为由圆点（Dot）组成的粒子画像，完美融入背景的 Dot Grid 中。当鼠标触发网格磁吸时，头像的粒子也随之产生极其轻微的波纹联动（“人即网格，网格即人”）。

手法 ②（智能抠图 + 极光背衬）：将照片去除白底，置于一个极简的几何容器中。在人像背后加入 React Bits 风格的 <Soft Aurora/> 科技紫/青色微动光晕，使人像边缘带有淡淡的高级环境光感。

手法 ③（暗色滤镜 + 悬停解密）：正常状态下头像叠加一层暗色、高对比度滤镜融入暗黑背景。当鼠标悬停至头像时，表面闪过一层代码解码流，随后头像恢复清晰、明亮的状态。

5. 顶部导航 (Minimalist Dock)
首屏右上角或顶部，采用类似 React Bits 中的 <Dock/> 组件（高仿 Mac OS 的底部图标缩放动效），放置你的 GitHub、掘金/知乎、邮箱以及简历下载图标，保持页面极致干净。

⏱️ 开屏动画编排节奏 (Timeline)
0.0s - 0.5s：纯黑背景拉开，Dot Grid 网格从中心向四周带着渐变蒙版淡淡铺满，鼠标磁吸交互激活。

0.5s - 1.2s：主标题通过代码解密（Decrypt）动效瞬间聚合定格；同时右侧创意头像伴随着背后的极光微光优雅亮起。

1.2s - 1.8s：副标题带着模糊滤镜优雅淡入，顶部 Dock 导航栏与底部的 CTA 协作按钮最终浮现。