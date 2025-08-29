export const HOME_DATA = {
  hero: {
    title: "Diamond Jewelry",
    subtitle: "Descubre nuestra colección de diamantes de la más alta calidad",
    buttonText: "Explorar colección",
  },
  categories: {
    title: "Nuestras categorías",
    items: [
      {
        id: 1,
        title: "Catálogo de Productos",
        description: "Explora nuestra amplia colección de joyería fina",
        icon: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        link: "/productos",
      },
      {
        id: 2,
        title: "Relojes de Lujo",
        description: "Relojes premium y cronómetros exclusivos",
        icon: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        link: "/relojes",
      },
      {
        id: 3,
        title: "Smartwatches",
        description: "Tecnología inteligente en tu muñeca",
        icon: "https://images.unsplash.com/photo-1544117519-31a4b719223d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        link: "/smartwatches",
      },
      {
        id: 4,
        title: "Alianzas de Matrimonio",
        description: "El símbolo perfecto de su amor eterno",
        icon: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        link: "/alianzas",
      },
    ],
  },
  brands: {
    title: "Marcas de confianza",
    subtitle: "Trabajamos con las mejores marcas del mundo",
    names: [
      "Paddle Watch",
      "Tommy Hilfiger",
      "Tressa",
      "DKNY",
      "Swatch",
      "Garmin",
      "Adidas",
      "Casio",
      "SMART PADDLE",
      "John L. Cook",
      "Swarovski",
      "Puma",
      "Citizen",
      "Festina",
      "Seiko",
      "Tissot",
      "Invicta",
      "Orient",
      "Reebok",
      "Cat",
    ],
  },
};

export const HOME_ACTIONS = {
  navigateToCategory: (path: string) => {
    window.location.href = path;
  },

  openWhatsApp: (whatsappNumber: string) => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  },
};
