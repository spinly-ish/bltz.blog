/**
 * App.jsx — Root application component
 *
 * Responsible for:
 * 1. Routing (React Router)
 * 2. Page layout (Header, Footer)
 * 3. Filter state management (lifted from HomePage for Header access)
 */

import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AppDetail from './components/AppDetail'
import NotFound from './components/NotFound'
import SubmitPage from './pages/SubmitPage'

function App() {
    // Filter state: { type: 'category' | 'setup', id: string }
    const [activeFilter, setActiveFilter] = useState({
        type: 'category',
        id: 'all'
    });

    // Search query state
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <>
            {/* Header — site header with navigation */}
            <Header
                showNav={true}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            {/* Routes — route container */}
            <Routes>
                {/* Home page — app list */}
                <Route
                    path="/"
                    element={<HomePage activeFilter={activeFilter} searchQuery={searchQuery} />}
                />

                {/* App detail page */}
                {/* :id — dynamic parameter, accessible via useParams() */}
                <Route path="/app/:id" element={<AppDetail />} />

                {/* Submit app page */}
                <Route path="/submit" element={<SubmitPage />} />

                {/* 404 — catch-all for unknown routes */}
                <Route path="*" element={<NotFound />} />
            </Routes>

            {/* Footer — site footer */}
            <Footer />
        </>
    );
}

export default App;
