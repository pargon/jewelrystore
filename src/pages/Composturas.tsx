import React from 'react';
import { Footer } from '../components/shared';
import { footerContactInfo, footerSocialLinks } from '../data/footerData';

const Composturas: React.FC = () => {
  const servicios = [
    {
      id: 1,
      title: "Reparación de Relojes",
      description: "Mantenimiento y reparación de todo tipo de relojes",
      price: "Desde $25",
      image: "/api/placeholder/300/200",
      timeframe: "3-5 días laborales",
      includes: ["Diagnóstico gratuito", "Limpieza interna", "Cambio de batería", "Calibración"]
    },
    {
      id: 2,
      title: "Restauración de Joyas",
      description: "Devolvemos la vida a tus joyas más preciadas",
      price: "Desde $40",
      image: "/api/placeholder/300/200",
      timeframe: "5-7 días laborales",
      includes: ["Evaluación detallada", "Pulido profesional", "Engaste de piedras", "Garantía 6 meses"]
    },
    {
      id: 3,
      title: "Cambio de Baterías",
      description: "Cambio rápido de baterías para relojes",
      price: "$15",
      image: "/api/placeholder/300/200",
      timeframe: "Mientras esperas",
      includes: ["Batería original", "Prueba de hermeticidad", "Limpieza básica", "Garantía 1 año"]
    },
    {
      id: 4,
      title: "Ajuste de Tallas",
      description: "Ajustamos anillos, pulseras y cadenas",
      price: "Desde $20",
      image: "/api/placeholder/300/200",
      timeframe: "1-2 días",
      includes: ["Medición precisa", "Conservación del diseño", "Pulido final", "Sin daño al material"]
    },
    {
      id: 5,
      title: "Soldadura de Metales",
      description: "Reparamos roturas en cadenas, anillos y pulseras",
      price: "Desde $30",
      image: "/api/placeholder/300/200",
      timeframe: "2-3 días",
      includes: ["Soldadura invisible", "Refuerzo estructural", "Pulido completo", "Prueba de resistencia"]
    },
    {
      id: 6,
      title: "Limpieza Profesional",
      description: "Limpieza profunda que devuelve el brillo original",
      price: "$18",
      image: "/api/placeholder/300/200",
      timeframe: "1 día",
      includes: ["Limpieza ultrasónica", "Pulido a mano", "Desinfección", "Empaque premium"]
    }
  ];

  const procesoReparacion = [
    {
      paso: 1,
      titulo: "Diagnóstico",
      descripcion: "Evaluamos tu pieza sin costo y te damos un presupuesto detallado"
    },
    {
      paso: 2,
      titulo: "Aprobación",
      descripcion: "Una vez aprobado el presupuesto, comenzamos la reparación"
    },
    {
      paso: 3,
      titulo: "Reparación",
      descripcion: "Nuestros expertos trabajan con precisión y cuidado"
    },
    {
      paso: 4,
      titulo: "Control de Calidad",
      descripcion: "Verificamos que todo funcione perfectamente"
    },
    {
      paso: 5,
      titulo: "Entrega",
      descripcion: "Tu pieza lista con garantía incluida"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-100 to-yellow-100 text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-800">
              Servicio de Composturas
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-700">
              Especialistas en reparación y mantenimiento de relojes y joyas. 
              Más de 25 años devolviendo la vida a tus piezas más preciadas.
            </p>
            <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-md">
              Solicitar Diagnóstico Gratuito
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">25+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">5,000+</div>
              <div className="text-gray-600">Reparaciones Exitosas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">98%</div>
              <div className="text-gray-600">Satisfacción del Cliente</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-500 mb-2">24h</div>
              <div className="text-gray-600">Tiempo de Respuesta</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600">Profesionales certificados para cada tipo de reparación</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={servicio.image} 
                alt={servicio.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{servicio.title}</h3>
                <p className="text-gray-600 mb-4">{servicio.description}</p>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-amber-500">{servicio.price}</span>
                    <span className="text-sm text-gray-500">{servicio.timeframe}</span>
                  </div>
                </div>

                {/* Includes */}
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-700 mb-2">Incluye:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {servicio.includes.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <button className="w-full px-4 py-2 bg-amber-200 text-amber-800 rounded hover:bg-amber-300 transition-colors">
                    Solicitar Servicio
                  </button>
                  <button className="w-full px-4 py-2 border border-amber-300 text-amber-700 rounded hover:bg-amber-200 hover:text-amber-800 transition-colors">
                    Más Información
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso de Reparación</h2>
            <p className="text-gray-600">Un proceso transparente y profesional en cada paso</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {procesoReparacion.map((item, index) => (
              <div key={item.paso} className="text-center relative">
                <div className="w-16 h-16 bg-amber-200 text-amber-800 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.paso}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.titulo}</h3>
                <p className="text-sm text-gray-600">{item.descripcion}</p>
                
                {/* Arrow */}
                {index < procesoReparacion.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full">
                    <div className="flex justify-center">
                      <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2">¿Cuánto tiempo toma una reparación?</h3>
            <p className="text-gray-600">Los tiempos varían según el tipo de reparación. Servicios simples como cambio de batería se hacen mientras esperas, mientras que reparaciones complejas pueden tomar 5-7 días.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2">¿Ofrecen garantía en sus reparaciones?</h3>
            <p className="text-gray-600">Sí, todas nuestras reparaciones incluyen garantía. El período varía según el servicio: desde 3 meses hasta 1 año completo.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2">¿Qué marcas de relojes reparan?</h3>
            <p className="text-gray-600">Reparamos todas las marcas: Rolex, Omega, TAG Heuer, Seiko, Citizen, Casio, Apple Watch, Samsung, y muchas más.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="font-semibold mb-2">¿El diagnóstico tiene costo?</h3>
            <p className="text-gray-600">No, el diagnóstico es completamente gratuito. Solo pagas si decides proceder con la reparación.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-amber-200 to-yellow-200 text-amber-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tu Reloj o Joya Necesita Reparación?</h2>
          <p className="text-xl mb-8">
            Contáctanos hoy mismo y recibe un diagnóstico gratuito de nuestros expertos
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 bg-white text-amber-700 rounded-lg font-semibold hover:bg-amber-50 transition-colors shadow-md">
              WhatsApp
            </button>
            <button className="px-8 py-3 border-2 border-white text-amber-800 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition-colors">
              Llamar Ahora
            </button>
          </div>
        </div>
      </div>
      
      <Footer
        title="Diamond Jewelry"
        description="Expertos en joyería de diamantes desde 1985"
        contactInfo={footerContactInfo}
        socialLinks={footerSocialLinks}
      />
    </div>
  );
};

export default Composturas;
