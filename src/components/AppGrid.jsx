/**
 * AppGrid.jsx — Grid of app cards
 *
 * Props:
 * - apps: array of app objects
 */

import PropTypes from 'prop-types'
import AppCard from './AppCard'
import { useLanguage } from '../i18n/LanguageContext'

function AppGrid({ apps }) {
    const { t } = useLanguage();

    if (!apps || apps.length === 0) {
        return (
            <div className="app-grid">
                <p style={{ color: 'var(--text-muted)' }}>
                    {t('grid.empty')}
                </p>
            </div>
        );
    }

    return (
        <div className="app-grid">
            {apps.map(app => (
                <AppCard key={app.id} app={app} />
            ))}
        </div>
    );
}

AppGrid.propTypes = {
    apps: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default AppGrid;
