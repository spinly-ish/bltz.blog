/**
 * NotFound.jsx — 404 page with typewriter search animation
 */

import { Link } from 'react-router-dom'
import useTypewriter from '../hooks/useTypewriter'
import useSEO from '../hooks/useSEO'
import { useLanguage } from '../i18n/LanguageContext'

function NotFound() {
    const { t, langPrefix } = useLanguage();

    useSEO({
        title: t('seo.notFound.title'),
        description: t('seo.notFound.description'),
    });

    const phrases = t('notFound.phrases');
    const typedText = useTypewriter(phrases, {
        typeSpeed: 70,
        deleteSpeed: 40,
        pauseTime: 1500,
    });

    return (
        <main className="main">
            <div className="not-found">
                <div className="not-found-code">404</div>
                <div className="not-found-search">
                    <span className="not-found-prompt">&gt; searching: </span>
                    <span className="not-found-typed">{typedText}</span>
                    <span className="hero-cursor" />
                </div>
                <p className="not-found-message">
                    {t('notFound.message.line1')}<br />
                    {t('notFound.message.line2')}
                </p>
                <Link to={langPrefix + '/'} className="btn btn-primary not-found-btn">
                    {t('notFound.browseAll')}
                </Link>
            </div>
        </main>
    );
}

export default NotFound;
