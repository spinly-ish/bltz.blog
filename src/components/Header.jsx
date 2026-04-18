/**
 * Header.jsx — Site header with navigation
 *
 * Contains logo, search field, dropdown navigation, theme toggle, and language switcher.
 * Navigation is only shown on the home page.
 */

import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import HeaderNav from './HeaderNav'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'

function Header({ showNav = false, searchQuery = '', onSearchChange }) {
    const navigate = useNavigate();
    const { t, langPrefix } = useLanguage();

    const handleLogoClick = (e) => {
        e.preventDefault();
        onSearchChange?.('');
        navigate(langPrefix + '/');
    };

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo — link to home, resets filters */}
                <Link to={langPrefix + '/'} className="logo" onClick={handleLogoClick}>
                    <span className="logo-icon">⚡</span>
                    <span className="logo-text">bltz</span>
                </Link>

                {/* Search and Navigation group */}
                {showNav && (
                    <div className="header-center">
                        {/* Search field */}
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
                                placeholder={t('search.placeholder')}
                                value={searchQuery}
                                onChange={(e) => onSearchChange?.(e.target.value)}
                            />
                        </div>

                        {/* Navigation dropdowns */}
                        <HeaderNav />
                    </div>
                )}

                {/* Right section with theme toggle and language switcher */}
                <div className="header-right">
                    <LanguageSwitcher />
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    showNav: PropTypes.bool,
    searchQuery: PropTypes.string,
    onSearchChange: PropTypes.func,
};

export default Header;
