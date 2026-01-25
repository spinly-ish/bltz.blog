/**
 * HeaderNav.jsx — Navigation with dropdown menus
 *
 * Product Hunt-style navigation with hover dropdowns.
 * Supports both categories and setups filtering.
 */

import { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { categories, setups } from '../data/appsData'

function HeaderNav({ activeFilter, onFilterChange }) {
    const [openMenu, setOpenMenu] = useState(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = (menuId) => {
        clearTimeout(timeoutRef.current);
        setOpenMenu(menuId);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
    };

    const handleItemClick = (type, id) => {
        onFilterChange({ type, id });
        setOpenMenu(null);
    };

    // Check if a filter item is active
    const isActive = (type, id) => {
        return activeFilter.type === type && activeFilter.id === id;
    };

    return (
        <nav className="header-nav">
            {/* Categories Dropdown */}
            <div
                className="nav-dropdown-container"
                onMouseEnter={() => handleMouseEnter('categories')}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    className={`nav-trigger ${activeFilter.type === 'category' ? 'active' : ''}`}
                    type="button"
                >
                    CATEGORIES
                    <span className="nav-arrow">▾</span>
                </button>

                {openMenu === 'categories' && (
                    <div className="nav-dropdown">
                        <div className="nav-dropdown-content">
                            {categories.map(category => (
                                <button
                                    key={category.id}
                                    className={`nav-dropdown-item ${isActive('category', category.id) ? 'active' : ''}`}
                                    onClick={() => handleItemClick('category', category.id)}
                                    type="button"
                                >
                                    <span className="nav-dropdown-icon">{category.icon}</span>
                                    <span className="nav-dropdown-text">{category.name}</span>
                                </button>
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
                    className={`nav-trigger ${activeFilter.type === 'setup' ? 'active' : ''}`}
                    type="button"
                >
                    SETUPS
                    <span className="nav-arrow">▾</span>
                </button>

                {openMenu === 'setups' && (
                    <div className="nav-dropdown">
                        <div className="nav-dropdown-content">
                            {setups.map(setup => (
                                <button
                                    key={setup.id}
                                    className={`nav-dropdown-item ${isActive('setup', setup.id) ? 'active' : ''}`}
                                    onClick={() => handleItemClick('setup', setup.id)}
                                    type="button"
                                >
                                    <span className="nav-dropdown-icon">{setup.icon}</span>
                                    <div className="nav-dropdown-item-content">
                                        <span className="nav-dropdown-text">{setup.name}</span>
                                        <span className="nav-dropdown-desc">{setup.description}</span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

HeaderNav.propTypes = {
    activeFilter: PropTypes.shape({
        type: PropTypes.oneOf(['category', 'setup']).isRequired,
        id: PropTypes.string.isRequired
    }).isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default HeaderNav;
