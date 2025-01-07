import React, { useState } from 'react';
import TopBar from "../../components/topBar/TopBar";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";
import CategoryItem from '../../components/categories/CategoryItem';
import SubCategoryItem from '../../components/categories/SubCategoryItem';
import ProductCard from '../../components/products/ProductCard';

// Déplacer ces données vers categoryData.js plus tard
const products = [
  {
    id: 1,
    title: 'Soins visage',
    image: '/img/produit/beaute/soins-visage.jpeg',
    price: 15000,
    category: 'soins-visage'
  },
  {
    id: 2,
    title: 'Maquillage',
    image: '/img/produit/beaute/maquillage1.jpeg',
    price: 8000,
    category: 'maquillage'
  },
  {
    id: 3,
    title: 'Soins cheveux',
    image: '/img/produit/beaute/soins-cheveux1.jpeg',
    price: 12000,
    category: 'soins-cheveux'
  },
  {
    id: 4,
    title: 'Parfums',
    image: '/img/produit/beaute/parfums.jpeg',
    price: 45000,
    category: 'parfums'
  },
  {
    id: 5,
    title: 'Soins corps',
    image: '/img/produit/beaute/soins-corps.jpeg',
    price: 18000,
    category: 'soins-corps'
  },
  // Ajoutez d'autres produits...
];

const categoryItems = [
  {
    id: 'all',
    title: 'Tout',
    image: '/img/produit/beaute/soins-visage.jpeg',
    link: '/beaute/all'
  },
  {
    id: 1,
    title: 'Maquillage',
    image: '/img/produit/beaute/maquillage1.jpeg',
    link: '/beaute/maquillage',
    category: 'maquillage'
  },
  {
    id: 2,
    title: 'Soins Visage',
    image: '/img/produit/beaute/soins-visage.jpeg',
    link: '/beaute/soins-visage',
    category: 'soins-visage'
  },
  {
    id: 3,
    title: 'Soins Cheveux',
    image: '/img/produit/beaute/soins-cheveux1.jpeg',
    link: '/beaute/soins-cheveux',
    category: 'soins-cheveux'
  },
  {
    id: 4,
    title: 'Parfums',
    image: '/img/produit/beaute/parfums.jpeg',
    link: '/beaute/parfums',
    category: 'parfums'
  },
  {
    id: 5,
    title: 'Soins Corps',
    image: '/img/produit/beaute/soins-corps.jpeg',
    link: '/beaute/soins-corps',
    category: 'soins-corps'
  }
];

const subCategories = {
  all: ['Nouveautés', 'Bio', 'Promotions', 'Luxe'],
  maquillage: ['Teint', 'Yeux', 'Lèvres', 'Ongles'],
  'soins-visage': ['Crèmes', 'Sérums', 'Masques', 'Nettoyants'],
  'soins-cheveux': ['Shampoings', 'Après-shampoings', 'Masques', 'Huiles'],
  parfums: ['Femme', 'Homme', 'Unisexe', 'Coffrets'],
  'soins-corps': ['Crèmes', 'Huiles', 'Gommages', 'Déodorants']
};

const Beaute = () => {
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

export default Beaute;