/**
 * main.jsx — точка входа React-приложения
 * 
 * Здесь происходит:
 * 1. Импорт React и ReactDOM
 * 2. Настройка React Router с BrowserRouter
 * 3. Импорт корневого компонента App
 * 4. Импорт глобальных стилей
 * 5. Рендер приложения в DOM
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// BrowserRouter — обёртка для клиентского роутинга
// basename — важно для GitHub Pages, берём из Vite конфига
// import.meta.env.BASE_URL = '/' локально или '/testsite/' на GitHub Pages
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
