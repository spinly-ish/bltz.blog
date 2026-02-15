import { useState, useEffect } from 'react';

function SubmitPage() {
    const [form, setForm] = useState({
        developerName: '',
        email: '',
        appName: '',
        appUrl: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

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
                    <h2>Thank you!</h2>
                    <p>Your app has been submitted for review. We'll check it out soon.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="submit-page">
            <h1 className="submit-title">Submit Your App</h1>
            <p className="submit-subtitle">
                Are you a developer? Suggest your app for review on bltz.blog.
            </p>

            <form className="submit-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="developerName">Developer Name</label>
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
                    <label className="form-label" htmlFor="email">Email</label>
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
                    <label className="form-label" htmlFor="appName">App Name</label>
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
                    <label className="form-label" htmlFor="appUrl">App Store / Website URL</label>
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
                    <label className="form-label" htmlFor="message">Message</label>
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
                    <p className="submit-error">Something went wrong. Please try again.</p>
                )}

                <button
                    className="submit-btn"
                    type="submit"
                    disabled={status === 'submitting'}
                >
                    {status === 'submitting' ? 'Submitting...' : 'Submit App'}
                </button>
            </form>
        </div>
    );
}

export default SubmitPage;
