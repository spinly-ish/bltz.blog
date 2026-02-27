/**
 * HomePage.jsx — Home page with app list
 *
 * Contains:
 * - App card grid
 * - Filtering by categories and setups
 *
 * Filter state comes from LangLayout via Outlet context.
 */

import { useOutletContext } from 'react-router-dom'
import AppGrid from '../components/AppGrid'
import useTypewriter from '../hooks/useTypewriter'
import { getAppsByCategory, getAppsBySetup, getSetupById, appsData } from '../data/appsData'
import { useLanguage } from '../i18n/LanguageContext'

function HomePage() {
    const { activeFilter, searchQuery = '' } = useOutletContext();
    const { t } = useLanguage();

    const heroWords = t('hero.words');

    // Get filtered apps based on filter type and search query
    const getFilteredApps = () => {
        let apps;

        // If searching, search across all apps
        if (searchQuery.trim()) {
            apps = appsData;
        } else if (activeFilter.type === 'category') {
            apps = getAppsByCategory(activeFilter.id);
        } else if (activeFilter.type === 'setup') {
            apps = getAppsBySetup(activeFilter.id);
        } else {
            apps = [];
        }

        // Apply search filter
        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            apps = apps.filter(app =>
                app.name.toLowerCase().includes(query) ||
                app.tagline.toLowerCase().includes(query) ||
                app.developer.toLowerCase().includes(query) ||
                app.categoryDisplay.toLowerCase().includes(query)
            );
        }

        return apps;
    };

    const filteredApps = getFilteredApps();

    // Get title based on current filter
    const getTitle = () => {
        if (searchQuery.trim()) {
            return t('content.searchResults');
        }
        if (activeFilter.type === 'category') {
            return t(`cat.${activeFilter.id}`) || t('content.allApps');
        } else if (activeFilter.type === 'setup') {
            const setup = getSetupById(activeFilter.id);
            return setup ? t(`setup.${setup.id}`) : t('content.setup');
        }
        return t('content.allApps');
    };

    // Get subtitle based on current filter
    const getSubtitle = () => {
        if (searchQuery.trim()) {
            const count = filteredApps.length;
            if (count === 0) return t('content.noAppsFound');
            return `${t('content.found')} ${count} ${count !== 1 ? t('content.apps') : t('content.app')} ${t('content.for')} "${searchQuery}"`;
        }
        if (activeFilter.type === 'setup') {
            const setup = getSetupById(activeFilter.id);
            return setup ? t(`setup.${setup.id}.desc`) : t('content.curatedCollection');
        }
        return t('content.subtitle');
    };

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

                    {/* AppGrid — card grid */}
                    <AppGrid apps={filteredApps} />
                </section>
            </div>
        </main>
    );
}

export default HomePage;
