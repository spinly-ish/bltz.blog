import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

function LanguageSwitcher() {
    const { lang } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    const switchLanguage = () => {
        const path = location.pathname;

        if (lang === 'en') {
            navigate('/ru' + path);
        } else {
            const newPath = path.replace(/^\/ru/, '') || '/';
            navigate(newPath);
        }
    };

    return (
        <button
            className="lang-switch"
            onClick={switchLanguage}
            type="button"
            aria-label={lang === 'en' ? 'Switch to Russian' : 'Переключить на английский'}
        >
            {lang === 'en' ? 'RU' : 'EN'}
        </button>
    );
}

export default LanguageSwitcher;
