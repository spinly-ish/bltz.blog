import { createContext, useContext, useMemo } from 'react';
import en from './translations/en';
import ru from './translations/ru';
import appsRu from './appsData.ru';

const translations = { en, ru };

const LanguageContext = createContext();

export function LanguageProvider({ lang = 'en', children }) {
    const value = useMemo(() => {
        const dict = translations[lang] || translations.en;

        const t = (key, params) => {
            let str = dict[key] ?? translations.en[key] ?? key;
            if (params) {
                Object.entries(params).forEach(([k, v]) => {
                    str = str.replace(`{${k}}`, v);
                });
            }
            return str;
        };

        const localizeApp = (app) => {
            if (lang === 'en' || !app) return app;
            const override = appsRu[app.id];
            if (!override) return app;
            return { ...app, ...override };
        };

        const langPrefix = lang === 'en' ? '' : `/${lang}`;

        return { lang, t, localizeApp, langPrefix };
    }, [lang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
