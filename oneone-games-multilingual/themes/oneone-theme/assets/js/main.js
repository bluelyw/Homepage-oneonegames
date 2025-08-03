// GA4 Event Tracking
document.addEventListener('DOMContentLoaded', function() {
    // Page view tracking
    gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href,
        'user_type': 'child_4_10'
    });

    // Game card click tracking
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const gameTitle = this.querySelector('.game-title').textContent.trim();
            const gameEmoji = this.querySelector('.game-emoji').textContent;
            const hasNewBadge = this.querySelector('.new-badge') !== null;
            const hasHotBadge = this.querySelector('.hot-badge') !== null;
            
            gtag('event', 'game_click', {
                'event_category': 'game_engagement',
                'event_label': gameTitle,
                'game_name': gameTitle,
                'game_emoji': gameEmoji,
                'has_new_badge': hasNewBadge,
                'has_hot_badge': hasHotBadge,
                'game_url': this.getAttribute('href'),
                'value': 1
            });
        });
    });

    // Donation click tracking
    const donationElements = document.querySelectorAll('.donation-card, .floating-donate .donate-button');
    donationElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const isFloating = this.closest('.floating-donate');
            const location = isFloating ? 'floating' : 'section';
            
            gtag('event', 'donate_click', {
                'event_category': 'donation',
                'event_label': 'Donate $11',
                'value': 11,
                'currency': 'USD',
                'donation_amount': 11,
                'button_location': location,
                'click_area': this.classList.contains('donation-card') ? 'full_section' : 'button_only'
            });
        });
    });

    // Scroll tracking
    let scrollDepth = 0;
    const scrollThresholds = [25, 50, 75, 100];
    const trackedScrolls = new Set();

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

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

    // Page engagement time tracking
    let startTime = Date.now();
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        gtag('event', 'timing_complete', {
            'name': 'page_load',
            'value': timeSpent,
            'event_category': 'engagement'
        });
    });

    // Add sparkles animation
    const container = document.querySelector('.hero-section');
    if (container) {
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            container.appendChild(sparkle);
        }
    }
}); 