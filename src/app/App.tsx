import { useState } from 'react';
import LandingPqrs from '../imports/LandingPqrs';
import FormularioPage from './components/FormularioPage';
import InicioSesionPage from './components/InicioSesionPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'formulario' | 'login'>('landing');

  if (currentPage === 'formulario') {
    return <FormularioPage onBack={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'login') {
    return <InicioSesionPage onBack={() => setCurrentPage('landing')} />;
  }

  return (
    <LandingPqrs
      onNavigateToForm={() => setCurrentPage('formulario')}
      onNavigateToLogin={() => setCurrentPage('login')}
    />
  );
}