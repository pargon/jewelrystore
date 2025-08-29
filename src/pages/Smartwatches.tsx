import React from 'react';

const Smartwatches: React.FC = () => {
  const smartwatches = [
    {
      id: 1,
      name: "Apple Watch Series 9",
      price: "$399",
      image: "/api/placeholder/300/300",
      description: "El smartwatch más avanzado con GPS y monitoreo de salud",
      features: ["GPS", "Monitor Cardíaco", "Resistente al Agua", "Siri"]
    },
    {
      id: 2,
      name: "Samsung Galaxy Watch 6",
      price: "$329",
      image: "/api/placeholder/300/300",
      description: "Smartwatch Android con seguimiento completo de fitness",
      features: ["Android Compatible", "Samsung Health", "40+ Deportes", "Bluetooth"]
    },
    {
      id: 3,
      name: "Garmin Fenix 7",
      price: "$699",
      image: "/api/placeholder/300/300",
      description: "Para aventureros extremos con GPS multi-banda",
      features: ["GPS Multi-banda", "Mapas Topográficos", "Batería 18 días", "Deportes"]
    },
    {
      id: 4,
      name: "Fitbit Versa 4",
      price: "$199",
      image: "/api/placeholder/300/300",
      description: "Enfocado en fitness y bienestar personal",
      features: ["6+ días batería", "Spotify", "Google Wallet", "Estrés"]
    },
    {
      id: 5,
      name: "Amazfit GTR 4",
      price: "$179",
      image: "/api/placeholder/300/300",
      description: "Gran autonomía con diseño premium",
      features: ["14 días batería", "150+ Deportes", "Alexa", "GPS"]
    },
    {
      id: 6,
      name: "Huawei Watch GT 3",
      price: "$229",
      image: "/api/placeholder/300/300",
      description: "Elegancia con tecnología de punta",
      features: ["14 días batería", "100+ Deportes", "Llamadas Bluetooth", "Salud 24/7"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 text-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-roboto font-bold mb-6 text-purple-800">
              Smartwatches
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-700 font-openSans">
              La tecnología más avanzada en tu muñeca. Monitores de salud, GPS, 
              conectividad y mucho más en los mejores smartwatches del mercado.
            </p>
          </div>
        </div>
      </div>

      {/* Features Banner */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-openSans font-semibold text-rose-700">Monitor Cardíaco</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-mint-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <h3 className="font-openSans font-semibold text-mint-700">GPS Integrado</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-lavender-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-lavender-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-openSans font-semibold text-lavender-700">Apps Nativas</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-peach-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-peach-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-peach-700">Larga Duración</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="px-6 py-2 bg-purple-200 text-purple-800 rounded-full hover:bg-purple-300 transition-colors">
            Todos
          </button>
          <button className="px-6 py-2 bg-rose-100 text-rose-700 rounded-full hover:bg-rose-200 transition-colors">
            Apple
          </button>
          <button className="px-6 py-2 bg-mint-100 text-mint-700 rounded-full hover:bg-mint-200 transition-colors">
            Samsung
          </button>
          <button className="px-6 py-2 bg-lavender-100 text-lavender-700 rounded-full hover:bg-lavender-200 transition-colors">
            Deportivos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {smartwatches.map((watch) => (
            <div key={watch.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={watch.image} 
                alt={watch.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                <p className="text-gray-600 mb-4">{watch.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {watch.features.map((feature, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">{watch.price}</span>
                  <div className="space-x-2">
                    <button 
                      onClick={() => window.open(`https://wa.me/1234567890?text=${  encodeURIComponent(`¡Hola! Me interesa conocer más sobre el ${watch.name}.`)}`, '_blank')}
                      className="px-4 py-2 bg-purple-200 text-purple-800 rounded hover:bg-purple-300 transition-colors"
                    >
                      Ver Más
                    </button>
                    <button 
                      onClick={() => alert('Funcionalidad de comparación próximamente disponible')}
                      className="px-4 py-2 border border-purple-300 text-purple-700 rounded hover:bg-purple-200 hover:text-purple-800 transition-colors"
                    >
                      Comparar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-purple-200 to-pink-200 text-purple-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Mantente Actualizado</h2>
          <p className="text-xl mb-8">
            Recibe noticias sobre los últimos lanzamientos y ofertas especiales
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="flex-1 px-4 py-2 rounded text-gray-900 border border-purple-200 focus:border-purple-400 focus:outline-none"
            />
            <button className="px-6 py-2 bg-white text-purple-700 rounded font-semibold hover:bg-purple-50 transition-colors shadow-md">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smartwatches;
