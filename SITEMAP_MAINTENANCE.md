# Sitemap 维护说明

## 📋 Sitemap 结构

### 1. 主索引 sitemap.xml
- **位置**: 根目录 `/sitemap.xml`
- **格式**: `<sitemapindex>`
- **内容**: 列出所有语言版本和子域的sitemap链接

### 2. 多语言 sitemap
- **位置**: `/en/sitemap.xml`, `/zh-hans/sitemap.xml` 等
- **格式**: `<urlset>`
- **内容**: 只包含该语言版本的首页和感谢页面

### 3. 子域 sitemap
- **位置**: 根目录下的 `*-sitemap.xml` 文件
- **格式**: `<urlset>`
- **内容**: 只包含该子域的首页

## 🎮 游戏子域列表

1. **草莓游戏**: `strawberrygame-sitemap.xml`
2. **跑步游戏**: `runninggame-sitemap.xml`
3. **成语英雄**: `idiomheros-sitemap.xml`
4. **数独拼图**: `sudokupuzzle-sitemap.xml`

## 🌍 语言版本列表

- 英文 (en)
- 简体中文 (zh-hans)
- 繁体中文 (zh-hant)
- 日语 (ja)
- 韩语 (ko)
- 法语 (fr)
- 德语 (de)
- 西班牙语 (es)
- 葡萄牙语-巴西 (pt-br)
- 葡萄牙语-葡萄牙 (pt-pt)
- 意大利语 (it)
- 荷兰语 (nl)
- 波兰语 (pl)
- 瑞典语 (sv)

## 🔧 维护指南

### 添加新语言版本
1. 在根目录创建 `/{语言代码}/sitemap.xml`
2. 在主索引 `sitemap.xml` 中添加对应链接
3. 确保包含首页和感谢页面

### 添加新游戏子域
1. 在根目录创建 `{游戏名}-sitemap.xml`
2. 在主索引 `sitemap.xml` 中添加对应链接
3. 确保只包含该子域的首页

### 更新页面
1. 修改对应的sitemap文件
2. 更新 `lastmod` 日期
3. 提交并推送更改

## ✅ 验证方法

部署后验证以下URL是否可访问：
- https://oneone.games/sitemap.xml
- https://oneone.games/en/sitemap.xml
- https://oneone.games/zh-hans/sitemap.xml
- 等等...

## 🚫 重要提醒

- Hugo已配置为禁用自动sitemap生成
- 所有sitemap文件都是手动维护的
- GitHub Actions会保护这些文件不被覆盖
