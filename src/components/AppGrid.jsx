/**
 * AppGrid.jsx — Сетка карточек приложений
 * 
 * Отвечает за:
 * 1. Отображение списка карточек в виде CSS Grid
 * 2. Обработку пустого состояния (когда нет приложений)
 * 
 * Props:
 * - apps: массив объектов приложений
 * 
 * Ключевые концепции React:
 * - .map() для рендеринга списков
 * - key prop для оптимизации перерисовки
 */

import PropTypes from 'prop-types'
import AppCard from './AppCard'

function AppGrid({ apps }) {
    // Обработка пустого состояния
    if (!apps || apps.length === 0) {
        return (
            <div className="app-grid">
                <p style={{ color: 'var(--text-muted)' }}>
                    No apps found in this category.
                </p>
            </div>
        );
    }

    return (
        <div className="app-grid">
            {/*
              .map() — стандартный паттерн React для рендеринга списков
              
              key={app.id} — уникальный идентификатор для каждого элемента.
              React использует key для эффективного обновления DOM:
              - Без key React перерисовывает весь список при изменении
              - С key React знает, какие элементы изменились, добавились или удалились
              
              Правило: key должен быть уникальным и стабильным (не использовать index!)
            */}
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
