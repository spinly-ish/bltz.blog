/**
 * HomePage.jsx — Home page with app list
 *
 * Contains:
 * - App card grid
 * - Filtering by categories and setups
 *
 * Filter state is lifted to App.jsx for Header access.
 */

import PropTypes from 'prop-types'
import AppGrid from '../components/AppGrid'
import { getAppsByCategory, getAppsBySetup, getSetupById, categories, appsData } from '../data/appsData'

function HomePage({ activeFilter, searchQuery = '' }) {
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
            return 'Search Results';
        }
        if (activeFilter.type === 'category') {
            const category = categories.find(c => c.id === activeFilter.id);
            return category ? category.name : 'All Apps';
        } else if (activeFilter.type === 'setup') {
            const setup = getSetupById(activeFilter.id);
            return setup ? setup.name : 'Setup';
        }
        return 'All Apps';
    };

    // Get subtitle based on current filter
    const getSubtitle = () => {
        if (searchQuery.trim()) {
            const count = filteredApps.length;
            return count === 0
                ? 'No apps found'
                : `Found ${count} app${count !== 1 ? 's' : ''} for "${searchQuery}"`;
        }
        if (activeFilter.type === 'setup') {
            const setup = getSetupById(activeFilter.id);
            return setup ? setup.description : 'Curated app collection';
        }
        return 'Curated collection of the best macOS apps';
    };

    const showHero = activeFilter.id === 'all' && activeFilter.type === 'category' && !searchQuery.trim();

    return (
        <main className="main">
            <div className="main-container main-container--no-sidebar">
                {/* Hero Section — only on main "All Apps" view */}
                {showHero && (
                    <section className="hero">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Find the right app in 30 seconds. No endless comparisons.
                            </h1>
                            <p className="hero-subtitle">
                                Get a ready answer — not another list of endless options. One best pick + why + a short demo.
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

HomePage.propTypes = {
    activeFilter: PropTypes.shape({
        type: PropTypes.oneOf(['category', 'setup']).isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
    searchQuery: PropTypes.string,
};

export default HomePage;
