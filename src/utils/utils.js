export class Products {
    /**
     * Produit
     * @param {number} id 
     * @param {string} name 
     * @param {string} description 
     * @param {string[]} images 
     * @param {number} prix
     * @param {boolean} sampleAvailable
     * @param {number} minPurchase
     */
    constructor(id, name, description, images, prix, sampleAvailable, minPurchase) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = images;
        this.prix = prix;
        this.sampleAvailable = sampleAvailable;
        this.minPurchase = minPurchase;
    }
}

export const produits = [
    new Products(1, 'Sac à dos', "Description du produit,Description du produit,Description du produit 1,Description du produit 1...,Description du produit 1...,Description du produit 1...", ['/img/pro/p1.png','/img/pro/p2.png','/img/pro/p3.png'], 8500, true, 0),
    new Products(2, 'Cracheur', "Description du produit 2...", ['/img/pro/p4.png', '/img/pro/p5.png'], 3000, false, 5),
    new Products(3, 'NewBalance', "Chaussure haut de gamme comme tu connais. New modèle a l'ancienne comme jamais.", ['/img/chaussure-blanche.webp','/img/chaussure-noire.webp', '/img/chaussure-orange.webp'], 18000, true, 0),
    new Products(4, 'Clé USB Type-C', "Description du produit 4...", ['/img/pro/p7.png','/img/pro/p8.png','/img/pro/p9.png'], 3500, false, 10),
    new Products(5, 'Mini Caméra', "Description du produit 5...", ['/img/pro/p10.png','/img/pro/p6.png'], 15000, true, 0),
    new Products(6, 'Bouteille de champagne', "Description du produit 4...", ['/img/pro/champagne.jpg','/img/pro/champagne.jpg'], 3500, false, 10),
]
export const sliders = [
    '/img/slides/s1.png',
    '/img/slides/s2.png',
    '/img/slides/s3.png',
];

export const calculateDeliveryPrice = (basePrice) => {
  // Vous pouvez ajuster cette logique selon vos besoins
  return basePrice;
};

export const calculateDeliveryDates = (city) => {
  const today = new Date();
  const baseDays = 10;
  const additionalDays = city === 'Libreville' ? 0 : 2;
  const totalDays = baseDays + additionalDays;

  const startDate = new Date(today.getTime() + (baseDays * 24 * 60 * 60 * 1000));
  const endDate = new Date(today.getTime() + (totalDays * 24 * 60 * 60 * 1000));

  return {
    startDate: startDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
    endDate: endDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' }),
    daysRange: `${baseDays} - ${totalDays}`,
  };
};

export const formatCurrency = (amount, currency) => {
  return `${amount.toLocaleString()} ${currency}`;
};

export const addDaysToDate = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const formatDateRange = (startDate, endDate) => {
  const options = { day: 'numeric', month: 'short' };
  return `${startDate.toLocaleDateString('fr-FR', options)} - ${endDate.toLocaleDateString('fr-FR', options)}`;
};

export class Sample {
    /**
     * Échantillon
     * @param {number} id 
     * @param {string} name 
     * @param {string} description 
     * @param {string} image 
     * @param {number} price
     * @param {boolean} disponibility
     * @param {string[]} specifications
     */
    constructor(id, name, description, image, price, disponibility, specifications) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.image = image;
        this.price = price;
        this.disponibility = disponibility;
        this.specifications = specifications;
    }
}

export const samples = [
    new Sample(
        1,
        "Échantillon Sac à dos",
        "Cet échantillon de sac à dos est fabriqué avec des matériaux de haute qualité. Il vous permet de tester la robustesse et la finition du produit avant de commander en grande quantité.",
        ["/img/pro/p1.png", "/img/pro/p1.png"],
        2500,
        true,
        [
            "Dimensions: 30cm x 45cm",
            "Matériau: Polyester 600D",
            "Poche principale spacieuse",
            "Compartiment pour ordinateur portable"
        ]
    ),
    new Sample(
        2,
        "Échantillon Lunettes de luxe",
        "Échantillon de nos lunettes de luxe vous permettant d'apprécier la qualité des verres et la finition du cadre avant votre commande finale.",
        ["/img/pro/p12.png", "/img/pro/p12.png"],
        3500,
        true,
        [
            "Monture en acétate premium",
            "Verres polarisés",
            "Protection UV400",
            "Charnières renforcées"
        ]
    ),
    new Sample(
        3,
        "NewBalance",
        "Chaussure haut de gamme comme tu connais. New modèle a l'ancienne comme jamais.",
        ["/img/chaussure-blanche.webp", "/img/chaussure-noire.webp", "/img/chaussure-orange.webp"],
        4500,
        true,
        [
            "Résolution 1080p",
            "Vision nocturne",
            "Détection de mouvement",
            "Batterie longue durée"
        ]
    ),
    new Sample(
        4,
        "Échantillon Clé USB",
        "Échantillon de notre clé USB Type-C permettant de tester la vitesse de transfert et la compatibilité avec vos appareils.",
        ["/img/pro/p7.png", "/img/pro/p7.png"],
        1500,
        true,
        [
            "Capacité: 8GB",
            "Interface USB 3.0",
            "Vitesse de transfert jusqu'à 100MB/s",
            "Compatible Windows/Mac"
        ]
    ),
    new Sample(
        5,
        "Échantillon Bouteille",
        "Échantillon de notre bouteille de champagne premium, permettant d'apprécier la qualité du produit et son packaging.",
        ["/img/pro/champagne.jpg", "/img/pro/champagne.jpg"],
        5000,
        true,
        [
            "Volume: 200ml",
            "Verre premium",
            "Bouchon de qualité",
            "Design exclusif"
        ]
    ),
];

export const fetchEchantillonDetails = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const echantillon = samples.find(sample => sample.id === parseInt(id));
            if (echantillon) {
                resolve(echantillon);
            } else {
                reject(new Error("Échantillon non trouvé"));
            }
        }, 100);
    });
};

/**
 * Formate un nombre en prix avec le symbole FCFA
 * @param {number} amount - Le montant à formater
 * @returns {string} Le montant formaté avec FCFA
 */
export const formatPrice = (amount) => {
  // Vérifie si le montant est un nombre valide
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '0 FCFA';
  }

  // Formate le nombre avec des séparateurs de milliers
  const formattedAmount = amount.toLocaleString('fr-FR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return `${formattedAmount} FCFA`;
};
