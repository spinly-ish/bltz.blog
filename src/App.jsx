/**
 * App.jsx — корневой компонент приложения
 * 
 * Отвечает за:
 * 1. Маршрутизацию (React Router)
 * 2. Общую структуру страницы (Header, Footer)
 * 3. Рендер нужной страницы в зависимости от URL
 */

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AppDetail from './components/AppDetail'

function App() {
  return (
    <>
      {/* Header — шапка сайта (на всех страницах) */}
      <Header />
      
      {/* Routes — контейнер для маршрутов */}
      {/* Route — определяет какой компонент показать для какого URL */}
      <Routes>
        {/* Главная страница — список всех приложений */}
        <Route path="/" element={<HomePage />} />
        
        {/* Страница детальной информации о приложении */}
        {/* :id — динамический параметр, доступен через useParams() */}
        <Route path="/app/:id" element={<AppDetail />} />
      </Routes>
      
      {/* Footer — подвал сайта (на всех страницах) */}
      <Footer />
    </>
  )
}

export default App
