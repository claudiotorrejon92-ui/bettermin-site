import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ProcesosPage from './pages/ProcesosPage.jsx';
import TecnologiaPage from './pages/TecnologiaPage.jsx';
import SostenibilidadPage from './pages/SostenibilidadPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

export default function App() {
  return (
    <>
      <nav className="p-4 bg-gray-100">
        <ul className="flex gap-4">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/procesos">Procesos</Link></li>
          <li><Link to="/tecnologia">Tecnología</Link></li>
          <li><Link to="/sostenibilidad">Sostenibilidad</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/procesos" element={<ProcesosPage />} />
        <Route path="/tecnologia" element={<TecnologiaPage />} />
        <Route path="/sostenibilidad" element={<SostenibilidadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
