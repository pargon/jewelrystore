import React from 'react';

const Alianzas: React.FC = () => {
  const alianzas = [
    {
      id: 1,
      name: "Alianzas Clásicas Oro Blanco",
      price: "$850",
      image: "/api/placeholder/300/300",
      description: "Elegantes alianzas en oro blanco 18k, perfectas para simbolizar el amor eterno",
      material: "Oro Blanco 18k",
      width: "4mm"
    },
    {
      id: 2,
      name: "Alianzas Oro Amarillo con Diamantes",
      price: "$1,200",
      image: "/api/placeholder/300/300",
      description: "Alianzas tradicionales en oro amarillo con incrustaciones de diamantes",
      material: "Oro Amarillo 18k",
      width: "5mm"
    },
    {
      id: 3,
      name: "Alianzas Platino Premium",
      price: "$1,850",
      image: "/api/placeholder/300/300",
      description: "Máxima calidad en platino puro, hipoalergénicas y duraderas",
      material: "Platino 950",
      width: "4.5mm"
    },
    {
      id: 4,
      name: "Alianzas Oro Rosa Modernas",
      price: "$950",
      image: "/api/placeholder/300/300",
      description: "Diseño contemporáneo en oro rosa con acabado mate",
      material: "Oro Rosa 18k",
      width: "3.5mm"
    },
    {
      id: 5,
      name: "Alianzas con Grabado Personalizado",
      price: "$750",
      image: "/api/placeholder/300/300",
      description: "Personaliza tu alianza con grabados únicos y especiales",
      material: "Oro 14k",
      width: "4mm"
    },
    {
      id: 6,
      name: "Alianzas Bicolor Exclusivas",
      price: "$1,100",
      image: "/api/placeholder/300/300",
      description: "Combinación única de oro blanco y amarillo en diseño exclusivo",
      material: "Oro Bicolor 18k",
      width: "5.5mm"
    }
  ];

  const servicios = [
    {
      title: "Grabado Personalizado",
      description: "Agrega nombres, fechas o mensajes especiales",
      icon: "✍️"
    },
    {
      title: "Ajuste de Tallas",
      description: "Ajustamos la talla perfecta sin costo adicional",
      icon: "📏"
    },
    {
      title: "Limpieza de Por Vida",
      description: "Mantenimiento y limpieza gratuita de por vida",
      icon: "✨"
    },
    {
      title: "Garantía Extendida",
      description: "2 años de garantía en todos nuestros productos",
      icon: "🛡️"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-rose-100 to-pink-100 text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-lato italic text-rose-500 text-2xl md:text-3xl mb-4 font-light">
              Para toda la vida
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold mb-6 text-rose-800">
              Alianzas de Matrimonio
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-rose-700 font-openSans">
              Simboliza tu amor eterno con nuestras exclusivas alianzas de matrimonio. 
              Diseños únicos crafteados con los mejores materiales.
            </p>
            <button 
              onClick={() => window.open(`https://wa.me/1234567890?text=${  encodeURIComponent('¡Hola! Me interesa agendar una cita para ver las alianzas.')}`, '_blank')}
              className="px-8 py-3 bg-white text-rose-700 rounded-lg font-lato font-semibold hover:bg-rose-50 transition-colors shadow-md"
            >
              Agenda tu Cita
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-roboto font-bold text-gray-900 mb-4">Servicios Incluidos</h2>
            <p className="text-gray-600 font-openSans">Cada alianza viene con servicios premium sin costo adicional</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicios.map((servicio, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{servicio.icon}</div>
                <h3 className="text-xl font-lato font-semibold mb-2">{servicio.title}</h3>
                <p className="text-gray-600 font-openSans">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Colección</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-rose-200 text-rose-800 rounded-full hover:bg-rose-300 transition-colors">
              Todas
            </button>
            <button className="px-6 py-2 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">
              Oro Blanco
            </button>
            <button className="px-6 py-2 bg-yellow-100 text-yellow-700 rounded-full hover:bg-yellow-200 transition-colors">
              Oro Amarillo
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
              Platino
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alianzas.map((alianza) => (
            <div key={alianza.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={alianza.image} 
                alt={alianza.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{alianza.name}</h3>
                <p className="text-gray-600 mb-4">{alianza.description}</p>
                
                {/* Specifications */}
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Material:</span>
                    <span className="text-sm font-medium">{alianza.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Ancho:</span>
                    <span className="text-sm font-medium">{alianza.width}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-rose-500">{alianza.price}</span>
                  <div className="space-x-2">
                    <button className="px-4 py-2 bg-rose-200 text-rose-800 rounded hover:bg-rose-300 transition-colors">
                      Ver Detalles
                    </button>
                    <button className="px-4 py-2 border border-rose-300 text-rose-700 rounded hover:bg-rose-200 hover:text-rose-800 transition-colors">
                      Personalizar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-rose-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proceso de Compra</h2>
            <p className="text-gray-600">Un proceso simple para tu día más especial</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consulta Gratuita</h3>
              <p className="text-gray-600">
                Agenda una cita para conocer tu estilo y preferencias
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Diseño y Medidas</h3>
              <p className="text-gray-600">
                Selecciona el diseño perfecto y tomamos las medidas exactas
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-200 text-rose-700 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Perfecta</h3>
              <p className="text-gray-600">
                Recibe tus alianzas listas para el día más importante
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-rose-200 to-pink-200 text-rose-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para Encontrar tu Alianza?</h2>
          <p className="text-xl mb-8">
            Agenda una consulta gratuita y descubre la alianza perfecta para ti
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => window.open(`https://wa.me/1234567890?text=${  encodeURIComponent('¡Hola! Me interesa agendar una cita para ver las alianzas.')}`, '_blank')}
              className="px-8 py-3 bg-white text-rose-700 rounded-lg font-semibold hover:bg-rose-50 transition-colors shadow-md"
            >
              Agendar Cita
            </button>
            <button 
              onClick={() => window.open('tel:+1234567890', '_self')}
              className="px-8 py-3 border-2 border-white text-rose-800 rounded-lg font-semibold hover:bg-white hover:text-rose-700 transition-colors"
            >
              Llamar Ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alianzas;
