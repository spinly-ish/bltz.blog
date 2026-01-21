/**
 * Sidebar.jsx — Боковая панель с категориями
 * 
 * Это КОНТРОЛИРУЕМЫЙ компонент — его состояние управляется родителем (App.jsx)
 * 
 * Props:
 * - activeCategory: текущая выбранная категория
 * - onCategoryChange: callback-функция для изменения категории
 * 
 * Паттерн "Lifting State Up":
 * Состояние (activeCategory) хранится в App.jsx, а не здесь.
 * Это позволяет синхронизировать Sidebar и AppGrid.
 */

import PropTypes from 'prop-types'
import { categories } from '../data/appsData'

function Sidebar({ activeCategory, onCategoryChange }) {
    /**
     * Обработчик клика по категории
     * Вызывает callback из родительского компонента
     */
    const handleCategoryClick = (categoryId) => {
        // Вызываем функцию из props, которая обновит состояние в App.jsx
        onCategoryChange(categoryId);
    };

    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">Categories</h2>
            
            <ul className="category-list">
                {categories.map(category => (
                    <li key={category.id}>
                        {/*
                          Используем <button> вместо <a> для лучшей доступности (a11y)
                          onClick вместо addEventListener — React-способ обработки событий
                          
                          className с условием: добавляем 'active' если категория выбрана
                          Шаблонные строки (template literals) позволяют динамически формировать классы
                        */}
                        <button
                            className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                            type="button"
                        >
                            <span className="category-icon">{category.icon}</span>
                            <span>{category.name}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

Sidebar.propTypes = {
    activeCategory: PropTypes.string.isRequired,
    onCategoryChange: PropTypes.func.isRequired,
};

export default Sidebar;
