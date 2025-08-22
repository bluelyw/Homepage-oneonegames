# 🎮 OneOne Games - 一一的AI魔法游乐园

## 项目简介

这是一个由不到6岁的小女孩「一一」用AI工具打造的儿童游戏网站。每个游戏都是一一自己提出想法，和爸爸一起完成，自己测试，自己决定是否上线。

## 网站特色

- 🎯 **适龄设计**：专门为4-8岁小朋友设计
- 👨‍👩‍👧 **亲子互动**：鼓励父母和孩子一起游戏
- 🎨 **童真童趣**：温暖可爱的设计风格
- 🤖 **AI魔法**：由GPT、Claude、Cursor协助开发

## 技术栈

- **静态网站生成器**：Hugo
- **主题**：自定义oneone-theme
- **多语言支持**：14种语言
- **部署平台**：GitHub Pages
- **响应式设计**：支持手机和平板

## 游戏列表

- 🍓 **Strawberry Game** - 闯关摘草莓游戏
- 🏃‍♂️ **Running Game** - 跑步闯关游戏
- 📚 **Idiom Hero** - 成语闯关游戏
- 🧩 **Sudoku Puzzle** - 数独游戏

## 设计理念

网站采用温暖粉、天蓝、嫩绿等适合儿童的配色方案，使用圆角卡片、可爱字体和手绘风格元素，营造出充满童真童趣的AI魔法游乐园氛围。

## 如何使用

1. 直接在浏览器中打开 `index.html`
2. 点击游戏卡片进入对应游戏
3. 建议在家长陪同下使用

## 关于作者

一一是一位不到6岁的小女孩，她喜欢玩游戏，用AI工具打造了自己的游戏平台。每个游戏都是她亲自测试和决定上线的，这是她送给全世界小朋友的礼物！

---

## 🚀 发布部署指南

### 重要说明
⚠️ **本项目使用Hugo静态网站生成器，不要直接修改根目录的文件！**

### 正确的修改流程

#### 1. 修改网站内容
- **HTML模板**：修改 `oneone-games-multilingual/themes/oneone-theme/layouts/` 下的模板文件
- **CSS样式**：修改 `oneone-games-multilingual/themes/oneone-theme/assets/css/main.css`
- **JavaScript**：修改 `oneone-games-multilingual/themes/oneone-theme/assets/js/main.js`
- **多语言文本**：修改 `oneone-games-multilingual/i18n/` 下的语言文件
- **静态资源**：将图片等文件放在 `oneone-games-multilingual/static/` 目录

#### 2. 重新构建网站
```bash
cd oneone-games-multilingual
hugo
```

#### 3. 复制构建结果到根目录
```bash
cp -r public/* ../
```

#### 4. 提交并推送更改
```bash
cd ..
git add .
git commit -m "你的提交信息"
git push origin main
```

### 常见修改场景

#### 修改Logo
1. 将logo图片放入 `oneone-games-multilingual/static/images/`
2. 修改 `oneone-games-multilingual/themes/oneone-theme/layouts/partials/header.html`
3. 修改 `oneone-games-multilingual/themes/oneone-theme/layouts/partials/footer.html`
4. 更新 `oneone-games-multilingual/themes/oneone-theme/assets/css/main.css` 中的样式
5. 执行构建和部署流程

#### 修改样式
1. 编辑 `oneone-games-multilingual/themes/oneone-theme/assets/css/main.css`
2. 执行构建和部署流程

#### 修改多语言文本
1. 编辑 `oneone-games-multilingual/i18n/` 下的语言文件
2. 执行构建和部署流程

### 本地测试
```bash
cd oneone-games-multilingual
hugo server
```
然后访问 `http://localhost:1313`

### 部署验证
- 推送代码后，GitHub Actions会自动构建和部署
- 等待几分钟后访问 https://oneone.games 查看效果
- 如果缓存问题，可以强制刷新浏览器（Ctrl+F5）

### 故障排除

#### 问题：修改后线上没有更新
- 检查是否修改了正确的Hugo主题文件
- 确认执行了 `hugo` 构建命令
- 确认复制了 `public/*` 到根目录
- 检查GitHub Actions是否成功运行

#### 问题：样式没有生效
- 检查CSS文件是否正确更新
- 清除浏览器缓存
- 确认Hugo构建的CSS文件包含最新样式

#### 问题：图片无法显示
- 确认图片文件在 `oneone-games-multilingual/static/` 目录中
- 检查图片路径是否正确
- 确认图片文件已复制到根目录

---

## 📋 发版要求

### 发版流程
每次发版前，请确保完成以下步骤：

1. **更新CHANGELOG.md**
   - 在 `[未发布]` 部分记录本次更新的内容
   - 使用正确的emoji标签分类更改类型
   - 记录具体的功能、修复和改进

2. **版本号管理**
   - 遵循语义化版本规范 (MAJOR.MINOR.PATCH)
   - 重大更新：主版本号+1 (如 1.0.0 → 2.0.0)
   - 新功能：次版本号+1 (如 1.0.0 → 1.1.0)
   - 修复问题：修订号+1 (如 1.0.0 → 1.0.1)

3. **发版记录**
   - 在CHANGELOG.md中创建新的版本条目
   - 包含发布日期和详细更改说明
   - 将 `[未发布]` 的内容移动到新版本下

4. **代码提交**
   - 提交信息格式：`feat: 版本号 - 简短描述`
   - 例如：`feat: v2.1.0 - 新增成语游戏功能`

### 更改类型说明
- ✨ **新增**: 新功能或游戏
- 🔧 **修复**: 错误修复
- 💄 **样式**: UI/UX改进
- 📝 **文档**: 文档更新
- 🚀 **性能**: 性能优化
- 🔒 **安全**: 安全修复
- 🏗️ **重构**: 代码重构

### 示例发版记录
```markdown
## [2.1.0] - 2025-08-23

### 新增 ✨
- 🎯 新增成语闯关游戏
- 🌍 新增韩语支持

### 修复 🔧
- 修复移动端显示问题
- 优化游戏加载速度

### 样式 💄
- 更新游戏卡片设计
- 改进按钮交互效果
```

---

💝 **用AI魔法打造的游乐园，让每个孩子都能快乐成长！** 💝 