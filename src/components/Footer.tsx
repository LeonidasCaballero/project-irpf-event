import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold text-white mb-4">Agencia Tributaria</h3>
            <p className="text-sm leading-relaxed mb-4">
              Información sobre rendimientos del capital inmobiliario
              del Manual práctico de Renta 2024.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-stone-400 hover:text-white transition-colors duration-200">Inicio</Link></li>
              <li><Link to="/section/1" className="text-stone-400 hover:text-white transition-colors duration-200">Concepto</Link></li>
              <li><Link to="/section/2" className="text-stone-400 hover:text-white transition-colors duration-200">Rendimientos</Link></li>
              <li><Link to="/section/3" className="text-stone-400 hover:text-white transition-colors duration-200">Gastos Deducibles</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold text-white mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><a href="https://sede.agenciatributaria.gob.es/" className="text-stone-400 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">Sede Electrónica</a></li>
              <li><a href="https://www.agenciatributaria.es/" className="text-stone-400 hover:text-white transition-colors duration-200" target="_blank" rel="noopener noreferrer">Web Oficial</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-700 mt-8 pt-8 text-sm text-stone-500 text-center">
          <p>© 2025 Agencia Estatal de Administración Tributaria. Esta es una aplicación de ejemplo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;