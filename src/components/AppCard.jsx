/**
 * AppCard.jsx — Reusable app card component
 *
 * Props:
 * - app: app data object
 */

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useLanguage } from '../i18n/LanguageContext'

function AppCard({ app }) {
    const { localizeApp, langPrefix } = useLanguage();
    const localized = localizeApp(app);

    const {
        id,
        name,
        tagline,
        category,
        categoryDisplay,
        rating,
        iconImage
    } = localized;

    return (
        <Link
            to={`${langPrefix}/app/${id}`}
            className="app-card"
            data-category={category}
        >
            <div className="app-icon">
                <img
                    src={iconImage}
                    alt={`${name} icon`}
                    loading="lazy"
                />
            </div>

            <div className="app-info">
                <h3 className="app-name">{name}</h3>
                <p className="app-tagline">{tagline}</p>

                <div className="app-meta">
                    <span className="app-category">{categoryDisplay}</span>
                    <span className="app-rating">⭐ {rating}</span>
                </div>
            </div>
        </Link>
    );
}

AppCard.propTypes = {
    app: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        categoryDisplay: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        iconImage: PropTypes.string.isRequired,
    }).isRequired,
};

export default AppCard;
