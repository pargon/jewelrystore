import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModernHome from '../pages/ModernHome';
import Productos from '../pages/Productos';
import Nosotros from '../pages/Nosotros';
import ComoComprar from '../pages/ComoComprar';
import Cotizaciones from '../pages/Cotizaciones';
import Relojes from '../pages/Relojes';
import Smartwatches from '../pages/Smartwatches';
import Alianzas from '../pages/Alianzas';
import Composturas from '../pages/Composturas';
import Contacto from '../pages/Contacto';

// Componente interno que maneja la navegación
const AppContent: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ModernHome />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/como-comprar" element={<ComoComprar />} />
        <Route path="/cotizaciones" element={<Cotizaciones />} />
        <Route path="/relojes" element={<Relojes />} />
        <Route path="/smartwatches" element={<Smartwatches />} />
        <Route path="/alianzas" element={<Alianzas />} />
        <Route path="/composturas" element={<Composturas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<ModernHome />} />
      </Routes>
    </>
  );
};

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default AppRouter;