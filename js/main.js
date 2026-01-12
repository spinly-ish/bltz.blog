/**
 * bltz.blog - Main JavaScript
 * Simple interactivity for category filtering
 */

document.addEventListener('DOMContentLoaded', function() {
    initCategoryFilter();
});

/**
 * Initialize category filter functionality
 */
function initCategoryFilter() {
    const categoryItems = document.querySelectorAll('.category-item');
    const appCards = document.querySelectorAll('.app-card');
    const contentTitle = document.querySelector('.content-title');
    
    if (!categoryItems.length || !appCards.length) return;
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            categoryItems.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            // Get selected category
            const selectedCategory = this.dataset.category;
            
            // Update title
            if (contentTitle) {
                const categoryName = this.querySelector('span:last-child').textContent;
                contentTitle.textContent = categoryName;
            }
            
            // Filter cards
            filterCards(selectedCategory, appCards);
        });
    });
}

/**
 * Filter app cards by category
 * @param {string} category - Category to filter by
 * @param {NodeList} cards - App card elements
 */
function filterCards(category, cards) {
    cards.forEach(card => {
        const cardCategory = card.dataset.category;
        
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}
