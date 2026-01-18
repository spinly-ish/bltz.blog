/**
 * bltz.blog - Main JavaScript
 * Динамическая генерация карточек и управление приложением
 */

document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

/**
 * Инициализация приложения
 */
function initApp() {
    const appGrid = document.querySelector('.app-grid');
    
    // Проверяем, что мы на главной странице
    if (appGrid && window.appsData) {
        // Генерируем карточки из данных
        renderAppCards(window.appsData);
        
        // Инициализируем фильтрацию по категориям
        initCategoryFilter();
    }
    
    // Проверяем, что мы на странице детального просмотра
    const detailContainer = document.querySelector('.detail-container');
    if (detailContainer && window.appsData) {
        loadAppDetail();
    }
}

/**
 * Генерирует HTML карточки и вставляет в DOM
 * @param {Array} apps - Массив объектов приложений
 */
function renderAppCards(apps) {
    const appGrid = document.querySelector('.app-grid');
    if (!appGrid) return;
    
    appGrid.innerHTML = apps.map(app => generateCardHTML(app)).join('');
}

/**
 * Генерирует HTML для одной карточки
 * @param {Object} app - Объект приложения
 * @returns {string} - HTML строка
 */
function generateCardHTML(app) {
    return `
        <a href="app-detail.html?id=${app.id}" class="app-card" data-category="${app.category}">
            <div class="app-icon" style="background: ${app.gradient};">
                <span>${app.icon}</span>
            </div>
            <div class="app-info">
                <h3 class="app-name">${app.name}</h3>
                <p class="app-tagline">${app.tagline}</p>
                <div class="app-meta">
                    <span class="app-category">${app.categoryDisplay}</span>
                    <span class="app-rating">⭐ ${app.rating}</span>
                </div>
            </div>
        </a>
    `;
}

/**
 * Инициализация фильтрации по категориям
 */
function initCategoryFilter() {
    const categoryItems = document.querySelectorAll('.category-item');
    const contentTitle = document.querySelector('.content-title');
    
    if (!categoryItems.length) return;
    
    categoryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Обновляем активное состояние
            categoryItems.forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            
            // Получаем выбранную категорию
            const selectedCategory = this.dataset.category;
            
            // Обновляем заголовок
            if (contentTitle) {
                const categoryName = this.querySelector('span:last-child').textContent;
                contentTitle.textContent = categoryName;
            }
            
            // Фильтруем и перерисовываем карточки
            const filteredApps = window.getAppsByCategory(selectedCategory);
            renderAppCards(filteredApps);
        });
    });
}

/**
 * Загружает данные приложения на странице детального просмотра
 */
function loadAppDetail() {
    // Получаем ID из URL
    const urlParams = new URLSearchParams(window.location.search);
    const appId = urlParams.get('id');
    
    if (!appId) {
        showError('App not found');
        return;
    }
    
    // Находим приложение по ID
    const app = window.getAppById(appId);
    
    if (!app) {
        showError('App not found');
        return;
    }
    
    // Обновляем заголовок страницы
    document.title = `${app.name} - bltz.blog`;
    
    // Обновляем breadcrumb
    const breadcrumbCurrent = document.querySelector('.breadcrumb-current');
    if (breadcrumbCurrent) {
        breadcrumbCurrent.textContent = app.name;
    }
    
    // Обновляем header секцию
    updateDetailHeader(app);
    
    // Обновляем описание
    updateDescription(app);
    
    // Обновляем информацию
    updateAppInfo(app);
    
    // Обновляем похожие приложения
    updateRelatedApps(app);
    
    // Обновляем CTA секцию
    updateCTA(app);
}

/**
 * Обновляет header секцию на странице детального просмотра
 * @param {Object} app - Объект приложения
 */
function updateDetailHeader(app) {
    // Иконка
    const iconEl = document.querySelector('.app-detail-icon');
    if (iconEl) {
        iconEl.style.background = app.gradient;
        iconEl.innerHTML = `<span>${app.icon}</span>`;
    }
    
    // Название
    const nameEl = document.querySelector('.app-detail-name');
    if (nameEl) {
        nameEl.textContent = app.name;
    }
    
    // Tagline
    const taglineEl = document.querySelector('.app-detail-tagline');
    if (taglineEl) {
        taglineEl.textContent = app.tagline;
    }
    
    // Категория
    const categoryEl = document.querySelector('.app-detail-category');
    if (categoryEl) {
        categoryEl.textContent = app.categoryDisplay;
    }
    
    // Рейтинг
    const ratingEl = document.querySelector('.app-detail-rating');
    if (ratingEl) {
        ratingEl.textContent = `⭐ ${app.rating} (${app.reviewsCount} reviews)`;
    }
    
    // Цена
    const priceEl = document.querySelector('.app-detail-price');
    if (priceEl) {
        priceEl.textContent = app.price;
    }
    
    // Кнопка App Store
    const appStoreBtn = document.querySelector('.app-detail-header .btn-appstore');
    if (appStoreBtn) {
        appStoreBtn.href = app.appStoreUrl;
    }
}

/**
 * Обновляет секцию описания
 * @param {Object} app - Объект приложения
 */
function updateDescription(app) {
    const descriptionContent = document.querySelector('.description-content');
    if (!descriptionContent) return;
    
    // Генерируем features HTML
    const featuresHTML = app.features.map(feature => `
        <li><strong>${feature.title}:</strong> ${feature.desc}</li>
    `).join('');
    
    descriptionContent.innerHTML = `
        ${app.description}
        
        <h3>Key Features</h3>
        <ul class="feature-list">
            ${featuresHTML}
        </ul>

        <h3>Why We Love It</h3>
        <p>${app.whyWeLoveIt}</p>

        <h3>Who It's For</h3>
        <p>${app.whoItsFor}</p>
    `;
}

/**
 * Обновляет информационную секцию
 * @param {Object} app - Объект приложения
 */
function updateAppInfo(app) {
    const infoGrid = document.querySelector('.info-grid');
    if (!infoGrid) return;
    
    infoGrid.innerHTML = `
        <div class="info-item">
            <span class="info-label">Developer</span>
            <span class="info-value">${app.developer}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Size</span>
            <span class="info-value">${app.size}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Category</span>
            <span class="info-value">${app.categoryDisplay}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Compatibility</span>
            <span class="info-value">${app.compatibility}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Languages</span>
            <span class="info-value">${app.languages}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Age Rating</span>
            <span class="info-value">${app.ageRating}</span>
        </div>
    `;
}

/**
 * Обновляет секцию похожих приложений
 * @param {Object} app - Объект приложения
 */
function updateRelatedApps(app) {
    const relatedGrid = document.querySelector('.related-grid');
    if (!relatedGrid) return;
    
    // Получаем приложения той же категории, исключая текущее
    let relatedApps = window.appsData
        .filter(a => a.category === app.category && a.id !== app.id)
        .slice(0, 3);
    
    // Если недостаточно приложений в категории, добавляем из других
    if (relatedApps.length < 3) {
        const otherApps = window.appsData
            .filter(a => a.id !== app.id && !relatedApps.includes(a))
            .slice(0, 3 - relatedApps.length);
        relatedApps = [...relatedApps, ...otherApps];
    }
    
    relatedGrid.innerHTML = relatedApps.map(relatedApp => generateCardHTML(relatedApp)).join('');
}

/**
 * Обновляет CTA секцию
 * @param {Object} app - Объект приложения
 */
function updateCTA(app) {
    const ctaContent = document.querySelector('.cta-content');
    if (!ctaContent) return;
    
    ctaContent.innerHTML = `
        <h2>Ready to try ${app.name}?</h2>
        <p>Download now and ${app.tagline.toLowerCase()}.</p>
        <a href="${app.appStoreUrl}" target="_blank" rel="noopener" class="btn btn-appstore btn-large">
            <svg class="apple-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
        </a>
    `;
}

/**
 * Показывает сообщение об ошибке
 * @param {string} message - Текст ошибки
 */
function showError(message) {
    const detailContainer = document.querySelector('.detail-container');
    if (detailContainer) {
        detailContainer.innerHTML = `
            <div class="error-message">
                <h1>😕 ${message}</h1>
                <p>The app you're looking for doesn't exist or has been removed.</p>
                <a href="index.html" class="btn btn-primary">Back to Home</a>
            </div>
        `;
    }
}
