/**
 * AppDetail.jsx — Страница детальной информации о приложении
 * 
 * Использует:
 * - useParams из React Router для получения ID из URL
 * - getAppById для получения данных приложения
 * - Link для навигации назад
 * 
 * Структура и классы соответствуют оригинальному app-detail.html
 */

import { useParams, Link } from 'react-router-dom';
import { getAppById, getAppsByCategory } from '../data/appsData';
import AppCard from './AppCard';

function AppDetail() {
    // useParams — хук React Router, извлекает параметры из URL
    const { id } = useParams();
    
    // Получаем данные приложения по ID
    const app = getAppById(id);
    
    // Если приложение не найдено — показываем ошибку
    if (!app) {
        return (
            <main className="main">
                <div className="detail-container">
                    <div className="error-message">
                        <h1>App not found</h1>
                        <p>The app with ID {id} doesn't exist.</p>
                        <Link to="/" className="btn btn-primary">Back to Home</Link>
                    </div>
                </div>
            </main>
        );
    }

    // Деструктуризация данных приложения
    const {
        name,
        tagline,
        category,
        categoryDisplay,
        rating,
        reviewsCount,
        icon,
        gradient,
        appStoreUrl,
        price,
        developer,
        size,
        compatibility,
        languages,
        ageRating,
        description,
        features,
        whyWeLoveIt,
        whoItsFor
    } = app;

    // Получаем похожие приложения (той же категории, исключая текущее)
    const relatedApps = getAppsByCategory(category)
        .filter(a => a.id !== app.id)
        .slice(0, 3);

    return (
        <main className="main">
            <div className="detail-container">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span className="breadcrumb-separator">/</span>
                    <Link to="/">Apps</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{name}</span>
                </nav>

                {/* App Header Section */}
                <section className="app-detail-header">
                    <div className="app-detail-icon" style={{ background: gradient }}>
                        <span>{icon}</span>
                    </div>
                    <div className="app-detail-info">
                        <h1 className="app-detail-name">{name}</h1>
                        <p className="app-detail-tagline">{tagline}</p>
                        <div className="app-detail-meta">
                            <span className="app-detail-category">{categoryDisplay}</span>
                            <span className="app-detail-rating">⭐ {rating}</span>
                            <span className="app-detail-price">{price}</span>
                        </div>
                        <a 
                            href={appStoreUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-appstore"
                        >
                            <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            Download on App Store
                        </a>
                    </div>
                </section>

                {/* Screenshots Section */}
                <section className="app-screenshots">
                    <h2 className="section-title">Screenshots</h2>
                    <div className="screenshots-grid">
                        <div className="screenshot-placeholder">
                            <span>📱</span>
                            <p>Screenshot 1</p>
                        </div>
                        <div className="screenshot-placeholder">
                            <span>📱</span>
                            <p>Screenshot 2</p>
                        </div>
                        <div className="screenshot-placeholder">
                            <span>📱</span>
                            <p>Screenshot 3</p>
                        </div>
                        <div className="screenshot-placeholder">
                            <span>📱</span>
                            <p>Screenshot 4</p>
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section className="app-description">
                    <h2 className="section-title">About This App</h2>
                    <div className="description-content">
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                        
                        {/* Key Features */}
                        <h3>Key Features</h3>
                        <ul className="feature-list">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <strong>{feature.title}:</strong> {feature.desc}
                                </li>
                            ))}
                        </ul>
                        
                        {/* Why We Love It */}
                        <h3>Why We Love It</h3>
                        <p>{whyWeLoveIt}</p>
                        
                        {/* Who It's For */}
                        <h3>Who It's For</h3>
                        <p>{whoItsFor}</p>
                    </div>
                </section>

                {/* App Info Section */}
                <section className="app-info-section">
                    <h2 className="section-title">Information</h2>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">Developer</span>
                            <span className="info-value">{developer}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Size</span>
                            <span className="info-value">{size}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Category</span>
                            <span className="info-value">{categoryDisplay}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Compatibility</span>
                            <span className="info-value">{compatibility}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Languages</span>
                            <span className="info-value">{languages}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">Age Rating</span>
                            <span className="info-value">{ageRating}</span>
                        </div>
                    </div>
                </section>

                {/* Related Apps Section */}
                {relatedApps.length > 0 && (
                    <section className="related-apps">
                        <h2 className="section-title">You Might Also Like</h2>
                        <div className="related-grid">
                            {relatedApps.map(relatedApp => (
                                <AppCard key={relatedApp.id} app={relatedApp} />
                            ))}
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2>Ready to get started?</h2>
                        <p>Download {name} now from the App Store.</p>
                        <a 
                            href={appStoreUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-appstore btn-large"
                        >
                            <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                            </svg>
                            Download on App Store
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AppDetail;
