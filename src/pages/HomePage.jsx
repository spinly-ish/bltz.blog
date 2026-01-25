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
import { getAppsByCategory, getAppsBySetup, getSetupById, categories } from '../data/appsData'

function HomePage({ activeFilter }) {
    // Get filtered apps based on filter type
    const getFilteredApps = () => {
        if (activeFilter.type === 'category') {
            return getAppsByCategory(activeFilter.id);
        } else if (activeFilter.type === 'setup') {
            return getAppsBySetup(activeFilter.id);
        }
        return [];
    };

    // Get title based on current filter
    const getTitle = () => {
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
        if (activeFilter.type === 'setup') {
            const setup = getSetupById(activeFilter.id);
            return setup ? setup.description : 'Curated app collection';
        }
        return 'Curated collection of the best macOS apps';
    };

    const filteredApps = getFilteredApps();

    return (
        <main className="main">
            <div className="main-container main-container--no-sidebar">
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
};

export default HomePage;
