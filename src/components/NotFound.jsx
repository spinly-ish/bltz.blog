/**
 * NotFound.jsx — 404 page with typewriter search animation
 *
 * Shows an animated typewriter that "searches" through app categories
 * before landing on "This page..." — not found.
 */

import { Link } from 'react-router-dom'
import useTypewriter from '../hooks/useTypewriter'

const SEARCH_PHRASES = [
    'Best VPN apps...',
    'Task managers...',
    'Clipboard tools...',
    'System utilities...',
    'This page...',
];

function NotFound() {
    const typedText = useTypewriter(SEARCH_PHRASES, {
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
                    This page didn't make it into our collection.<br />
                    But your perfect setup is just one click away.
                </p>
                <Link to="/" className="btn btn-primary not-found-btn">
                    Browse All Apps
                </Link>
            </div>
        </main>
    );
}

export default NotFound;
