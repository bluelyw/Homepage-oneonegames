#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// 语言配置
const LANGUAGES = {
    'zh-hans': {
        name: '简体中文',
        code: 'zh-Hans',
        dir: 'zh-hans',
        title: 'OneOne Games - AI魔法游乐园',
        description: '由不到6岁的小女孩一一用AI工具打造的儿童游戏网站，每个游戏都是一一自己提出想法，和爸爸一起完成，自己测试，自己决定是否上线。',
        canonical: 'https://oneone.games/zh-hans/'
    }
    // 可以轻松添加更多语言
    // 'ja': {
    //     name: '日本語',
    //     code: 'ja',
    //     dir: 'ja',
    //     title: 'OneOne Games - AI魔法遊園地',
    //     description: '...',
    //     canonical: 'https://oneone.games/ja/'
    // }
};

// 读取英文HTML模板
const englishTemplate = fs.readFileSync('index.html', 'utf8');

// 安全解析翻译JSON
function parseTranslationFile(langCode) {
    const filePath = `data/${langCode}.json`;
    if (!fs.existsSync(filePath)) {
        console.error(`❌ 翻译文件不存在: ${filePath}`);
        return null;
    }
    
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        console.error(`❌ 解析翻译文件失败: ${filePath}`, error.message);
        return null;
    }
}

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

// 替换HTML中的英文内容为其他语言
function replaceContent(html, translations) {
    let result = html;
    
    // 替换header
    if (translations.header && translations.header.logoText) {
        result = result.replace(/OneOne Games - AI Magic Playground/g, translations.header.logoText);
    }
    
    // 替换导航栏
    if (translations.nav) {
        if (translations.nav.freeGames) result = result.replace(/Free Games ▼/g, translations.nav.freeGames);
        if (translations.nav.premiumGames) result = result.replace(/Premium Games ▼/g, translations.nav.premiumGames);
        if (translations.nav.about) result = result.replace(/About/g, translations.nav.about);
        if (translations.nav.language) result = result.replace(/English ▼/g, translations.nav.language);
    }
    
    // 修复语言切换器链接（使用相对路径）
    result = result.replace(/href="\.\/"/g, 'href="../"');
    result = result.replace(/href="\.\/zh-hans\/"/g, 'href="../zh-hans/"');
    
    // 替换欢迎区域
    if (translations.welcome) {
        if (translations.welcome.title) result = result.replace(/Hello! I'm Oneone 👧/g, translations.welcome.title);
        if (translations.welcome.intro1) result = result.replace(/I'm almost 6 years old and I love playing games!/g, translations.welcome.intro1);
        if (translations.welcome.intro2) result = result.replace(/My dad and I created these games using AI magic,/g, translations.welcome.intro2);
        if (translations.welcome.intro3) result = result.replace(/Each game is my idea, tested by me, and launched by my decision!/g, translations.welcome.intro3);
        if (translations.welcome.intro4) result = result.replace(/Welcome to my AI Magic Playground! ✨/g, translations.welcome.intro4);
    }
    
    // 替换游戏区域标题
    if (translations.games) {
        if (translations.games.freeKingdom) result = result.replace(/🎪 Free Game Kingdom/g, translations.games.freeKingdom);
        if (translations.games.premiumKingdom) result = result.replace(/🎪 Premium Game Kingdom/g, translations.games.premiumKingdom);
        if (translations.games.comingSoon) result = result.replace(/More Games Coming/g, translations.games.comingSoon);
        if (translations.games.comingSoonDesc) result = result.replace(/More exciting games are under development, stay tuned!/g, translations.games.comingSoonDesc);
    }
    
    // 替换游戏名称和描述
    if (translations.gameList) {
        Object.keys(translations.gameList).forEach(gameKey => {
            const game = translations.gameList[gameKey];
            if (game.name) {
                const gameNameMap = {
                    'strawberry': 'Strawberry Game',
                    'running': 'Running Game',
                    'idiom': 'Idiom Hero',
                    'sudoku': 'Sudoku Puzzle',
                    'fishy': 'Big Fish Eat Small Fish'
                };
                const englishName = gameNameMap[gameKey];
                if (englishName) {
                    result = result.replace(new RegExp(englishName, 'g'), game.name);
                }
            }
            if (game.description) {
                // 这里需要为每个游戏添加描述替换逻辑
                const gameDescMap = {
                    'strawberry': 'Pick strawberries through levels, challenge your reflexes!',
                    'running': 'Run through levels, exercise your body and reflexes!',
                    'idiom': 'Idiom challenge game, improve your idiom skills!',
                    'sudoku': 'Sudoku game, exercise your logical thinking!',
                    'fishy': 'Classic big fish eats small fish game, experience the survival rules of the ocean world!'
                };
                const englishDesc = gameDescMap[gameKey];
                if (englishDesc) {
                    result = result.replace(new RegExp(englishDesc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), game.description);
                }
            }
        });
    }
    
    // 替换页脚
    if (translations.footer) {
        if (translations.footer.subtitle) result = result.replace(/Independent hacker-style programming project, created by a little girl, empowered by AI magic ✨/g, translations.footer.subtitle);
        if (translations.footer.builtWith) result = result.replace(/Built with ❤️ and AI/g, translations.footer.builtWith);
        if (translations.footer.contact) result = result.replace(/Contact Us/g, translations.footer.contact);
        if (translations.footer.contactEmail) result = result.replace(/oneone\.games111@gmail\.com/g, translations.footer.contactEmail);
    }
    
    // 替换弹窗内容
    if (translations.modal) {
        if (translations.modal.comingSoonTitle) result = result.replace(/🎮 Coming Soon!/g, translations.modal.comingSoonTitle);
        if (translations.modal.comingSoonMessage) result = result.replace(/More exciting games are under development\. Stay tuned!/g, translations.modal.comingSoonMessage);
        if (translations.modal.gotItButton) result = result.replace(/Got it!/g, translations.modal.gotItButton);
    }
    
    return result;
}

// 更新meta标签
function updateMetaTags(html, langConfig) {
    return html
        .replace(/<title>([^<]+)<\/title>/, `<title>${langConfig.title}</title>`)
        .replace(/<meta name="description" content="([^"]+)"/, `<meta name="description" content="${langConfig.description}">`)
        .replace(/lang="en"/g, `lang="${langConfig.code}"`)
        .replace(/<link rel="canonical" href="([^"]+)"/, `<link rel="canonical" href="${langConfig.canonical}">`)
        // 修复canonical标签的多余字符
        .replace(/<link rel="canonical" href="([^"]+)">>/g, '<link rel="canonical" href="$1">')
        // 保持hreflang标签不变，所有语言版本都使用相同的配置
        // 不进行任何hreflang替换，直接复制英文版本的hreflang配置
        // 这样可以确保所有语言版本的hreflang标签完全一致
}

// 更新资源路径
function updateResourcePaths(html) {
    return html
        .replace(/href="css\//g, 'href="../css/')
        .replace(/src="js\//g, 'src="../js/')
        .replace(/src="images\//g, 'src="../images/');
}

// 预渲染单个语言
function preRenderLanguage(langCode) {
    const langConfig = LANGUAGES[langCode];
    if (!langConfig) {
        console.error(`❌ 未找到语言配置: ${langCode}`);
        return false;
    }
    
    console.log(`🔄 开始预渲染 ${langConfig.name} 版本...`);
    
    // 解析翻译
    const translations = parseTranslationFile(langCode);
    if (!translations) {
        return false;
    }
    
    // 生成HTML
    let translatedHtml = englishTemplate;
    
    // 应用所有转换
    translatedHtml = replaceContent(translatedHtml, translations);
    translatedHtml = updateMetaTags(translatedHtml, langConfig);
    translatedHtml = updateResourcePaths(translatedHtml);
    
    // 确保目录存在
    const langDir = langConfig.dir;
    if (!fs.existsSync(langDir)) {
        fs.mkdirSync(langDir, { recursive: true });
    }
    
    // 写入HTML文件
    fs.writeFileSync(path.join(langDir, 'index.html'), translatedHtml, 'utf8');
    
    console.log(`✅ ${langConfig.name} 版本预渲染完成: ${langDir}/index.html`);
    return true;
}

// 主函数
function main() {
    const args = process.argv.slice(2);
    const targetLang = args[0];
    
    try {
        if (targetLang) {
            // 预渲染指定语言
            if (!LANGUAGES[targetLang]) {
                console.error(`❌ 不支持的语言: ${targetLang}`);
                console.log(`支持的语言: ${Object.keys(LANGUAGES).join(', ')}`);
                process.exit(1);
            }
            preRenderLanguage(targetLang);
        } else {
            // 预渲染所有语言
            console.log('🔄 开始预渲染所有语言版本...');
            Object.keys(LANGUAGES).forEach(langCode => {
                preRenderLanguage(langCode);
            });
            console.log('🎯 所有语言版本预渲染完成！');
        }
        
    } catch (error) {
        console.error('❌ 预渲染失败:', error.message);
        process.exit(1);
    }
}

// 运行主函数
main();
