import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import TableOfContents from '../components/TableOfContents';
import { sectionData, TOCData } from '../data/sectionData';

const SectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const currentSection = sectionData.find(section => section.id === id);
  
  // Handle hash changes and scroll to the correct section
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // Scroll with offset for fixed header
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash]);

  // Set up intersection observer to track which section is in view
  useEffect(() => {
    if (!currentSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Update URL hash without scrolling
            const newUrl = `${location.pathname}#${entry.target.id}`;
            window.history.replaceState(null, '', newUrl);
          }
        });
      },
      { 
        rootMargin: '-100px 0px -80% 0px',
        threshold: 0
      }
    );

    // Observe all section headings
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('section[id]').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [currentSection, location.pathname]);

  const handlePrevSection = () => {
    if (!currentSection) return;
    
    const currentIndex = sectionData.findIndex(section => section.id === currentSection.id);
    if (currentIndex > 0) {
      navigate(`/section/${sectionData[currentIndex - 1].id}`);
    }
  };

  const handleNextSection = () => {
    if (!currentSection) return;
    
    const currentIndex = sectionData.findIndex(section => section.id === currentSection.id);
    if (currentIndex < sectionData.length - 1) {
      navigate(`/section/${sectionData[currentIndex + 1].id}`);
    }
  };

  if (!currentSection) {
    return (
      <div className="container-narrow py-20 text-center">
        <h2 className="section-title">Sección no encontrada</h2>
        <p className="paragraph">La sección que buscas no existe.</p>
      </div>
    );
  }

  return (
    <div className="bg-stone-50 py-8 md:py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="hidden lg:block">
              <TableOfContents 
                items={TOCData} 
                currentSection={id || ''} 
              />
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-md p-6 md:p-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                {currentSection.title}
              </h1>
              
              <div className="prose prose-stone max-w-none">
                <div dangerouslySetInnerHTML={{ __html: currentSection.content }} />
              </div>
              
              <div className="mt-12 pt-8 border-t border-stone-200 flex justify-between">
                <button 
                  onClick={handlePrevSection}
                  className={`flex items-center text-stone-500 hover:text-blue-700 transition-colors ${
                    sectionData.findIndex(section => section.id === currentSection.id) === 0 
                      ? 'invisible' 
                      : ''
                  }`}
                >
                  <ArrowLeft size={20} className="mr-2" /> 
                  Anterior
                </button>
                
                <button 
                  onClick={handleNextSection}
                  className={`flex items-center text-stone-500 hover:text-blue-700 transition-colors ${
                    sectionData.findIndex(section => section.id === currentSection.id) === sectionData.length - 1 
                      ? 'invisible' 
                      : ''
                  }`}
                >
                  Siguiente
                  <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPage;