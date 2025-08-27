// i18n 国际化配置文件 - 仅中文翻译
const i18n = {
    // 简体中文
    'zh-Hans': {
        // 导航栏
        nav: {
            freeGames: '免费游戏 ▼',
            premiumGames: '付费游戏 ▼',
            about: '关于',
            language: '简体中文 ▼'
        },
        
        // 欢迎信息
        welcome: {
            title: '你好！我是 Oneone 👧',
            intro1: '我今年不到6岁，最喜欢玩游戏啦！',
            intro2: '我和爸爸一起用AI魔法制作了这些游戏，',
            intro3: '每个游戏都是我想出来的，我测试过的，我决定上线的！',
            intro4: '欢迎来到我的AI魔法游乐园！✨'
        },
        
        // 游戏区域
        games: {
            freeKingdom: '🎪 免费游戏王国',
            premiumKingdom: '🎪 付费游戏王国',
            comingSoon: '更多游戏即将到来',
            comingSoonDesc: '更多精彩游戏正在开发中，敬请期待！'
        },
        
        // 游戏列表
        gameList: {
            strawberry: {
                name: '草莓游戏',
                description: '闯关摘草莓，挑战你的反应力！'
            },
            running: {
                name: '跑步游戏',
                description: '跑步闯关，锻炼身体和反应力！'
            },
            idiom: {
                name: '成语英雄',
                description: '成语闯关游戏，提升成语水平！'
            },
            sudoku: {
                name: '数独游戏',
                description: '数独游戏，锻炼逻辑思维！'
            },
            fishy: {
                name: '大鱼吃小鱼',
                description: '经典大鱼吃小鱼游戏，体验海洋世界的生存法则！'
            }
        },
        

        
        // 页脚
        footer: {
            title: 'OneOne Games',
            subtitle: '独立黑客风格编程项目，由小女孩创作，AI魔法赋能 ✨',
            builtWith: '用 ❤️ 和 AI 构建',
            contact: '联系我们',
            contactEmail: 'oneone.games111@gmail.com',
            copyright: '© 2025 OneOne.Games'
        },
        
        // 语言选项
        languages: {
            zhHans: '简体中文',
            en: 'English'
        }
    }
};

// 获取当前语言 - 简化逻辑，只有中文版本需要i18n
function getCurrentLanguage() {
    return 'zh-Hans'; // 中文版本固定返回中文
}

// 获取翻译文本
function t(key) {
    const keys = key.split('.');
    let value = i18n['zh-Hans'];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }
    
    return value;
}

// 自动替换页面中的i18n标记
function replaceI18nContent() {
    // 替换所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // 替换所有带有data-i18n-placeholder属性的input元素
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = t(key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // 替换所有带有data-i18n-title属性的元素
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
        const key = element.getAttribute('data-i18n-title');
        const translation = t(key);
        if (translation) {
            element.title = translation;
        }
    });
    
    // 替换所有带有data-i18n-alt属性的img元素
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        const translation = t(key);
        if (translation) {
            element.alt = translation;
        }
    });
}

// 页面加载完成后自动替换
document.addEventListener('DOMContentLoaded', replaceI18nContent);

// 导出到全局
window.i18n = i18n;
window.t = t;
window.getCurrentLanguage = getCurrentLanguage;
window.replaceI18nContent = replaceI18nContent;
