import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

function Footer() {
    const currentYear = new Date().getFullYear();
    const { t, langPrefix } = useLanguage();

    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {currentYear} bltz.blog. {t('footer.rights')}</p>
                <p className="footer-submit">
                    <Link to={langPrefix + '/submit'} className="footer-submit-link">
                        {t('footer.submitLink')}
                    </Link>
                </p>
                <p className="footer-note">
                    {t('footer.affiliate')}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
