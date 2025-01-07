import React, { useState } from 'react';
import TopBar from "../../components/topBar/TopBar";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";
import CategoryItem from '../../components/categories/CategoryItem';
import SubCategoryItem from '../../components/categories/SubCategoryItem';
import ProductCard from '../../components/products/ProductCard';

// Déplacer ces données vers categoryData.js si ce n'est pas déjà fait
const products = [
  {
    id: 1,
    title: 'Chemise Oxford Slim Fit',
    image: '/img/produit/homme/chemise.jpeg',
    price: 2500,
    category: 'chemises'
  },
  {
    id: 2,
    title: 'Jean Coupe',
    image: '/img/produit/homme/pantalons.jpeg',
    price: 3000,
    category: 'pantalons'
  },
  {
    id: 3,
    title: 'Chaussures de Sport',
    image: '/img/produit/homme/chaussures.jpeg',
    price: 4500,
    category: 'chaussures'
  },
  {
    id: 4,
    title: 'Accessoires',
    image: '/img/produit/homme/accessoires.jpeg',
    price: 7500,
    category: 'accessoires'
  },
  {
    id: 5,
    title: 'Veste',
    image: '/img/produit/homme/vestes.jpeg',
    price: 8500,
    category: 'vestes'
  },
];

const categoryItems = [
  {
    id: 'all',
    title: 'Tout',
    image: '/img/produit/homme/chemise.jpeg',
    link: '/homme/all'
  },
  {
    id: 1,
    title: 'Chemises',
    image: '/img/produit/homme/chemise.jpeg',
    link: '/homme/chemises',
    category: 'chemises'
  },
  {
    id: 2,
    title: 'Pantalons',
    image: '/img/produit/homme/pantalons.jpeg',
    link: '/homme/pantalons',
    category: 'pantalons'
  },
  {
    id: 3,
    title: 'Chaussures',
    image: '/img/produit/homme/chaussures.jpeg',
    link: '/homme/chaussures',
    category: 'chaussures'
  },
  {
    id: 4,
    title: 'Accessoires',
    image: '/img/produit/homme/accessoires.jpeg',
    link: '/homme/accessoires',
    category: 'accessoires'
  },
  {
    id: 5,
    title: 'Vestes',
    image: '/img/produit/homme/vestes.jpeg',
    link: '/homme/vestes',
    category: 'vestes'
  }
];

const subCategories = {
  all: ['Nouveautés', 'Promotions', 'Tendances', 'Collections'],
  chemises: ['Casual', 'Business', 'Manches courtes', 'Lin'],
  pantalons: ['Jeans', 'Chinos', 'Cargo', 'Shorts'],
  chaussures: ['Sneakers', 'Ville', 'Boots', 'Sandales'],
  accessoires: ['Montres', 'Ceintures', 'Sacs', 'Bijoux'],
  vestes: ['Cuir', 'Blazers', 'Bombers', 'Denim']
};

const Homme = () => {
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

export default Homme;