# 🎮 OneOne Games - 一一的AI魔法游乐园

## 项目简介

这是一个由不到6岁的小女孩「一一」用AI工具打造的儿童游戏网站。每个游戏都是一一自己提出想法，和爸爸一起完成，自己测试，自己决定是否上线。

## 网站特色

- 🎯 **适龄设计**：专门为4-8岁小朋友设计
- 👨‍👩‍👧 **亲子互动**：鼓励父母和孩子一起游戏
- 🎨 **童真童趣**：温暖可爱的设计风格
- 🤖 **AI魔法**：由GPT、Claude、Cursor协助开发

## 技术栈

- 纯HTML + CSS + JavaScript
- 响应式设计，支持手机和平板
- 无框架依赖，轻量级

## 字体要求

### Google Fonts (推荐)
网站使用了以下Google Fonts来营造可爱的儿童友好风格：

- **Kalam** - 手写风格的基础文本字体
- **Fredoka One** - 圆润可爱的Logo和标题字体
- **Bubblegum Sans** - 泡泡糖风格的游戏王国标题
- **Chewy** - 手写风格的游戏标题
- **Indie Flower** - 手绘风格的捐赠标题

### 系统字体 (后备)
如果Google Fonts无法加载，将使用以下系统字体：

- Comic Sans MS
- Chalkboard SE (Mac)
- Arial Rounded MT Bold
- Segoe UI
- 系统默认字体

### 字体应用位置
- **基础文本**：Kalam (手写风格)
- **Logo文字**：Fredoka One (圆润可爱)
- **游戏王国标题**：Bubblegum Sans (泡泡糖风格)
- **游戏标题**：Chewy (手写风格)
- **捐赠标题**：Indie Flower (手绘风格)
- **Footer**：系统默认字体 (保持专业整洁)

## 游戏列表

- 🍓 **Strawberry Game** - 闯关摘草莓游戏
- 🏃‍♂️ **Running Game** - 跑步闯关游戏
- 📚 **Idiom Hero** - 成语闯关游戏
- 🧩 **Sudoku Puzzle** - 数独游戏

## 设计理念

网站采用温暖粉、天蓝、嫩绿等适合儿童的配色方案，使用圆角卡片、可爱字体和手绘风格元素，营造出充满童真童趣的AI魔法游乐园氛围。

## 多语言支持

本项目支持多语言版本，符合i18n国际化规范：

### 语言版本
- **English**: `/` - 默认语言版本（根路径）
- **简体中文**: `/zh-hans/` - 简体中文版本
- **繁體中文**: `/zh-hant/` - 繁體中文版本
- **日本語**: `/ja/` - 日语版本
- **한국어**: `/ko/` - 韩语版本
- **Français**: `/fr/` - 法语版本
- **Deutsch**: `/de/` - 德语版本
- **Español**: `/es/` - 西班牙语版本
- **Português (Brasil)**: `/pt-br/` - 巴西葡萄牙语版本
- **Português (Portugal)**: `/pt-pt/` - 葡萄牙葡萄牙语版本
- **Italiano**: `/it/` - 意大利语版本
- **Nederlands**: `/nl/` - 荷兰语版本
- **Polski**: `/pl/` - 波兰语版本
- **Svenska**: `/sv/` - 瑞典语版本

### 多语言版本要求

#### 📁 **文件结构规范**：
```
/
├── index.html              # 英文版本（原语言，硬编码）
├── zh-hans/
│   └── index.html          # 简体中文版本（预渲染静态文件）
├── zh-hant/
│   └── index.html          # 繁體中文版本（预渲染静态文件）
├── ja/
│   └── index.html          # 日语版本（预渲染静态文件）
├── ko/
│   └── index.html          # 韩语版本（预渲染静态文件）
├── fr/
│   └── index.html          # 法语版本（预渲染静态文件）
├── de/
│   └── index.html          # 德语版本（预渲染静态文件）
├── es/
│   └── index.html          # 西班牙语版本（预渲染静态文件）
├── pt-br/
│   └── index.html          # 巴西葡萄牙语版本（预渲染静态文件）
├── pt-pt/
│   └── index.html          # 葡萄牙葡萄牙语版本（预渲染静态文件）
├── it/
│   └── index.html          # 意大利语版本（预渲染静态文件）
├── nl/
│   └── index.html          # 荷兰语版本（预渲染静态文件）
├── pl/
│   └── index.html          # 波兰语版本（预渲染静态文件）
├── sv/
│   └── index.html          # 瑞典语版本（预渲染静态文件）
├── data/
│   ├── zh-hans.json        # 简体中文翻译数据
│   ├── zh-hant.json        # 繁體中文翻译数据
│   ├── ja.json             # 日语翻译数据
│   ├── ko.json             # 韩语翻译数据
│   ├── fr.json             # 法语翻译数据
│   ├── de.json             # 德语翻译数据
│   ├── es.json             # 西班牙语翻译数据
│   ├── pt-br.json          # 巴西葡萄牙语翻译数据
│   ├── pt-pt.json          # 葡萄牙葡萄牙语翻译数据
│   ├── it.json             # 意大利语翻译数据
│   ├── nl.json             # 荷兰语翻译数据
│   ├── pl.json             # 波兰语翻译数据
│   └── sv.json             # 瑞典语翻译数据
├── scripts/
│   └── pre-render-multi.js # 多语言预渲染脚本
├── js/
│   └── main.js            # 主要功能
└── css/
    └── main.css           # 样式文件（共享）
```

#### 🏗️ **架构原则**：
- **英文版本**：根路径 `/`，硬编码英文内容，无i18n依赖
- **其他语言**：子目录 `/{语言代码}/`，预渲染生成静态HTML文件
- **翻译文件**：`data/{语言代码}.json`，仅存储翻译数据，供预渲染脚本使用

#### 🔧 **技术实现**：
- **纯 HTML/CSS/JS**：无构建工具依赖
- **预渲染系统**：
  - 多语言预渲染脚本：`scripts/pre-render-multi.js`
  - 配置驱动架构，支持多语言扩展
  - 输入：`index.html` + `data/{语言代码}.json`
  - 输出：静态多语言HTML文件
  - 解决闪现英文和SEO问题
- **SEO 优化**：
  - 根路径 `/` 对应英文，不建立 `/en/` 目录
  - 每个页面包含 `hreflang`、`canonical` 标签
  - sitemap.xml 列出所有语言版本
- **语言检测**：可检测浏览器语言并提示用户切换，而非强制跳转
- **样式一致性**：所有语言版本共享 CSS

#### 📝 **翻译管理**：
- **英文更新**：直接修改根目录 `index.html`
- **其他语言更新**：修改 `data/{语言代码}.json` 对应翻译
- **同步原则**：英文页面是唯一 source of truth，翻译键必须与英文保持一致
- **键值规范**：使用驼峰命名法，模块化组织
- **预渲染**：运行 `node scripts/pre-render-multi.js` 生成静态文件

#### 🌐 **语言切换**：
- 导航栏语言切换器
- 支持SEO友好的URL结构
- 保持用户选择的语言偏好

#### ✅ **质量要求**：
- 所有语言版本样式完全一致
- 翻译准确且符合本地化习惯
- 支持响应式设计
- 加载性能优化

## 如何使用

### 🚀 **快速启动**
1. 克隆项目到本地
2. 在项目根目录运行本地服务器：
   ```bash
   python3 -m http.server 1313
   ```
3. 访问 http://localhost:1313
4. 多语言版本：
   - 英文：`/`（默认）
   - 简体中文：`/zh-hans/`
   - 繁體中文：`/zh-hant/`
   - 日本語：`/ja/`
   - 한국어：`/ko/`
   - Français：`/fr/`
   - Deutsch：`/de/`
   - Español：`/es/`
   - Português (Brasil)：`/pt-br/`
   - Português (Portugal)：`/pt-pt/`
   - Italiano：`/it/`
   - Nederlands：`/nl/`
   - Polski：`/pl/`
   - Svenska：`/sv/`

### 🔧 **预渲染多语言版本**
当英文内容更新后，需要重新生成多语言版本：

```bash
# 预渲染指定语言版本
npm run pre-render zh-hans
npm run pre-render zh-hant

# 预渲染所有语言版本
npm run pre-render-all

# 或者直接使用脚本
node scripts/pre-render-multi.js zh-hans
node scripts/pre-render-multi.js zh-hant
node scripts/pre-render-multi.js
```

**预渲染流程**：
1. 修改英文 `index.html`
2. 更新 `data/{语言代码}.json` 翻译文件
3. 运行 `node scripts/pre-render-multi.js {语言代码}`
4. 自动生成 `{语言代码}/index.html`

**优势**：
- ✅ 用户直接看到目标语言，无闪现
- ✅ 搜索引擎爬取多语言内容
- ✅ 配置驱动架构，易于扩展新语言
- ✅ 只在内容更新时运行

### 🌍 **添加新语言流程**

#### **步骤1：更新语言配置**
在 `scripts/pre-render-multi.js` 中添加新语言配置：

```javascript
const LANGUAGES = {
    'zh-hans': { /* 现有配置 */ },
    'zh-hant': { /* 现有配置 */ },
    'ja': {  // 新语言示例
        name: '日本語',
        code: 'ja',
        dir: 'ja',
        title: 'OneOne Games - AI魔法遊園地',
        description: '...',
        canonical: 'https://oneone.games/ja/'
    }
};
```

#### **步骤2：创建翻译文件**
创建 `data/{语言代码}.json` 翻译文件：

```json
{
  "header": { "logoText": "..." },
  "nav": { "freeGames": "...", "premiumGames": "...", "about": "...", "language": "..." },
  "welcome": { "title": "...", "intro1": "...", "intro2": "...", "intro3": "...", "intro4": "..." },
  "games": { "freeKingdom": "...", "premiumKingdom": "...", "comingSoon": "...", "comingSoonDesc": "..." },
  "gameList": {
    "strawberry": { "name": "...", "description": "..." },
    "running": { "name": "...", "description": "..." },
    "idiom": { "name": "...", "description": "..." },
    "sudoku": { "name": "...", "description": "..." },
    "fishy": { "name": "...", "description": "..." }
  },
  "footer": { "title": "...", "subtitle": "...", "builtWith": "...", "contact": "...", "contactEmail": "...", "copyright": "..." },
  "modal": { "comingSoonTitle": "...", "comingSoonMessage": "...", "gotItButton": "..." },
  "languages": { "zhHans": "...", "zhHant": "...", "en": "...", "ja": "..." }
}
```

#### **步骤3：更新语言选择器**
在所有现有语言版本中添加新语言选项：

**英文版本** (`index.html`)：
```html
<a href="./{语言代码}/" class="language-option">{语言名称}</a>
```

**其他语言版本**：
```html
<a href="../{语言代码}/" class="language-option">{语言名称}</a>
```

#### **步骤4：更新预渲染脚本**
在 `scripts/pre-render-multi.js` 中添加新语言的链接替换：

```javascript
// 修复语言切换器链接（使用相对路径）
result = result.replace(/href="\.\/"/g, 'href="../"');
result = result.replace(/href="\.\/zh-hans\/"/g, 'href="../zh-hans/"');
result = result.replace(/href="\.\/zh-hant\/"/g, 'href="../zh-hant/"');
result = result.replace(/href="\.\/{语言代码}\/"/g, 'href="../{语言代码}/"');  // 新语言
```

#### **步骤5：生成新语言版本**
```bash
node scripts/pre-render-multi.js {语言代码}
```

#### **步骤6：更新SEO配置**
- 更新 `sitemap.xml` 添加新语言URL
- 运行 `npm run update-hreflang` 自动更新英文版本hreflang标签
- 确保所有版本的hreflang标签包含新语言

#### **步骤7：测试验证**
- 检查新语言版本是否正确生成
- 验证语言选择器链接是否正确
- 确认SEO标签配置正确
- 运行 `npm run pre-render-all` 重新生成所有语言版本


## 脚本管理

### 预渲染脚本
项目使用统一的预渲染脚本 `scripts/pre-render-multi.js`：

- **配置驱动**：支持多语言扩展，通过 `LANGUAGES` 配置对象管理
- **错误处理**：完善的错误处理和日志输出
- **灵活使用**：支持单语言或全语言预渲染
- **易于维护**：统一的代码结构，便于维护和扩展

### 可用命令
```bash
# 预渲染指定语言
npm run pre-render zh-hans

# 预渲染所有语言
npm run pre-render-all

# 更新英文版本hreflang标签
npm run update-hreflang

# 本地服务器
npm run serve

# 构建所有语言版本
npm run build
```

## 版本控制

### 当前版本
**V3.0.11** - 语言下拉框样式优化，提升用户体验和交互稳定性

### 版本号规范
本项目使用语义化版本控制 (Semantic Versioning):

- **主版本号 (Major)**: 不兼容的API修改
- **次版本号 (Minor)**: 向下兼容的功能性新增  
- **修订号 (Patch)**: 向下兼容的问题修正

### 提交规范
每次提交到GitHub时，版本号按以下规则递增：

- `feat:` - 新功能，次版本号+1
- `fix:` - 修复bug，修订号+1  
- `docs:` - 文档更新，修订号+1
- `style:` - 代码格式调整，修订号+1
- `refactor:` - 代码重构，次版本号+1
- `perf:` - 性能优化，修订号+1
- `test:` - 测试相关，修订号+1
- `chore:` - 构建过程或辅助工具的变动，修订号+1

详细变更历史请查看 [CHANGELOG.md](./CHANGELOG.md)

## 关于作者

一一是一位不到6岁的小女孩，她喜欢玩游戏，用AI工具打造了自己的游戏平台。每个游戏都是她亲自测试和决定上线的，这是她送给全世界小朋友的礼物！

---

💝 **用AI魔法打造的游乐园，让每个孩子都能快乐成长！** 💝 