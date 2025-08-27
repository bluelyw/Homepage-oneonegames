# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [3.0.6] - 2025-01-XX

### Added
- 新增通用多语言预渲染脚本（scripts/pre-render-multi.js）
- 创建配置驱动的多语言架构，易于添加新语言
- 添加语言配置对象，支持多语言扩展

### Changed
- 优化预渲染脚本，使用更精确的正则表达式替换
- 改进hreflang标签处理逻辑，避免SEO错误
- 更新package.json，添加多语言预渲染命令

### Fixed
- 修复中文版本语言切换器链接错误问题
- 修复hreflang标签配置错误，确保SEO正确性
- 解决相对路径解析问题，确保本地开发正常

### Technical
- 配置驱动的多语言系统，避免硬编码错误
- 精确的标签替换逻辑，防止正则表达式错误
- 支持单语言和全语言预渲染模式

## [3.0.5] - 2025-01-XX

### Added
- 新增极简预渲染系统，解决多语言闪现和SEO问题
- 创建预渲染脚本（scripts/pre-render.js）
- 创建中文翻译数据文件（data/zh-hans.json）
- 实现静态中文HTML生成，用户和搜索引擎直接看到中文内容

### Changed
- 重构多语言架构，从i18n.js动态替换改为预渲染静态文件
- 更新文件结构，分离翻译数据和渲染逻辑
- 优化翻译管理流程，简化同步工作

### Removed
- 删除js/i18n.js文件，改用JSON格式翻译数据
- 移除动态i18n替换逻辑

### Fixed
- 解决中文版本闪现英文的问题
- 解决搜索引擎爬取英文内容的问题
- 提升用户体验和SEO效果

### Technical
- 极简预渲染脚本，无复杂构建流程
- 输入：index.html + zh-hans.json
- 输出：静态中文HTML文件
- 只在内容更新时运行，不影响开发效率

## [3.0.4] - 2025-01-XX

### Added
- 新增多语言支持，符合i18n国际化规范
- 创建英文版本（根路径/）和简体中文版本（/zh-hans/）
- 实现语言切换器，支持不同语言版本间切换
- 创建i18n国际化配置文件（js/i18n.js）
- 添加SEO友好的sitemap.xml和robots.txt

### Changed
- 重构网站结构，英文作为默认语言放在根路径
- 更新根目录index.html为英文版本，避免重复内容
- 优化导航栏语言切换器样式和交互
- 调整URL结构，符合SEO最佳实践
- 删除捐赠区域，简化网站内容
- 修复中文版本导航菜单下拉箭头显示问题
- 更新技术标签从GPT-4到GPT-5
- 简化联系信息显示格式

### Removed
- 删除翻译辅助脚本（js/translation-helper.js）
- 删除翻译工作流程指南（TRANSLATION_GUIDE.md）
- 删除捐赠区域相关内容和翻译

### Fixed
- 修复中文版本导航菜单缺少下拉箭头的问题
- 确保中英文版本样式完全一致
- 优化多语言同步工作流程

### Technical
- 实现纯HTML/CSS/JS多语言架构，无构建工具依赖
- 添加hreflang标签支持搜索引擎优化
- 创建模块化的i18n翻译管理系统
- 优化URL结构，避免Google重复内容问题
- 简化翻译管理，直接同步更新多语言版本

## [3.0.2] - 2025-01-XX

### Added
- 新增Premium Game Kingdom区域，包含大鱼吃小鱼游戏
- 实现游戏卡片尺寸统一（280px高度）
- 添加游戏链接新页面打开功能（target="_blank"）
- 优化Header下拉菜单交互体验

### Changed
- 调整Header菜单结构，将Games拆分为Free Games和Premium Games两个下拉菜单
- 移除Header中的Home链接
- 游戏跳转逻辑改为新页面打开
- Footer联系信息更新为邮箱地址（oneone.games111@gmail.com）

### Fixed
- 修复Header下拉菜单交互问题，防止鼠标移动时菜单消失
- 修复游戏卡片宽度不一致问题
- 优化下拉菜单悬停区域，提升用户体验

### Technical
- 添加下拉菜单悬停区域CSS伪元素
- 实现双重悬停触发机制
- 优化下拉菜单内边距和交互逻辑

## [3.0.1] - 2025-08-26

### Added
- 导航栏菜单优化，将Games拆分为Free Games和Premium Games两个下拉菜单
- 字体加载优化，解决字体闪烁和加载延迟问题
- 改进的字体栈策略，优先使用系统可爱字体

### Changed
- 增大了Logo标题字体大小至1.8rem，提升品牌识别度
- 移除了导航栏中的Home链接，简化菜单结构
- 优化了Google Fonts加载策略，使用display=swap确保快速显示
- 调整了字体栈顺序，将系统字体（Comic Sans MS, Chalkboard SE）放在前面作为后备

### Fixed
- 解决了字体加载时的闪烁问题
- 优化了字体加载性能，减少文本显示延迟
- 确保在任何网络条件下都有良好的字体显示效果

## [3.0.0] - 2025-08-26

### Added
- 全新的现代化设计风格
- 响应式导航栏，包含logo和语言选择器
- 可爱的Google Fonts字体系统
  - Kalam (手写风格基础文本)
  - Fredoka One (圆润可爱Logo)
  - Bubblegum Sans (泡泡糖风格标题)
  - Chewy (手写风格游戏标题)
  - Indie Flower (手绘风格捐赠标题)
- 游戏卡片悬停动画效果
- 捐赠区域重新设计
- 三栏式Footer布局

### Changed
- 完全重构了网站架构
- 从Hugo静态站点生成器回滚到纯HTML/CSS/JS
- 优化了颜色方案，采用更柔和的粉色和青绿色渐变
- 改进了响应式设计，更好的移动端体验
- 重新设计了游戏展示区域

### Removed
- Hugo框架依赖
- 多语言支持系统 (简化版本)
- 复杂的构建流程

### Fixed
- 解决了字体加载问题
- 优化了页面加载性能
- 修复了移动端显示问题

## [2.0.0] - 2025-08-03

### Added
- Hugo静态站点生成器
- 多语言支持 (中文、英文、日文等)
- 国际化(i18n)系统
- 主题系统

### Changed
- 从静态HTML迁移到Hugo框架
- 重构了项目结构

## [1.0.0] - 2025-07-27

### Added
- 初始版本发布
- 基础游戏展示页面
- 简单的响应式设计
- 基础捐赠功能

---

## 版本号规范

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
