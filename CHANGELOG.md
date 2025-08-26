# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
