export const products = [
  {
    id: 1,
    title: 'Robe d\'été fleurie',
    image: '/img/produit/femme/robe-longue1.jpg',
    price: 2000,
    category: 'robes'
  },
  {
    id: 2,
    title: 'Top basique blanc',
    image: '/img/produit/femme/tops.webp',
    price: 200,
    category: 'tops'
  },
  {
    id: 3,
    title: 'Pantalon',
    image: '/img/produit/femme/pantalon.jpeg',
    price: 200,
    category: 'pantalons'
  },
  {
    id: 4,
    title: 'Jupe',
    image: '/img/produit/femme/jupe.jpeg',
    price: 200,
    category: 'jupes'
  },
  {
    id: 5,
    title: 'Accessoires',
    image: '/img/produit/femme/accessoires.jpeg',
    price: 200,
    category: 'accessoires'
  }
];

export const categoryItems = [
  {
    id: 'all',
    title: 'Tout',
    image: '/img/produit/femme/robe-longue1.jpg',
    link: '/femme/all'
  },
  {
    id: 1,
    title: 'Robes',
    image: '/img/produit/femme/robe-fleurie.jpeg',
    link: '/femme/robes',
    category: 'robes'
  },
  {
    id: 2,
    title: 'Tops',
    image: '/img/produit/femme/tops.webp',
    link: '/femme/tops',
    category: 'tops'
  },
  {
    id: 3,
    title: 'Pantalons',
    image: '/img/produit/femme/pantalon.jpeg',
    link: '/femme/pantalons',
    category: 'pantalons'
  },
  {
    id: 4,
    title: 'Jupes',
    image: '/img/produit/femme/jupe.jpeg',
    link: '/femme/jupes',
    category: 'jupes'
  },
  {
    id: 5,
    title: 'Accessoires',
    image: '/img/produit/femme/accessoires.jpeg',
    link: '/femme/accessoires',
    category: 'accessoires'
  }
];

export const subCategories = {
  all: ['Nouveautés', 'Tendances', 'Promotions', 'Collections'],
  robes: ['Robes courtes', 'Robes longues', 'Robes de soirée', 'Robes casual'],
  tops: ['T-shirts', 'Chemises', 'Débardeurs', 'Pulls'],
  pantalons: ['Jeans', 'Pantalons classiques', 'Leggings', 'Shorts'],
  jupes: ['Mini jupes', 'Jupes midi', 'Jupes longues', 'Jupes plissées'],
  accessoires: ['Sacs', 'Bijoux', 'Ceintures', 'Écharpes']
}; 