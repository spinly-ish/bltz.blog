/**
 * Footer.jsx — Компонент подвала сайта
 * 
 * Статический компонент без состояния.
 * Содержит:
 * - Copyright
 * - Affiliate disclosure (важно для affiliate-сайтов!)
 */

import { Link } from 'react-router-dom';

function Footer() {
    // Получаем текущий год динамически
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {currentYear} bltz.blog. All rights reserved.</p>
                <p className="footer-submit">
                    <Link to="/submit" className="footer-submit-link">
                        Are you a developer? Submit your app &rarr;
                    </Link>
                </p>
                <p className="footer-note">
                    Affiliate disclosure: We may earn a commission from qualifying purchases.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
