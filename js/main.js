// 字体加载优化 - 使用更简单的方法

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initAnalytics();
    initGameCards();
    initDonationTracking();
    initScrollTracking();
    initLanguageSelector();
});

// Google Analytics 事件跟踪
function initAnalytics() {
    // 页面浏览跟踪
    gtag('event', 'page_view', {
        'page_title': 'OneOne Games Homepage',
        'page_location': window.location.href,
        'user_type': 'child_4_10'
    });

    // 页面停留时间跟踪
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        gtag('event', 'timing_complete', {
            'name': 'page_load',
            'value': timeSpent,
            'event_category': 'engagement'
        });
    });
}

// 游戏卡片交互
function initGameCards() {
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        // 为coming soon卡片添加特殊处理
        if (card.classList.contains('coming-soon')) {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                showComingSoonMessage();
            });
        } else {
            // 为可点击的游戏卡片添加点击跟踪
            card.addEventListener('click', function(e) {
                trackGameClick(this);
            });
        }

        // 添加悬停效果
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// 显示即将推出消息
function showComingSoonMessage() {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'coming-soon-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h3>🎮 Coming Soon!</h3>
            <p>More exciting games are under development. Stay tuned!</p>
            <button class="modal-close">Got it!</button>
        </div>
    `;

    // 添加样式
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;

    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 16px;
        text-align: center;
        max-width: 400px;
        margin: 1rem;
    `;

    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        background: #667eea;
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 1rem;
        font-weight: 600;
    `;

    // 关闭模态框
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });

    document.body.appendChild(modal);

    // 跟踪事件
    gtag('event', 'coming_soon_click', {
        'event_category': 'game_engagement',
        'event_label': 'Coming Soon Modal',
        'value': 1
    });
}

// 跟踪游戏点击
function trackGameClick(card) {
    const gameTitle = card.querySelector('.game-title').textContent.trim();
    const gameIcon = card.querySelector('.game-icon').textContent;
    const hasNewBadge = card.querySelector('.new-badge') !== null;
    const hasHotBadge = card.querySelector('.hot-badge') !== null;
    const gameUrl = card.getAttribute('href');
    
    gtag('event', 'game_click', {
        'event_category': 'game_engagement',
        'event_label': gameTitle,
        'game_name': gameTitle,
        'game_emoji': gameIcon,
        'has_new_badge': hasNewBadge,
        'has_hot_badge': hasHotBadge,
        'game_url': gameUrl,
        'value': 1
    });
}

// 捐赠跟踪
function initDonationTracking() {
    const donateButtons = document.querySelectorAll('.donate-button');
    
    donateButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            gtag('event', 'donate_click', {
                'event_category': 'donation',
                'event_label': 'Buy a Cake $9.90',
                'value': 9.90,
                'currency': 'USD',
                'donation_amount': 9.90,
                'button_location': 'main_section'
            });
        });
    });
}

// 滚动跟踪
function initScrollTracking() {
    let scrollDepth = 0;
    const scrollThresholds = [25, 50, 75, 100];
    const trackedScrolls = new Set();

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        // 跟踪滚动深度
        scrollThresholds.forEach(threshold => {
            if (scrollPercent >= threshold && !trackedScrolls.has(threshold)) {
                trackedScrolls.add(threshold);
                gtag('event', 'scroll', {
                    'event_category': 'engagement',
                    'event_label': `scroll_depth_${threshold}%`,
                    'value': threshold,
                    'scroll_percentage': scrollPercent
                });
            }
        });

        // 跟踪滚动到底部
        if (scrollPercent >= 95 && !trackedScrolls.has('bottom')) {
            trackedScrolls.add('bottom');
            gtag('event', 'scroll', {
                'event_category': 'engagement',
                'event_label': 'scroll_to_bottom',
                'value': 100,
                'scroll_percentage': scrollPercent
            });
        }
    });
}

// 语言选择器
function initLanguageSelector() {
    const languageBtn = document.querySelector('.language-btn');
    
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            // 这里可以添加语言切换逻辑
            console.log('Language selector clicked');
            
            gtag('event', 'language_selector_click', {
                'event_category': 'navigation',
                'event_label': 'Language Selector',
                'value': 1
            });
        });
    }
}

// 导航链接跟踪
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link')) {
        const linkText = e.target.textContent.trim();
        
        gtag('event', 'navigation_click', {
            'event_category': 'navigation',
            'event_label': linkText,
            'value': 1
        });
    }
});

// 平滑滚动效果
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // 跟踪页面加载完成
    gtag('event', 'page_loaded', {
        'event_category': 'performance',
        'event_label': 'Page Load Complete',
        'value': 1
    });
});

// 错误跟踪
window.addEventListener('error', function(e) {
    gtag('event', 'error', {
        'event_category': 'error',
        'event_label': e.message,
        'value': 1
    });
});

// 性能监控
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            
            gtag('event', 'performance', {
                'event_category': 'performance',
                'event_label': 'Page Load Time',
                'value': Math.round(perfData.loadEventEnd - perfData.loadEventStart)
            });
        }, 0);
    });
}
