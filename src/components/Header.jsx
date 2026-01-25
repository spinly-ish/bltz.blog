/**
 * Header.jsx — Компонент шапки сайта
 * 
 * Статический компонент (пока без состояния).
 * В будущем может содержать:
 * - Состояние авторизации пользователя
 * - Мобильное меню (hamburger)
 * - Поиск
 */

import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                {/* Логотип — ссылка на главную через React Router */}
                <Link to="/" className="logo">
                    <span className="logo-icon">⚡</span>
                    <span className="logo-text">bltz</span>
                </Link>
                
            </div>
        </header>
    );
}

export default Header;
