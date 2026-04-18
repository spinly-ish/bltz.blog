/**
 * HeaderNav.jsx — Navigation with dropdown menus
 *
 * Product Hunt-style dropdowns. Active state derived from URL so each
 * category/setup view has its own canonical URL (SEO).
 */

import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { categories, setups } from '../data/appsData'
import { useLanguage } from '../i18n/LanguageContext'

function HeaderNav() {
    const [openMenu, setOpenMenu] = useState(null);
    const timeoutRef = useRef(null);
    const location = useLocation();
    const { t, langPrefix } = useLanguage();

    const handleMouseEnter = (menuId) => {
        clearTimeout(timeoutRef.current);
        setOpenMenu(menuId);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
    };

    // Determine active filter from current URL
    const rel = location.pathname.startsWith(langPrefix)
        ? location.pathname.slice(langPrefix.length) || '/'
        : location.pathname;

    const categoryActive = rel === '/' || rel.startsWith('/category/');
    const setupActive = rel.startsWith('/setup/');
    const activeCategoryId = rel === '/' ? 'all' : rel.match(/^\/category\/([^/]+)/)?.[1];
    const activeSetupId = rel.match(/^\/setup\/([^/]+)/)?.[1];

    const categoryHref = (id) => id === 'all' ? `${langPrefix}/` : `${langPrefix}/category/${id}`;
    const setupHref = (id) => `${langPrefix}/setup/${id}`;

    return (
        <nav className="header-nav">
            {/* Categories Dropdown */}
            <div
                className="nav-dropdown-container"
                onMouseEnter={() => handleMouseEnter('categories')}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    className={`nav-trigger ${categoryActive ? 'active' : ''}`}
                    type="button"
                >
                    {t('nav.categories')}
                    <span className="nav-arrow">▾</span>
                </button>

                {openMenu === 'categories' && (
                    <div className="nav-dropdown">
                        <div className="nav-dropdown-content">
                            {categories.map(category => (
                                <Link
                                    key={category.id}
                                    to={categoryHref(category.id)}
                                    className={`nav-dropdown-item ${activeCategoryId === category.id ? 'active' : ''}`}
                                    onClick={() => setOpenMenu(null)}
                                >
                                    <span className="nav-dropdown-icon">{category.icon}</span>
                                    <span className="nav-dropdown-text">{t(`cat.${category.id}`)}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Setups Dropdown */}
            <div
                className="nav-dropdown-container"
                onMouseEnter={() => handleMouseEnter('setups')}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    className={`nav-trigger ${setupActive ? 'active' : ''}`}
                    type="button"
                >
                    {t('nav.setups')}
                    <span className="nav-arrow">▾</span>
                </button>

                {openMenu === 'setups' && (
                    <div className="nav-dropdown">
                        <div className="nav-dropdown-content">
                            {setups.map(setup => (
                                <Link
                                    key={setup.id}
                                    to={setupHref(setup.id)}
                                    className={`nav-dropdown-item ${activeSetupId === setup.id ? 'active' : ''}`}
                                    onClick={() => setOpenMenu(null)}
                                >
                                    <span className="nav-dropdown-icon">{setup.icon}</span>
                                    <div className="nav-dropdown-item-content">
                                        <span className="nav-dropdown-text">{t(`setup.${setup.id}`)}</span>
                                        <span className="nav-dropdown-desc">{t(`setup.${setup.id}.desc`)}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default HeaderNav;
