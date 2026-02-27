/**
 * App.jsx — Root application component
 *
 * Responsible for:
 * 1. Routing (React Router) with EN/RU language support
 * 2. LangLayout wraps Header + Outlet + Footer per language
 */

import { Routes, Route } from 'react-router-dom'
import LangLayout from './components/LangLayout'
import HomePage from './pages/HomePage'
import AppDetail from './components/AppDetail'
import NotFound from './components/NotFound'
import SubmitPage from './pages/SubmitPage'

function App() {
    return (
        <Routes>
            {/* English routes (default, no prefix) */}
            <Route element={<LangLayout lang="en" />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/app/:id" element={<AppDetail />} />
                <Route path="/submit" element={<SubmitPage />} />
            </Route>

            {/* Russian routes (/ru prefix) */}
            <Route element={<LangLayout lang="ru" />}>
                <Route path="/ru" element={<HomePage />} />
                <Route path="/ru/app/:id" element={<AppDetail />} />
                <Route path="/ru/submit" element={<SubmitPage />} />
            </Route>

            {/* 404 — catch-all */}
            <Route element={<LangLayout lang="en" />}>
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
