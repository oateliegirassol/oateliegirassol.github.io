import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App pagina='home'/>} />
        <Route path='home' element={<App pagina='home'/>} />
        <Route path='nosso_trabalho' element={<App pagina='nosso_trabalho'/>} />
        <Route path='o_atelie' element={<App pagina='o_atelie'/>} />
        <Route path='contato' element={<App pagina='contato'/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
