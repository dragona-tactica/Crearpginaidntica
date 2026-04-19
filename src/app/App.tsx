import { useState } from 'react';
import LandingPqrs from '../imports/LandingPqrs';
import FormularioPage from './components/FormularioPage.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'formulario'>('landing');

  if (currentPage === 'formulario') {
    return <FormularioPage onBack={() => setCurrentPage('landing')} />;
  }

  return <LandingPqrs onNavigateToForm={() => setCurrentPage('formulario')} />;
}