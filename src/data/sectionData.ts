export interface Section {
  id: string;
  title: string;
  content: string;
}

export interface TOCItem {
  id: string;
  title: string;
  children?: TOCItem[];
}

export const TOCData: TOCItem[] = [
  {
    id: "1",
    title: "Concepto y Rendimientos",
    children: [
      { id: "1", title: "Concepto" },
      { id: "1-1", title: "Rendimientos íntegros" },
      { id: "1-2", title: "Arrendamientos" },
    ]
  },
  {
    id: "2",
    title: "Rendimientos Íntegros",
    children: [
      { id: "2", title: "Clasificación" },
      { id: "2-1", title: "Arrendamiento de inmuebles" },
      { id: "2-2", title: "Casos especiales" },
    ]
  },
  {
    id: "3",
    title: "Gastos Deducibles",
    children: [
      { id: "3", title: "Gastos necesarios" },
      { id: "3-1", title: "Intereses y gastos de financiación" },
      { id: "3-2", title: "Conservación y reparación" },
      { id: "3-3", title: "Amortizaciones" },
    ]
  }
];

export const sectionData: Section[] = [
  {
    id: "1",
    title: "Concepto de Rendimientos del Capital Inmobiliario",
    content: `
      <section id="1" class="mb-12">
        <h2 class="subsection-title">Definición y Alcance</h2>
        <p class="paragraph">
          Tienen la consideración de rendimientos íntegros del capital inmobiliario los que procedan de la titularidad de bienes inmuebles rústicos y urbanos o de derechos reales que recaigan sobre ellos, todos los que se deriven del arrendamiento o de la constitución o cesión de derechos o facultades de uso o disfrute sobre aquéllos, cualquiera que sea su denominación o naturaleza.
        </p>
        <p class="paragraph">
          Se computan como rendimientos íntegros las cantidades que por todos los conceptos deba satisfacer el adquirente, cesionario, arrendatario o subarrendatario, incluido, en su caso, el correspondiente a todos aquellos bienes cedidos con el inmueble y excluido el Impuesto sobre el Valor Añadido o, en su caso, el Impuesto General Indirecto Canario.
        </p>
      </section>
      
      <section id="1-1" class="mb-12">
        <h2 class="subsection-title">Rendimientos íntegros del capital inmobiliario</h2>
        <p class="paragraph">
          Los rendimientos del capital inmobiliario constituyen una categoría dentro de la clasificación de rentas que pueden obtener las personas físicas. De acuerdo con el artículo 21 de la Ley del IRPF, estos rendimientos derivan de bienes inmuebles rústicos o urbanos que no se encuentren afectos a actividades económicas realizadas por el contribuyente.
        </p>
        <p class="paragraph">
          El concepto de rendimientos íntegros del capital inmobiliario comprende todos los rendimientos que se deriven del arrendamiento o de la constitución o cesión de derechos o facultades de uso o disfrute sobre bienes inmuebles rústicos o urbanos o, en general, de su titularidad.
        </p>
        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
          <h3 class="font-serif font-bold text-lg mb-2">Importante</h3>
          <p>
            En el cómputo del rendimiento íntegro no se incluye el IVA o IGIC cuando la operación esté sujeta y no exenta de estos impuestos. Por el contrario, en el cómputo del rendimiento íntegro se incluye el Impuesto sobre Transmisiones Patrimoniales y Actos Jurídicos Documentados (ITP y AJD), modalidad transmisiones patrimoniales onerosas.
          </p>
        </div>
      </section>
      
      <section id="1-2" class="mb-12">
        <h2 class="subsection-title">Arrendamientos de bienes inmuebles</h2>
        <p class="paragraph">
          Se consideran rendimientos del capital inmobiliario los procedentes del arrendamiento de bienes inmuebles, tengan o no la consideración de vivienda habitual para el arrendatario.
        </p>
        <p class="paragraph">
          El arrendamiento de bienes inmuebles puede realizarse:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>A través de un contrato de arrendamiento de vivienda conforme a la Ley de Arrendamientos Urbanos.</li>
          <li>A través de un contrato de arrendamiento de inmueble para uso distinto del de vivienda.</li>
          <li>A través de un contrato de arrendamiento por temporada.</li>
          <li>A través de un contrato de arrendamiento de local de negocio.</li>
        </ul>
        <p class="paragraph">
          En todos estos casos, si el inmueble se arrienda por habitaciones o parte del mismo, sin transmitir el uso total del inmueble al arrendatario, el rendimiento sigue manteniéndose como procedente del capital inmobiliario.
        </p>
      </section>
    `
  },
  {
    id: "2",
    title: "Rendimientos Íntegros del Capital Inmobiliario",
    content: `
      <section id="2" class="mb-12">
        <h2 class="subsection-title">Clasificación de los rendimientos íntegros</h2>
        <p class="paragraph">
          Los rendimientos íntegros del capital inmobiliario se clasifican en dos grupos:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Rendimientos procedentes de inmuebles arrendados o subarrendados.</li>
          <li>Rendimientos correspondientes a inmuebles no arrendados ni subarrendados.</li>
        </ul>
      </section>
      
      <section id="2-1" class="mb-12">
        <h2 class="subsection-title">Arrendamiento de inmuebles</h2>
        <p class="paragraph">
          Se consideran rendimientos íntegros del capital inmobiliario las cantidades que por todos los conceptos deba satisfacer el arrendatario o subarrendatario, el cesionario o el adquirente, incluido, en su caso, el correspondiente a todos aquellos bienes cedidos con el inmueble y excluido el IVA o, en su caso, el IGIC.
        </p>
        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
          <h3 class="font-serif font-bold text-lg mb-2">Ejemplo</h3>
          <p>
            Don P.C.H. arrienda un local comercial y dos plazas de garaje a la empresa "S.A." para que ubique en el mismo su sede social, estando estipulado un alquiler anual de 12.000 euros. El valor catastral del local es de 168.000 euros y el de cada plaza de garaje de 10.800 euros.
          </p>
          <p class="mt-2">
            El rendimiento íntegro anual correspondiente al arrendamiento será 12.000 euros, con independencia del valor catastral de cada uno de los inmuebles arrendados.
          </p>
        </div>
      </section>
      
      <section id="2-2" class="mb-12">
        <h2 class="subsection-title">Casos especiales</h2>
        <p class="paragraph">
          Existen casos especiales en los rendimientos íntegros del capital inmobiliario:
        </p>
        
        <h3 class="text-xl font-serif font-bold mt-6 mb-3">Arrendamiento de inmueble con vinculación</h3>
        <p class="paragraph">
          Cuando el arrendamiento o subarrendamiento de bienes inmuebles o la constitución o cesión de derechos o facultades de uso o disfrute sobre los mismos se realice a favor de:
        </p>
        <ul class="list-disc pl-6 mb-4 space-y-2">
          <li>El cónyuge o un pariente, incluidos los afines, hasta el tercer grado inclusive, del contribuyente.</li>
          <li>En el caso de personas jurídicas, cuando exista vinculación de acuerdo con el artículo 18 de la Ley del Impuesto sobre Sociedades.</li>
        </ul>
        <p class="paragraph">
          En estos casos, el rendimiento neto total no podrá ser inferior al que resulte de aplicar las reglas de la imputación de rentas inmobiliarias al valor catastral correspondiente.
        </p>
        
        <h3 class="text-xl font-serif font-bold mt-6 mb-3">Inmuebles con uso o destino simultáneo</h3>
        <p class="paragraph">
          Cuando un inmueble sea objeto en el mismo período impositivo de utilizaciones sucesivas o simultáneas diferentes, es decir, arrendado durante parte del año y a disposición de su titular el resto, será aplicable:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>La reducción por arrendamiento de inmuebles destinados a vivienda, exclusivamente sobre la parte del rendimiento neto que corresponda al período en que el inmueble haya estado arrendado.</li>
          <li>La imputación de renta inmobiliaria, exclusivamente sobre la parte del período en que el inmueble haya estado a disposición del titular, proporcionándose dicha imputación al número de días que corresponda.</li>
        </ul>
      </section>
    `
  },
  {
    id: "3",
    title: "Gastos Deducibles y Reducciones",
    content: `
      <section id="3" class="mb-12">
        <h2 class="subsection-title">Gastos deducibles para la determinación del rendimiento neto</h2>
        <p class="paragraph">
          Para determinar el rendimiento neto del capital inmobiliario, podrán deducirse de los rendimientos íntegros todos los gastos necesarios para su obtención, así como las cantidades destinadas a la amortización del inmueble y de los demás bienes cedidos con el mismo, siempre que respondan a su depreciación efectiva.
        </p>
        <p class="paragraph">
          Los gastos deducibles deben estar justificados mediante facturas emitidas en las condiciones establecidas en la normativa tributaria.
        </p>
      </section>
      
      <section id="3-1" class="mb-12">
        <h2 class="subsection-title">Intereses y gastos de financiación</h2>
        <p class="paragraph">
          Son deducibles los intereses de los capitales ajenos invertidos en la adquisición o mejora del bien, derecho o facultad de uso o disfrute productor de los rendimientos, y demás gastos de financiación, así como los gastos de reparación y conservación.
        </p>
        <div class="bg-green-50 border-l-4 border-green-500 p-4 my-6">
          <h3 class="font-serif font-bold text-lg mb-2">Límite máximo de deducción por estos conceptos</h3>
          <p>
            El importe total a deducir por estos gastos no puede exceder, para cada bien o derecho, de la cuantía de los rendimientos íntegros obtenidos. El exceso se podrá deducir en los cuatro años siguientes, sin que pueda exceder, conjuntamente con los gastos por estos mismos conceptos correspondientes a cada uno de estos años, de la cuantía de los rendimientos íntegros obtenidos en cada uno de los mismos, para cada bien o derecho.
          </p>
        </div>
      </section>
      
      <section id="3-2" class="mb-12">
        <h2 class="subsection-title">Conservación y reparación</h2>
        <p class="paragraph">
          Son deducibles los gastos de conservación y reparación. A estos efectos, tienen esta consideración:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>Los efectuados regularmente con la finalidad de mantener el uso normal de los bienes materiales, como el pintado, revoco o arreglo de instalaciones.</li>
          <li>Los de sustitución de elementos, como instalaciones de calefacción, ascensor, puertas de seguridad u otros.</li>
        </ul>
        <p class="paragraph">
          No son deducibles por este concepto las cantidades destinadas a ampliación o mejora de los bienes, al constituir éstas un mayor valor de adquisición cuya recuperación se efectúa a través de las correspondientes amortizaciones.
        </p>
      </section>
      
      <section id="3-3" class="mb-12">
        <h2 class="subsection-title">Amortizaciones</h2>
        <p class="paragraph">
          Son deducibles las cantidades destinadas a la amortización del inmueble y de los demás bienes cedidos con el mismo, siempre que respondan a su depreciación efectiva.
        </p>
        <h3 class="text-xl font-serif font-bold mt-6 mb-3">Amortización del inmueble</h3>
        <p class="paragraph">
          Son deducibles las cantidades destinadas a la amortización del inmueble, siempre que respondan a su depreciación efectiva. Se considera que las amortizaciones cumplen el requisito de efectividad cuando:
        </p>
        <ul class="list-disc pl-6 mb-6 space-y-2">
          <li>No exceda del resultado de aplicar el 3 por 100 sobre el mayor de los siguientes valores: el coste de adquisición satisfecho o el valor catastral, sin incluir el valor del suelo.</li>
          <li>En el caso de inmuebles adquiridos por herencia o donación, cuando la adquisición se hubiera efectuado a título oneroso, pudiéndose tomar como coste de adquisición satisfecho el valor del inmueble en el Impuesto sobre Sucesiones y Donaciones y como fecha de adquisición la de la adquisición por herencia o donación.</li>
        </ul>
        <p class="paragraph">
          En el supuesto de que el inmueble no hubiera sido arrendado durante todo el año, la amortización deducible, los intereses y los gastos de reparación y conservación serán los que correspondan al período efectivo del arrendamiento.
        </p>
        
        <table class="w-full border-collapse my-6">
          <thead class="bg-blue-700 text-white">
            <tr>
              <th class="p-3 text-left">Tipo de bien</th>
              <th class="p-3 text-left">Coeficiente lineal máximo</th>
              <th class="p-3 text-left">Período máximo</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-blue-700 text-white">
              <td class="p-3">Edificios y construcciones</td>
              <td class="p-3">3%</td>
              <td class="p-3">Entre 33 y 100 años</td>
            </tr>
            <tr>
              <td class="p-3 border">Instalaciones, mobiliario y enseres</td>
              <td class="p-3 border">10%</td>
              <td class="p-3 border">20 años</td>
            </tr>
            <tr>
              <td class="p-3 border">Equipos para tratamiento de la información</td>
              <td class="p-3 border">25%</td>
              <td class="p-3 border">8 años</td>
            </tr>
          </tbody>
        </table>
      </section>
    `
  }
];