import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import useSEO from '../hooks/useSEO';

function SubmitPage() {
    const { t, langPrefix } = useLanguage();

    useSEO({
        title: t('seo.submit.title'),
        description: t('seo.submit.description'),
        path: `${langPrefix}/submit`,
    });

    const [form, setForm] = useState({
        developerName: '',
        email: '',
        appName: '',
        appUrl: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('https://formspree.io/f/xykdwvzq', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                setStatus('success');
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="submit-page">
                <div className="submit-success">
                    <div className="submit-success-icon">&#10003;</div>
                    <h2>{t('submit.thankYou')}</h2>
                    <p>{t('submit.successMessage')}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="submit-page">
            <h1 className="submit-title">{t('submit.title')}</h1>
            <p className="submit-subtitle">
                {t('submit.subtitle')}
            </p>

            <form className="submit-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="developerName">{t('submit.developerName')}</label>
                    <input
                        className="form-input"
                        type="text"
                        id="developerName"
                        name="developerName"
                        value={form.developerName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">{t('submit.email')}</label>
                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="appName">{t('submit.appName')}</label>
                    <input
                        className="form-input"
                        type="text"
                        id="appName"
                        name="appName"
                        value={form.appName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="appUrl">{t('submit.appUrl')}</label>
                    <input
                        className="form-input"
                        type="url"
                        id="appUrl"
                        name="appUrl"
                        value={form.appUrl}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="message">{t('submit.message')}</label>
                    <textarea
                        className="form-textarea"
                        id="message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                    />
                </div>

                {status === 'error' && (
                    <p className="submit-error">{t('submit.error')}</p>
                )}

                <button
                    className="submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? t('submit.submitting') : t('submit.submitApp')}
                </button>
            </form>
        </div>
    );
}

export default SubmitPage;
