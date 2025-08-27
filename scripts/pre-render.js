#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 读取英文HTML模板
const englishTemplate = fs.readFileSync('index.html', 'utf8');

// 读取中文翻译JSON
const translations = JSON.parse(fs.readFileSync('data/zh-hans.json', 'utf8'));

// 递归获取嵌套对象的翻译
function getTranslation(obj, key) {
    const keys = key.split('.');
    let value = obj;
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return typeof value === 'string' ? value : null;
}

// 替换HTML中的英文内容为中文
function replaceContent(html) {
    let result = html;
    
    // 替换header
    result = result.replace(/OneOne Games - AI Magic Playground/g, translations.header.logoText);
    
    // 替换导航栏
    result = result.replace(/Free Games ▼/g, translations.nav.freeGames);
    result = result.replace(/Premium Games ▼/g, translations.nav.premiumGames);
    result = result.replace(/About/g, translations.nav.about);
    result = result.replace(/English ▼/g, translations.nav.language);
    
    // 修复语言切换器链接（使用相对路径）
    result = result.replace(/href="\.\/"/g, 'href="../"');
    result = result.replace(/href="\.\/zh-hans\/"/g, 'href="../zh-hans/"');
    
    // 替换欢迎区域
    result = result.replace(/Hello! I'm Oneone 👧/g, translations.welcome.title);
    result = result.replace(/I'm almost 6 years old and I love playing games!/g, translations.welcome.intro1);
    result = result.replace(/My dad and I created these games using AI magic,/g, translations.welcome.intro2);
    result = result.replace(/Each game is my idea, tested by me, and launched by my decision!/g, translations.welcome.intro3);
    result = result.replace(/Welcome to my AI Magic Playground! ✨/g, translations.welcome.intro4);
    
    // 替换游戏区域标题
    result = result.replace(/🎪 Free Game Kingdom/g, translations.games.freeKingdom);
    result = result.replace(/🎪 Premium Game Kingdom/g, translations.games.premiumKingdom);
    
    // 替换游戏名称和描述
    result = result.replace(/Strawberry Game/g, translations.gameList.strawberry.name);
    result = result.replace(/Pick strawberries through levels, challenge your reflexes!/g, translations.gameList.strawberry.description);
    
    result = result.replace(/Running Game/g, translations.gameList.running.name);
    result = result.replace(/Run through levels, exercise your body and reflexes!/g, translations.gameList.running.description);
    
    result = result.replace(/Idiom Hero/g, translations.gameList.idiom.name);
    result = result.replace(/Idiom challenge game, improve your idiom skills!/g, translations.gameList.idiom.description);
    
    result = result.replace(/Sudoku Puzzle/g, translations.gameList.sudoku.name);
    result = result.replace(/Sudoku game, exercise your logical thinking!/g, translations.gameList.sudoku.description);
    
    result = result.replace(/Big Fish Eat Small Fish/g, translations.gameList.fishy.name);
    result = result.replace(/Classic big fish eats small fish game, experience the survival rules of the ocean world!/g, translations.gameList.fishy.description);
    
    result = result.replace(/More Games Coming/g, translations.games.comingSoon);
    result = result.replace(/More exciting games are under development, stay tuned!/g, translations.games.comingSoonDesc);
    
    // 替换页脚
    result = result.replace(/Independent hacker-style programming project, created by a little girl, empowered by AI magic ✨/g, translations.footer.subtitle);
    result = result.replace(/Built with ❤️ and AI/g, translations.footer.builtWith);
    result = result.replace(/Contact Us/g, translations.footer.contact);
    result = result.replace(/oneone\.games111@gmail\.com/g, translations.footer.contactEmail);
    
    return result;
}

// 更新meta标签
function updateMetaTags(html) {
    return html
        .replace(/<title>([^<]+)<\/title>/, '<title>OneOne Games - AI魔法游乐园</title>')
        .replace(/<meta name="description" content="([^"]+)"/, '<meta name="description" content="由不到6岁的小女孩一一用AI工具打造的儿童游戏网站，每个游戏都是一一自己提出想法，和爸爸一起完成，自己测试，自己决定是否上线。">')
        .replace(/lang="en"/g, 'lang="zh-Hans"')
        .replace(/<link rel="canonical" href="([^"]+)"/, '<link rel="canonical" href="https://oneone.games/zh-hans/">')
        // 修复canonical标签的多余字符
        .replace(/<link rel="canonical" href="([^"]+)">>/g, '<link rel="canonical" href="$1">')
        // 使用更精确的方法修复hreflang标签
        .replace(
            /<link rel="alternate" hreflang="en" href="https:\/\/oneone\.games\/">/g,
            '<link rel="alternate" hreflang="en" href="https://oneone.games/">'
        )
        .replace(
            /<link rel="alternate" hreflang="zh-Hans" href="https:\/\/oneone\.games\/zh-hans\/">/g,
            '<link rel="alternate" hreflang="zh-Hans" href="https://oneone.games/zh-hans/">'
        )
        .replace(
            /<link rel="alternate" hreflang="x-default" href="https:\/\/oneone\.games\/">/g,
            '<link rel="alternate" hreflang="x-default" href="https://oneone.games/">'
        );
}

// 更新资源路径
function updateResourcePaths(html) {
    return html
        .replace(/href="css\//g, 'href="../css/')
        .replace(/src="js\//g, 'src="../js/')
        .replace(/src="images\//g, 'src="../images/');
}

// 主函数
function main() {
    try {
        console.log('🔄 开始预渲染中文版本...');
        console.log('📝 输入: index.html + data/zh-hans.json');
        
        // 生成中文HTML
        let chineseHtml = englishTemplate;
        
        // 应用所有转换
        chineseHtml = replaceContent(chineseHtml);
        chineseHtml = updateMetaTags(chineseHtml);
        chineseHtml = updateResourcePaths(chineseHtml);
        
        // 确保目录存在
        const zhHansDir = 'zh-hans';
        if (!fs.existsSync(zhHansDir)) {
            fs.mkdirSync(zhHansDir, { recursive: true });
        }
        
        // 写入中文HTML文件
        fs.writeFileSync(path.join(zhHansDir, 'index.html'), chineseHtml, 'utf8');
        
        console.log('✅ 输出: zh-hans/index.html');
        console.log('🎯 现在用户和搜索引擎都能直接看到中文内容');
        console.log('📊 解决了闪现英文和SEO问题');
        
    } catch (error) {
        console.error('❌ 预渲染失败:', error.message);
        process.exit(1);
    }
}

// 运行主函数
main();
