/**
 * AppCard.jsx — Компонент карточки приложения
 * 
 * Это ПЕРЕИСПОЛЬЗУЕМЫЙ компонент — одна из главных идей React!
 * Вместо генерации HTML строк (как в vanilla JS), мы описываем
 * UI декларативно через JSX.
 * 
 * Props (входные параметры):
 * - app: объект с данными приложения
 * 
 * Преимущества React-компонента:
 * 1. Типобезопасность — легко добавить PropTypes или TypeScript
 * 2. Изоляция — компонент не зависит от внешнего состояния
 * 3. Тестируемость — можно тестировать отдельно
 * 4. Переиспользование — используется и на главной, и в Related Apps
 */

import { Link } from 'react-router-dom'
// Импортируем PropTypes для валидации props (опционально, но полезно)
import PropTypes from 'prop-types'

function AppCard({ app }) {
    // Деструктуризация объекта app для удобства
    const {
        id,
        name,
        tagline,
        category,
        categoryDisplay,
        rating,
        iconImage
    } = app;

    return (
        // Link из React Router — правильный способ навигации в SPA
        // to={`/app/${id}`} — относительный путь, basename добавится автоматически
        <Link
            to={`/app/${id}`}
            className="app-card"
            data-category={category}
        >
            {/* Иконка приложения */}
            <div className="app-icon">
                <img
                    src={iconImage}
                    alt={`${name} icon`}
                    loading="lazy"
                />
            </div>
            
            {/* Информация о приложении */}
            <div className="app-info">
                <h3 className="app-name">{name}</h3>
                <p className="app-tagline">{tagline}</p>
                
                {/* Метаданные: категория и рейтинг */}
                <div className="app-meta">
                    <span className="app-category">{categoryDisplay}</span>
                    <span className="app-rating">⭐ {rating}</span>
                </div>
            </div>
        </Link>
    );
}

// PropTypes — документация и валидация props
// Помогает отловить ошибки на этапе разработки
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
