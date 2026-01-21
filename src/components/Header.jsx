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
                    <span className="logo-text">bltz.blog</span>
                </Link>
                
                {/* Навигация — кнопки авторизации */}
                <nav className="header-nav">
                    <a href="#" className="btn btn-ghost">Sign In</a>
                    <a href="#" className="btn btn-primary">Create Account</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
