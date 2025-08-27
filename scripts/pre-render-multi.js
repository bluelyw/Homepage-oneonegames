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
    },
    'zh-hant': {
        name: '繁體中文',
        code: 'zh-Hant',
        dir: 'zh-hant',
        title: 'OneOne Games - AI魔法遊樂園',
        description: '由不到6歲的小女孩一一用AI工具打造的兒童遊戲網站，每個遊戲都是一一自己提出想法，和爸爸一起完成，自己測試，自己決定是否上線。',
        canonical: 'https://oneone.games/zh-hant/'
    },
    'ja': {
        name: '日本語',
        code: 'ja',
        dir: 'ja',
        title: 'OneOne Games - AI魔法遊園地',
        description: '6歳に満たない女の子一一がAIツールで作った子供向けゲームサイトです。各ゲームは一一が自分でアイデアを出し、お父さんと一緒に完成させ、自分でテストして、自分でリリースするかどうかを決めています。',
        canonical: 'https://oneone.games/ja/'
    },
    'ko': {
        name: '한국어',
        code: 'ko',
        dir: 'ko',
        title: 'OneOne Games - AI 마법 놀이터',
        description: '6살이 되지 않은 소녀 일일이가 AI 도구로 만든 어린이 게임 사이트입니다. 각 게임은 일일이가 직접 아이디어를 내고, 아빠와 함께 완성하고, 직접 테스트하고, 직접 출시할지 결정합니다.',
        canonical: 'https://oneone.games/ko/'
    },
    'fr': {
        name: 'Français',
        code: 'fr',
        dir: 'fr',
        title: 'OneOne Games - Terrain de Jeu Magique IA',
        description: 'Site de jeux pour enfants créé par Yiyi, une petite fille de moins de 6 ans, utilisant des outils d\'IA. Chaque jeu est une idée de Yiyi, réalisée avec son papa, testée par elle-même et lancée selon sa décision.',
        canonical: 'https://oneone.games/fr/'
    },
    'de': {
        name: 'Deutsch',
        code: 'de',
        dir: 'de',
        title: 'OneOne Games - KI-Magischer Spielplatz',
        description: 'Eine von der fast 6-jährigen Yiyi mit KI-Tools erstellte Kinderspiel-Website. Jedes Spiel ist Yiyis eigene Idee, mit Papa zusammen umgesetzt, von ihr selbst getestet und nach ihrer Entscheidung veröffentlicht.',
        canonical: 'https://oneone.games/de/'
    },
    'es': {
        name: 'Español',
        code: 'es',
        dir: 'es',
        title: 'OneOne Games - Patio de Juegos Mágico IA',
        description: 'Sitio web de juegos para niños creado por Yiyi, una niña de casi 6 años, usando herramientas de IA. Cada juego es una idea de Yiyi, completada con su papá, probada por ella misma y lanzada según su decisión.',
        canonical: 'https://oneone.games/es/'
    },
    'pt-br': {
        name: 'Português (Brasil)',
        code: 'pt-BR',
        dir: 'pt-br',
        title: 'OneOne Games - Playground Mágico IA',
        description: 'Site de jogos infantis criado por Yiyi, uma menina de quase 6 anos, usando ferramentas de IA. Cada jogo é uma ideia de Yiyi, completada com seu pai, testada por ela mesma e lançada segundo sua decisão.',
        canonical: 'https://oneone.games/pt-br/'
    },
    'pt-pt': {
        name: 'Português (Portugal)',
        code: 'pt-PT',
        dir: 'pt-pt',
        title: 'OneOne Games - Parque Infantil Mágico IA',
        description: 'Site de jogos infantis criado por Yiyi, uma menina de quase 6 anos, usando ferramentas de IA. Cada jogo é uma ideia de Yiyi, completada com o seu pai, testada por ela própria e lançada segundo a sua decisão.',
        canonical: 'https://oneone.games/pt-pt/'
    },
    'it': {
        name: 'Italiano',
        code: 'it',
        dir: 'it',
        title: 'OneOne Games - Parco Giochi Magico IA',
        description: 'Sito web di giochi per bambini creato da Yiyi, una bambina di quasi 6 anni, utilizzando strumenti di IA. Ogni gioco è un\'idea di Yiyi, completata con suo padre, testata da lei stessa e lanciata secondo la sua decisione.',
        canonical: 'https://oneone.games/it/'
    },
    'nl': {
        name: 'Nederlands',
        code: 'nl',
        dir: 'nl',
        title: 'OneOne Games - AI Magische Speeltuin',
        description: 'Een kinderspelwebsite gemaakt door Yiyi, een meisje van bijna 6 jaar, met behulp van AI-tools. Elk spel is Yiyi\'s eigen idee, voltooid met haar vader, door haarzelf getest en gelanceerd volgens haar beslissing.',
        canonical: 'https://oneone.games/nl/'
    },
    'pl': {
        name: 'Polski',
        code: 'pl',
        dir: 'pl',
        title: 'OneOne Games - Magiczny Plac Zabaw AI',
        description: 'Strona z grami dla dzieci stworzona przez Yiyi, prawie 6-letnią dziewczynkę, używając narzędzi AI. Każda gra to pomysł Yiyi, ukończony z tatą, przetestowany przez nią samą i wydany zgodnie z jej decyzją.',
        canonical: 'https://oneone.games/pl/'
    },
    'sv': {
        name: 'Svenska',
        code: 'sv',
        dir: 'sv',
        title: 'OneOne Games - AI Magisk Lekplats',
        description: 'En barnspelswebbplats skapad av Yiyi, en nästan 6-årig flicka, med hjälp av AI-verktyg. Varje spel är Yiyis egen idé, slutförd med hennes pappa, testad av henne själv och lanserad enligt hennes beslut.',
        canonical: 'https://oneone.games/sv/'
    }
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
    result = result.replace(/href="\.\/zh-hant\/"/g, 'href="../zh-hant/"');
    result = result.replace(/href="\.\/ja\/"/g, 'href="../ja/"');
    result = result.replace(/href="\.\/ko\/"/g, 'href="../ko/"');
    result = result.replace(/href="\.\/fr\/"/g, 'href="../fr/"');
    result = result.replace(/href="\.\/de\/"/g, 'href="../de/"');
    result = result.replace(/href="\.\/es\/"/g, 'href="../es/"');
    result = result.replace(/href="\.\/pt-br\/"/g, 'href="../pt-br/"');
    result = result.replace(/href="\.\/pt-pt\/"/g, 'href="../pt-pt/"');
    result = result.replace(/href="\.\/it\/"/g, 'href="../it/"');
    result = result.replace(/href="\.\/nl\/"/g, 'href="../nl/"');
    result = result.replace(/href="\.\/pl\/"/g, 'href="../pl/"');
    result = result.replace(/href="\.\/sv\/"/g, 'href="../sv/"');
    
    // 替换欢迎区域
    if (translations.welcome) {
        if (translations.welcome.title) result = result.replace(/Hello! I'm Oneone 👧/g, translations.welcome.title);
        if (translations.welcome.intro1) result = result.replace(/I'm almost 6 years old and I love playing games!/g, translations.welcome.intro1);
        if (translations.welcome.intro2) result = result.replace(/My dad and I created these games using AI magic,/g, translations.welcome.intro2);
        if (translations.welcome.intro3) result = result.replace(/Each game is my idea, tested by me, and launched by my decision!/g, translations.welcome.intro3);
        if (translations.welcome.intro4) result = result.replace(/Welcome to my AI Magic Playground! ✨/g, translations.welcome.intro4);
    }
    
    // 替换游戏区域标题
    if (translations.sections) {
        if (translations.sections.freeGameKingdom) result = result.replace(/🎪 Free Game Kingdom/g, translations.sections.freeGameKingdom);
        if (translations.sections.premiumGameKingdom) result = result.replace(/🎪 Premium Game Kingdom/g, translations.sections.premiumGameKingdom);
    }
    
    // 替换游戏名称和描述
    if (translations.games) {
        // 草莓游戏
        if (translations.games.strawberryGame) {
            if (translations.games.strawberryGame.title) result = result.replace(/Strawberry Game/g, translations.games.strawberryGame.title);
            if (translations.games.strawberryGame.description) result = result.replace(/Pick strawberries through levels, challenge your reflexes!/g, translations.games.strawberryGame.description);
        }
        // 跑步游戏
        if (translations.games.runningGame) {
            if (translations.games.runningGame.title) result = result.replace(/Running Game/g, translations.games.runningGame.title);
            if (translations.games.runningGame.description) result = result.replace(/Run through levels, exercise your body and reflexes!/g, translations.games.runningGame.description);
        }
        // 成语英雄
        if (translations.games.idiomHero) {
            if (translations.games.idiomHero.title) result = result.replace(/Idiom Hero/g, translations.games.idiomHero.title);
            if (translations.games.idiomHero.description) result = result.replace(/Idiom challenge game, improve your idiom skills!/g, translations.games.idiomHero.description);
        }
        // 数独游戏
        if (translations.games.sudokuPuzzle) {
            if (translations.games.sudokuPuzzle.title) result = result.replace(/Sudoku Puzzle/g, translations.games.sudokuPuzzle.title);
            if (translations.games.sudokuPuzzle.description) result = result.replace(/Sudoku game, exercise your logical thinking!/g, translations.games.sudokuPuzzle.description);
        }
        // 大鱼吃小鱼
        if (translations.games.bigFishEatSmallFish) {
            if (translations.games.bigFishEatSmallFish.title) result = result.replace(/Big Fish Eat Small Fish/g, translations.games.bigFishEatSmallFish.title);
            if (translations.games.bigFishEatSmallFish.description) result = result.replace(/Classic big fish eats small fish game, experience the survival rules of the ocean world!/g, translations.games.bigFishEatSmallFish.description);
        }
        // 更多游戏即将推出
        if (translations.games.moreGamesComing) {
            if (translations.games.moreGamesComing.title) result = result.replace(/More Games Coming/g, translations.games.moreGamesComing.title);
            if (translations.games.moreGamesComing.description) result = result.replace(/More exciting games are under development, stay tuned!/g, translations.games.moreGamesComing.description);
        }
    }
    
    // 替换页脚
    if (translations.footer) {
        if (translations.footer.description) result = result.replace(/Independent hacker-style programming project, created by a little girl, empowered by AI magic ✨/g, translations.footer.description);
        if (translations.footer.contact) result = result.replace(/oneone\.games111@gmail\.com/g, translations.footer.contact);
        if (translations.footer.builtWith) result = result.replace(/Built with ❤️ and AI/g, translations.footer.builtWith);
        if (translations.footer.contactTitle) result = result.replace(/Contact Us/g, translations.footer.contactTitle);
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
        // 注意：英文版本需要手动维护完整的hreflang标签列表
        // 非英语版本的hreflang标签必须与英语版本完全一致！
}

// 更新资源路径
function updateResourcePaths(html) {
    return html
        .replace(/href="css\//g, 'href="../css/')
        .replace(/src="js\//g, 'src="../js/')
        .replace(/src="images\//g, 'src="../images/');
}

// 生成完整的hreflang标签
function generateHreflangTags() {
    const hreflangTags = [];
    
    // 添加英文版本
    hreflangTags.push('<link rel="alternate" hreflang="en" href="https://oneone.games/">');
    
    // 添加其他语言版本
    Object.keys(LANGUAGES).forEach(langCode => {
        const langConfig = LANGUAGES[langCode];
        hreflangTags.push(`<link rel="alternate" hreflang="${langConfig.code}" href="https://oneone.games/${langConfig.dir}/">`);
    });
    
    // 添加x-default
    hreflangTags.push('<link rel="alternate" hreflang="x-default" href="https://oneone.games/">');
    
    return hreflangTags.join('\n    ');
}

// 更新英文版本的hreflang标签
function updateEnglishHreflang() {
    console.log('🔄 更新英文版本的hreflang标签...');
    
    try {
        // 读取英文HTML文件
        let englishHtml = fs.readFileSync('index.html', 'utf8');
        
        // 生成新的hreflang标签
        const newHreflangTags = generateHreflangTags();
        
        // 替换hreflang标签块
        const hreflangRegex = /<!-- Hreflang tags for multilingual SEO -->\s*[\s\S]*?(?=<!--)/;
        const hreflangBlock = `<!-- Hreflang tags for multilingual SEO -->
    ${newHreflangTags}
    
`;
        
        if (hreflangRegex.test(englishHtml)) {
            englishHtml = englishHtml.replace(hreflangRegex, hreflangBlock);
        } else {
            console.warn('⚠️ 未找到hreflang标签块，请手动添加');
            return false;
        }
        
        // 写回英文HTML文件
        fs.writeFileSync('index.html', englishHtml, 'utf8');
        
        console.log('✅ 英文版本hreflang标签更新完成');
        return true;
        
    } catch (error) {
        console.error('❌ 更新英文版本hreflang标签失败:', error.message);
        return false;
    }
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
    
    // 检查是否是更新hreflang标签的命令
    if (args.includes('--update-hreflang')) {
        updateEnglishHreflang();
        return;
    }
    
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
