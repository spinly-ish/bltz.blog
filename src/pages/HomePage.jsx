/**
 * HomePage.jsx — Listing page (all apps / category / setup)
 *
 * Filter is derived from URL:
 *   /                     → all apps
 *   /category/:categoryId → category filter
 *   /setup/:setupId       → setup filter
 *
 * Search query comes from LangLayout via Outlet context (not in URL —
 * search is a UX convenience, not an SEO-meaningful page).
 */

import { useParams, useOutletContext } from 'react-router-dom'
import AppGrid from '../components/AppGrid'
import useTypewriter from '../hooks/useTypewriter'
import useSEO from '../hooks/useSEO'
import { getAppsByCategory, getAppsBySetup, getSetupById, appsData } from '../data/appsData'
import { useLanguage } from '../i18n/LanguageContext'

function HomePage() {
    const { searchQuery = '' } = useOutletContext();
    const { t, langPrefix } = useLanguage();
    const { categoryId, setupId } = useParams();

    const activeFilter = setupId
        ? { type: 'setup', id: setupId }
        : { type: 'category', id: categoryId || 'all' };

    const setup = activeFilter.type === 'setup' ? getSetupById(activeFilter.id) : null;
    const categoryExists = activeFilter.type === 'category'
        && (activeFilter.id === 'all' || appsData.some(a => a.category === activeFilter.id));
    const isValidFilter = activeFilter.type === 'setup' ? !!setup : categoryExists;

    // Derive filtered list
    let apps;
    if (searchQuery.trim()) {
        apps = appsData;
    } else if (activeFilter.type === 'category') {
        apps = isValidFilter ? getAppsByCategory(activeFilter.id) : [];
    } else {
        apps = setup ? getAppsBySetup(activeFilter.id) : [];
    }

    if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        apps = apps.filter(app =>
            app.name.toLowerCase().includes(query) ||
            app.tagline.toLowerCase().includes(query) ||
            app.developer.toLowerCase().includes(query) ||
            app.categoryDisplay.toLowerCase().includes(query)
        );
    }

    // Titles
    const getTitle = () => {
        if (searchQuery.trim()) return t('content.searchResults');
        if (activeFilter.type === 'setup') return setup ? t(`setup.${setup.id}`) : t('content.setup');
        return t(`cat.${activeFilter.id}`) || t('content.allApps');
    };

    const getSubtitle = () => {
        if (searchQuery.trim()) {
            const count = apps.length;
            if (count === 0) return t('content.noAppsFound');
            return `${t('content.found')} ${count} ${count !== 1 ? t('content.apps') : t('content.app')} ${t('content.for')} "${searchQuery}"`;
        }
        if (activeFilter.type === 'setup') {
            return setup ? t(`setup.${setup.id}.desc`) : t('content.curatedCollection');
        }
        return t('content.subtitle');
    };

    // SEO path + title per filter
    const seoPath = activeFilter.type === 'setup'
        ? `${langPrefix}/setup/${activeFilter.id}`
        : activeFilter.id === 'all'
            ? langPrefix || '/'
            : `${langPrefix}/category/${activeFilter.id}`;

    const seoTitle = activeFilter.id === 'all' && activeFilter.type === 'category'
        ? t('seo.home.title')
        : getTitle();
    const seoDescription = activeFilter.id === 'all' && activeFilter.type === 'category'
        ? t('seo.home.description')
        : getSubtitle();

    useSEO({ title: seoTitle, description: seoDescription, path: seoPath });

    const heroWords = t('hero.words');
    const showHero = activeFilter.id === 'all' && activeFilter.type === 'category' && !searchQuery.trim();
    const typedWord = useTypewriter(heroWords);

    return (
        <main className="main">
            <div className="main-container main-container--no-sidebar">
                {/* Hero Section — only on main "All Apps" view */}
                {showHero && (
                    <section className="hero">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                {t('hero.title.prefix')}<span className="hero-typed">{typedWord}</span><span className="hero-cursor" />{t('hero.title.suffix')}
                            </h1>
                            <p className="hero-subtitle">
                                {t('hero.subtitle')}
                            </p>
                        </div>
                        <div className="hero-video">
                            <div className="hero-video-placeholder">
                                <span className="hero-video-icon">▶</span>
                            </div>
                        </div>
                    </section>
                )}

                {/* Content — app cards grid */}
                <section className="content">
                    <div className="content-header">
                        <h1 className="content-title">{getTitle()}</h1>
                        <p className="content-subtitle">{getSubtitle()}</p>
                    </div>

                    <AppGrid apps={apps} />
                </section>
            </div>
        </main>
    );
}

export default HomePage;
