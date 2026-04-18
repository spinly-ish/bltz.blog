import { useEffect } from 'react';

const SITE_URL = 'https://bltz.blog';
const SITE_NAME = 'bltz.blog';

function setMeta(selector, create, value) {
    let el = document.head.querySelector(selector);
    if (!el) {
        el = create();
        document.head.appendChild(el);
    }
    el.setAttribute('content', value);
    return el;
}

function setLink(rel, href) {
    let el = document.head.querySelector(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
    return el;
}

export default function useSEO({ title, description, path = '', image }) {
    useEffect(() => {
        const fullTitle = title ? `${title} — ${SITE_NAME}` : `${SITE_NAME} — Find the right app in 30 seconds`;
        const url = `${SITE_URL}${path || ''}`;

        document.title = fullTitle;

        setMeta('meta[name="description"]',
            () => Object.assign(document.createElement('meta'), { name: 'description' }),
            description || ''
        );

        setLink('canonical', url);

        setMeta('meta[property="og:title"]',
            () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:title'); return m; },
            fullTitle
        );
        setMeta('meta[property="og:description"]',
            () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:description'); return m; },
            description || ''
        );
        setMeta('meta[property="og:url"]',
            () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:url'); return m; },
            url
        );

        setMeta('meta[name="twitter:title"]',
            () => Object.assign(document.createElement('meta'), { name: 'twitter:title' }),
            fullTitle
        );
        setMeta('meta[name="twitter:description"]',
            () => Object.assign(document.createElement('meta'), { name: 'twitter:description' }),
            description || ''
        );

        if (image) {
            setMeta('meta[property="og:image"]',
                () => { const m = document.createElement('meta'); m.setAttribute('property', 'og:image'); return m; },
                `${SITE_URL}${image}`
            );
        }
    }, [title, description, path, image]);
}
