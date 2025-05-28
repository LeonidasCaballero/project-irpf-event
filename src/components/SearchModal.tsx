import React, { useState, useEffect, useRef } from 'react';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Mock search results based on searchTerm
  const getResults = () => {
    if (!searchTerm) return [];
    
    const allResults = [
      { id: '1-1', title: 'Concepto de rendimientos de capital inmobiliario', section: '1' },
      { id: '1-2', title: 'Rendimientos íntegros de capital inmobiliario', section: '1' },
      { id: '2-1', title: 'Arrendamiento de bienes inmuebles', section: '2' },
      { id: '2-2', title: 'Rendimientos del capital inmobiliario en caso de parentesco', section: '2' },
      { id: '3-1', title: 'Gastos deducibles', section: '3' },
      { id: '3-2', title: 'Reducción por arrendamiento de vivienda', section: '3' },
    ];
    
    return allResults.filter(result => 
      result.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  const results = getResults();

  // Focus the input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 px-4">
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[70vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b flex items-center">
          <Search size={20} className="text-stone-400 mr-2" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar información tributaria..."
            className="flex-grow bg-transparent border-none outline-none text-lg"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-stone-100"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="overflow-y-auto flex-grow">
          {searchTerm && results.length === 0 ? (
            <div className="p-6 text-center text-stone-500">
              No se encontraron resultados para "{searchTerm}"
            </div>
          ) : (
            <ul>
              {results.map(result => (
                <li key={result.id} className="border-b border-stone-100 last:border-none">
                  <Link 
                    to={`/section/${result.section}#${result.id}`}
                    className="block p-4 hover:bg-stone-50"
                    onClick={onClose}
                  >
                    <h4 className="font-medium text-lg mb-1">{result.title}</h4>
                    <p className="text-sm text-stone-500">Sección {result.section}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;