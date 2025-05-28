import React from 'react';
import Hero from '../components/Hero';
import SectionPreview from '../components/SectionPreview';

const HomePage = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 md:py-24 bg-white">
        <div className="container-wide">
          <h2 className="section-title text-center mb-12">Conceptos Clave</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SectionPreview 
              id="1"
              title="Concepto y Rendimientos"
              description="Qué se considera rendimiento del capital inmobiliario y cómo se clasifican estos ingresos según la normativa tributaria."
              image="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            
            <SectionPreview 
              id="2"
              title="Rendimientos Íntegros"
              description="Cómo calcular los rendimientos íntegros del capital inmobiliario, incluyendo casos especiales de arrendamiento."
              image="https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            
            <SectionPreview 
              id="3"
              title="Gastos Deducibles"
              description="Gastos que pueden deducirse de los rendimientos del capital inmobiliario y reducciones aplicables."
              image="https://live.staticflickr.com/65535/17123251389_80282733ce_z.jpg"
            />
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-20 bg-stone-100">
        <div className="container-narrow text-center">
          <h2 className="section-title">¿Por qué es importante entender estos conceptos?</h2>
          <p className="paragraph text-lg md:text-xl mb-8">
            Conocer en detalle la tributación de los rendimientos del capital inmobiliario 
            te permitirá optimizar tu declaración de la renta y evitar errores que podrían 
            resultar en sanciones o pagos excesivos.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-3">Para propietarios</h3>
              <p className="text-stone-600">
                Si eres propietario de inmuebles en alquiler, necesitas conocer qué gastos 
                puedes deducir y cómo calcular correctamente tus rendimientos.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-serif font-bold mb-3">Para asesores fiscales</h3>
              <p className="text-stone-600">
                Actualiza tus conocimientos sobre las últimas modificaciones en la normativa 
                tributaria relacionada con el capital inmobiliario.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;