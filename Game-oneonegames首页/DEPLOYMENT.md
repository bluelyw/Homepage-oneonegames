# 🚀 部署说明

## Sitemap 已生成完成！

您的网站现在已经有了完整的sitemap，包含以下内容：

### 📋 Sitemap 结构

1. **主sitemap索引** (`sitemap.xml`)
   - 指向各个语言版本的sitemap

2. **英文版本sitemap** (`en/sitemap.xml`) - 包含：
   - 🏠 主页 (优先级 1.0)
   - 🎮 所有游戏页面 (优先级 0.9)
   - 🌍 所有语言版本 (优先级 0.8)
   - 📂 分类和标签页面 (优先级 0.6)
   - 💝 感谢页面 (优先级 0.3)

### 🎮 游戏页面
- https://strawberrygame.oneone.games/
- https://runninggame.oneone.games/
- https://idiomheros.oneone.games/
- https://sudokupuzzle.oneone.games/

### 🌍 多语言版本
- 英文、简体中文、繁体中文、日语、韩语
- 法语、德语、西班牙语、葡萄牙语（巴西/葡萄牙）
- 意大利语、荷兰语、波兰语、瑞典语

## 📤 提交给谷歌

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 选择您的网站属性
3. 在左侧菜单中找到 "Sitemaps"
4. 添加新的sitemap：`https://oneone.games/sitemap.xml`

## 🔄 更新sitemap

当您添加新游戏或更新网站时：

1. 编辑 `oneone-games-multilingual/layouts/sitemap.xml`
2. 运行 `cd oneone-games-multilingual && hugo`
3. 复制文件：`cp -r public/* ../`
4. 提交到您的托管服务

## ✅ 验证

您可以通过以下方式验证sitemap：
- 访问 `https://oneone.games/sitemap.xml`
- 访问 `https://oneone.games/en/sitemap.xml`

---

🎉 **恭喜！您的sitemap已经准备就绪，可以提交给谷歌了！**
