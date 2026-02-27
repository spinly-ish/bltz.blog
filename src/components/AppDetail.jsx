/**
 * AppDetail.jsx — App detail/review page
 *
 * Uses useParams for app ID, localizeApp for translations.
 */

import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAppById, getAppsByCategory } from '../data/appsData';
import { useLanguage } from '../i18n/LanguageContext';
import AppCard from './AppCard';
import NotFound from './NotFound';

function AppDetail() {
    const { id } = useParams();
    const { t, localizeApp, langPrefix } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const rawApp = getAppById(id);

    if (!rawApp) {
        return <NotFound />;
    }

    const app = localizeApp(rawApp);

    const {
        name,
        tagline,
        category,
        categoryDisplay,
        rating,
        reviewsCount,
        iconImage,
        appStoreUrl,
        websiteUrl,
        price,
        developer,
        size,
        compatibility,
        languages,
        ageRating,
        description,
        features,
        whyWeLoveIt,
        whoItsFor,
        videoUrl,
        videoPoster
    } = app;

    const relatedApps = getAppsByCategory(category)
        .filter(a => a.id !== app.id)
        .slice(0, 3);

    return (
        <main className="main">
            <div className="detail-container">
                {/* Breadcrumb */}
                <nav className="breadcrumb">
                    <Link to={langPrefix + '/'}>{t('detail.home')}</Link>
                    <span className="breadcrumb-separator">/</span>
                    <Link to={langPrefix + '/'}>{t('detail.apps')}</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{name}</span>
                </nav>

                {/* App Header Section */}
                <section className="app-detail-header">
                    <div className="app-detail-icon">
                        <img src={iconImage} alt={`${name} icon`} />
                    </div>
                    <div className="app-detail-info">
                        <h1 className="app-detail-name">{name}</h1>
                        <p className="app-detail-tagline">{tagline}</p>
                        <div className="app-detail-meta">
                            <span className="app-detail-category">{categoryDisplay}</span>
                            <span className="app-detail-rating">⭐ {rating}</span>
                            <span className="app-detail-price">{price}</span>
                        </div>
                        <div className="app-detail-buttons">
                            {appStoreUrl && (
                                <a
                                    href={appStoreUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-appstore"
                                >
                                    <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                    </svg>
                                    {t('detail.downloadOnAppStore')}
                                </a>
                            )}
                            {websiteUrl && (
                                <a
                                    href={websiteUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-website"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                    </svg>
                                    {t('detail.visitWebsite')}
                                </a>
                            )}
                        </div>
                    </div>
                </section>

                {/* Description Section */}
                <section className="app-description">
                    <h2 className="section-title">{t('detail.aboutThisApp')}</h2>
                    <div className="description-content">
                        {videoUrl && (
                            <div className="app-video">
                                <video controls preload="metadata" playsInline {...(videoPoster ? { poster: videoPoster } : {})}>
                                    <source src={videoUrl} type="video/mp4" />
                                </video>
                            </div>
                        )}
                        <div dangerouslySetInnerHTML={{ __html: description }} />

                        {/* Key Features */}
                        <h3>{t('detail.keyFeatures')}</h3>
                        <ul className="feature-list">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <strong>{feature.title}:</strong> {feature.desc}
                                </li>
                            ))}
                        </ul>

                        {/* Why We Love It */}
                        <h3>{t('detail.whyWeLoveIt')}</h3>
                        <p>{whyWeLoveIt}</p>

                        {/* Who It's For */}
                        <h3>{t('detail.whoItsFor')}</h3>
                        <p>{whoItsFor}</p>
                    </div>
                </section>

                {/* App Info Section */}
                <section className="app-info-section">
                    <h2 className="section-title">{t('detail.information')}</h2>
                    <div className="info-grid">
                        <div className="info-item">
                            <span className="info-label">{t('detail.developer')}</span>
                            <span className="info-value">{developer}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">{t('detail.size')}</span>
                            <span className="info-value">{size}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">{t('detail.category')}</span>
                            <span className="info-value">{categoryDisplay}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">{t('detail.compatibility')}</span>
                            <span className="info-value">{compatibility}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">{t('detail.languages')}</span>
                            <span className="info-value">{languages}</span>
                        </div>
                        <div className="info-item">
                            <span className="info-label">{t('detail.ageRating')}</span>
                            <span className="info-value">{ageRating}</span>
                        </div>
                    </div>
                </section>

                {/* Related Apps Section */}
                {relatedApps.length > 0 && (
                    <section className="related-apps">
                        <h2 className="section-title">{t('detail.youMightAlsoLike')}</h2>
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
                        <h2>{t('detail.readyToGetStarted')}</h2>
                        <p>
                            {appStoreUrl
                                ? t('detail.downloadFrom', { name })
                                : t('detail.getFrom', { name })}
                        </p>
                        {appStoreUrl ? (
                            <a
                                href={appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-appstore btn-large"
                            >
                                <svg className="apple-icon" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                                </svg>
                                {t('detail.downloadOnAppStore')}
                            </a>
                        ) : websiteUrl && (
                            <a
                                href={websiteUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-website btn-large"
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                </svg>
                                {t('detail.visitWebsite')}
                            </a>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}

export default AppDetail;
