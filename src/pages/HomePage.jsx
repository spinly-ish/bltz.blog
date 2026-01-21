/**
 * HomePage.jsx — Главная страница со списком приложений
 * 
 * Вынесена из App.jsx для чистоты кода при использовании роутинга.
 * Содержит:
 * - Sidebar с категориями
 * - Сетку карточек приложений
 * - Фильтрацию по категориям
 */

import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import AppGrid from '../components/AppGrid'
import { appsData, getAppsByCategory } from '../data/appsData'

function HomePage() {
    // useState — React хук для управления состоянием
    // activeCategory хранит текущую выбранную категорию
    const [activeCategory, setActiveCategory] = useState('all')
    
    // Фильтруем приложения по выбранной категории
    const filteredApps = getAppsByCategory(activeCategory)
    
    // Определяем заголовок на основе выбранной категории
    const getCategoryTitle = () => {
        if (activeCategory === 'all') return 'All Apps'
        const app = appsData.find(a => a.category === activeCategory)
        return app ? app.categoryDisplay : 'All Apps'
    }

    return (
        <main className="main">
            <div className="main-container">
                {/* Sidebar — боковая панель с категориями */}
                <Sidebar 
                    activeCategory={activeCategory} 
                    onCategoryChange={setActiveCategory}
                />
                
                {/* Контент — сетка карточек приложений */}
                <section className="content">
                    <div className="content-header">
                        <h1 className="content-title">{getCategoryTitle()}</h1>
                        <p className="content-subtitle">Curated collection of the best iOS apps</p>
                    </div>
                    
                    {/* AppGrid — сетка карточек */}
                    <AppGrid apps={filteredApps} />
                </section>
            </div>
        </main>
    )
}

export default HomePage
