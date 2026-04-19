import { useState } from 'react';
import LandingPqrs from '../imports/LandingPqrs';
import FormularioPage from './components/FormularioPage';
import InicioSesionPage from './components/InicioSesionPage';
import LandingServidorPage from './components/LandingServidorPage';
import VistaProcesoPage from './components/VistaProcesoPage';
import EnRevisionPage from './components/EnRevisionPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'formulario' | 'login' | 'servidor' | 'proceso' | 'enRevision'>('landing');

  if (currentPage === 'formulario') {
    return <FormularioPage onBack={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'login') {
    return <InicioSesionPage onBack={() => setCurrentPage('landing')} onLogin={() => setCurrentPage('servidor')} />;
  }

  if (currentPage === 'servidor') {
    return <LandingServidorPage onLogout={() => setCurrentPage('landing')} onViewProceso={() => setCurrentPage('proceso')} onViewEnRevision={() => setCurrentPage('enRevision')} />;
  }

  if (currentPage === 'proceso') {
    return <VistaProcesoPage onBack={() => setCurrentPage('servidor')} onLogout={() => setCurrentPage('landing')} />;
  }

  if (currentPage === 'enRevision') {
    return <EnRevisionPage onBack={() => setCurrentPage('servidor')} onLogout={() => setCurrentPage('landing')} />;
  }

  return (
    <LandingPqrs
      onNavigateToForm={() => setCurrentPage('formulario')}
      onNavigateToLogin={() => setCurrentPage('login')}
    />
  );
}