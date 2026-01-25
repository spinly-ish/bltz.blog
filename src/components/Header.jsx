/**
 * Header.jsx — Site header with navigation
 *
 * Contains logo, search field, and dropdown navigation.
 * Navigation is only shown on the home page.
 */

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import HeaderNav from './HeaderNav'

function Header({ showNav = false, activeFilter, onFilterChange }) {
    return (
        <header className="header">
            <div className="header-container">
                {/* Logo — link to home via React Router */}
                <Link to="/" className="logo">
                    <span className="logo-icon">⚡</span>
                    <span className="logo-text">bltz</span>
                </Link>

                {/* Search and Navigation group */}
                {showNav && (
                    <div className="header-center">
                        {/* Search field — placeholder for future */}
                        <div className="search-field">
                            <span className="search-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"/>
                                    <path d="m21 21-4.35-4.35"/>
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search apps..."
                                disabled
                            />
                        </div>

                        {/* Navigation dropdowns */}
                        {activeFilter && onFilterChange && (
                            <HeaderNav
                                activeFilter={activeFilter}
                                onFilterChange={onFilterChange}
                            />
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}

Header.propTypes = {
    showNav: PropTypes.bool,
    activeFilter: PropTypes.shape({
        type: PropTypes.oneOf(['category', 'setup']).isRequired,
        id: PropTypes.string.isRequired
    }),
    onFilterChange: PropTypes.func,
};

export default Header;
