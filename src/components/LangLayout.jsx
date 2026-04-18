import { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { LanguageProvider } from '../i18n/LanguageContext';
import Header from './Header';
import Footer from './Footer';

function LangLayout({ lang = 'en' }) {
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    // Determine if we're on a listing page (home, category, setup) — show search + nav
    const langPrefix = lang === 'en' ? '' : `/${lang}`;
    const rel = location.pathname.startsWith(langPrefix)
        ? location.pathname.slice(langPrefix.length) || '/'
        : location.pathname;
    const isListing = rel === '/' || rel.startsWith('/category/') || rel.startsWith('/setup/');

    // Set document lang attribute and inject hreflang tags
    useEffect(() => {
        document.documentElement.lang = lang;

        // Build hreflang links
        const path = lang === 'en'
            ? location.pathname
            : location.pathname.replace(/^\/ru/, '') || '/';

        const links = [
            { rel: 'alternate', hreflang: 'en', href: `https://bltz.blog${path}` },
            { rel: 'alternate', hreflang: 'ru', href: `https://bltz.blog/ru${path === '/' ? '' : path}` },
            { rel: 'alternate', hreflang: 'x-default', href: `https://bltz.blog${path}` },
        ];

        const elements = links.map(attrs => {
            const link = document.createElement('link');
            Object.entries(attrs).forEach(([k, v]) => link.setAttribute(k, v));
            link.setAttribute('data-hreflang', 'true');
            document.head.appendChild(link);
            return link;
        });

        return () => elements.forEach(el => el.remove());
    }, [lang, location.pathname]);

    return (
        <LanguageProvider lang={lang}>
            <Header
                showNav={isListing}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />
            <Outlet context={{ searchQuery, setSearchQuery }} />
            <Footer />
        </LanguageProvider>
    );
}

export default LangLayout;
