import React, { useState } from 'react';
import TopBar from "../../components/topBar/TopBar";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";
import CategoryItem from '../../components/categories/CategoryItem';
import SubCategoryItem from '../../components/categories/SubCategoryItem';
import ProductCard from '../../components/products/ProductCard';

// Données des produits électroniques
const products = [
  {
    id: 1,
    title: 'Smartphones',
    image: '/img/produit/electronique/smartphones.jpeg',
    price: 250000,
    category: 'smartphones'
  },
  {
    id: 2,
    title: 'Laptop',
    image: '/img/produit/electronique/ordinateur.jpeg',
    price: 450000,
    category: 'ordinateurs'
  },
  {
    id: 3,
    title: 'Baffle JBL',
    image: '/img/produit/electronique/audio.jpeg',
    price: 85000,
    category: 'audio'
  },
  {
    id: 4,
    title: 'Smart TV',
    image: '/img/produit/electronique/tv&video.jpeg',
    price: 550000,
    category: 'tv-video'
  },
  {
    id: 5,
    title: 'Console PS4',
    image: '/img/produit/electronique/gaming.jpeg',
    price: 450000,
    category: 'gaming'
  },
];

const categoryItems = [
  {
    id: 'all',
    title: 'Tout',
    image: '/img/produit/electronique/smartphones.jpeg',
    link: '/electronique/all'
  },
  {
    id: 1,
    title: 'Smartphones',
    image: '/img/produit/electronique/smartphones.jpeg',
    link: '/electronique/smartphones',
    category: 'smartphones'
  },
  {
    id: 2,
    title: 'Ordinateurs',
    image: '/img/produit/electronique/ordinateur.jpeg',
    link: '/electronique/ordinateurs',
    category: 'ordinateurs'
  },
  {
    id: 3,
    title: 'Audio',
    image: '/img/produit/electronique/audio.jpeg',
    link: '/electronique/audio',
    category: 'audio'
  },
  {
    id: 4,
    title: 'TV & Vidéo',
    image: '/img/produit/electronique/tv&video.jpeg',
    link: '/electronique/tv-video',
    category: 'tv-video'
  },
  {
    id: 5,
    title: 'Gaming',
    image: '/img/produit/electronique/gaming.jpeg',
    link: '/electronique/gaming',
    category: 'gaming'
  }
];

const subCategories = {
  all: ['Nouveautés', 'Promotions', 'Meilleures ventes', 'Reconditionnés'],
  smartphones: ['Samsung', 'iPhone', 'Xiaomi', 'Accessoires'],
  ordinateurs: ['Laptops', 'PC Bureau', 'Tablettes', 'Accessoires'],
  audio: ['Écouteurs', 'Enceintes', 'Casques', 'Home Cinema'],
  'tv-video': ['Smart TV', 'Projecteurs', 'Android TV', 'Accessoires'],
  gaming: ['Consoles', 'Jeux', 'Accessoires', 'PC Gaming']
};

const Electronique = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryClick = (link, category) => {
    setSelectedCategory(category || 'all');
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
      <div className="flex flex-col h-full bg-gray-50 translate-y-24 mb-16">
        <div className="flex gap-4 px-4 py-4 overflow-x-auto bg-white scrollbar-hide border-b border-gray-300">
          {categoryItems.map((item) => (
            <CategoryItem
              key={item.id}
              item={item}
              isSelected={selectedCategory === (item.category || 'all')}
              onClick={handleCategoryClick}
            />
          ))}
        </div>

        <div className="flex overflow-x-auto scrollbar-hide bg-white px-4 py-2">
          {subCategories[selectedCategory]?.map((subCategory, index) => (
            <SubCategoryItem
              key={index}
              subCategory={subCategory}
              isSelected={selectedSubCategory === subCategory}
              onClick={setSelectedSubCategory}
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 px-3 mb-16 mt-2">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Electronique; 