import React, { useState } from 'react';
import TopBar from "../../components/topBar/TopBar";
import PageLayout from "../layout/PageLayout";
import BottomBar from "../../components/bottomBar/BottomBar";
import CategoryItem from '../../components/categories/CategoryItem';
import EchantillonCard from '../../components/echantillon/echantillonCard';
import { echantillon, echantillonItems } from '../../data/categoryData';

const ListEchantillon = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
//   const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const handleCategoryClick = (link, category) => {
    setSelectedCategory(category || 'all');
  };

  const filteredechantillon = selectedCategory === 'all' 
    ? echantillon 
    : echantillon.filter(echantillon => echantillon.category === selectedCategory);

  return (
    <PageLayout bottomBar={<BottomBar />} topBar={<TopBar />}>
      <div className="flex flex-col h-full bg-gray-50 translate-y-24 mb-16">
        <div className="flex gap-4 px-4 py-4 overflow-x-auto bg-white scrollbar-hide border-b border-gray-300">
          {echantillonItems.map((item) => (
            <CategoryItem
              key={item.id}
              item={item}
              isSelected={selectedCategory === (item.category || 'all')}
              onClick={handleCategoryClick}
            />
          ))}
        </div>

       

        <div className="grid grid-cols-2 gap-3 px-3 mb-16 mt-2">
          {filteredechantillon.map((echantillon) => (
            <EchantillonCard key={echantillon.id} echantillon={echantillon} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ListEchantillon; 