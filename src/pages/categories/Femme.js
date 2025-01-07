import React, { useState } from 'react';
import TopBar from "../../components/topBar/TopBar";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";
import CategoryItem from '../../components/categories/CategoryItem';
import SubCategoryItem from '../../components/categories/SubCategoryItem';
import ProductCard from '../../components/products/ProductCard';
import { products, categoryItems, subCategories } from '../../data/categoryData';

const Femme = () => {
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

export default Femme; 