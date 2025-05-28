import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface SectionPreviewProps {
  id: string;
  title: string;
  description: string;
  image?: string;
}

const SectionPreview: React.FC<SectionPreviewProps> = ({ id, title, description, image }) => {
  return (
    <div className="card group">
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-stone-600 mb-4">{description}</p>
      <Link 
        to={`/section/${id}`} 
        className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
      >
        Leer más <ArrowRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default SectionPreview;