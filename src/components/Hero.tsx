import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-blue-700 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
      <div className="container-narrow relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
          Rendimientos del Capital Inmobiliario
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
          Todo lo que necesitas saber sobre la tributación de los rendimientos procedentes 
          de bienes inmuebles en el IRPF.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/section/1" className="inline-flex items-center bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200">
            Empezar a leer <ArrowRight size={18} className="ml-2" />
          </Link>
          <a 
            href="https://sede.agenciatributaria.gob.es/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center bg-transparent hover:bg-blue-800 border border-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            Ir a la Sede Electrónica
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;