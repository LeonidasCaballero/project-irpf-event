import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSearchClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-stone-50 py-5'
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-xl font-serif font-bold text-blue-700">Agencia Tributaria</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/section/1" className="nav-link">Concepto</Link>
          <Link to="/section/2" className="nav-link">Rendimientos</Link>
          <Link to="/section/3" className="nav-link">Gastos Deducibles</Link>
          <Link to="/calculadora" className="nav-link">Calculadora</Link>
          <button 
            onClick={onSearchClick}
            className="ml-2 p-2 rounded-full hover:bg-stone-200 transition-colors"
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <button 
            onClick={onSearchClick}
            className="p-2 rounded-full hover:bg-stone-200 transition-colors"
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-stone-200 transition-colors"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="nav-link py-2">Inicio</Link>
            <Link to="/section/1" className="nav-link py-2">Concepto</Link>
            <Link to="/section/2" className="nav-link py-2">Rendimientos</Link>
            <Link to="/section/3" className="nav-link py-2">Gastos Deducibles</Link>
            <Link to="/calculadora" className="nav-link py-2">Calculadora</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;