import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { samples } from '../../utils/utils';
import SampleCard from '../SampleCard';

const RelatedProducts = () => {
    const [isAnimating, setIsAnimating] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            navigate('/products');
        }, 300);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            handleClick();
        }
    };
    const handleSampleClick = (sampleId) => {
        navigate(`/echantillonDetails/${sampleId}`);
      };

    const products = [
        { id: 1, imageUrl: '/img/pro/p5.png', price: 2500 },
        { id: 2, imageUrl: '/img/pro/p6.png', price: 3000 },
        { id: 3, imageUrl: '/img/pro/p7.png', price: 1800 },
        { id: 4, imageUrl: '/img/pro/p8.png', price: 3500 },
    ];

    return (
        <section className="py-2 border-b-2 border-gray-100 overflow-hidden">
          <div className="px-2 flex space-x-4 overflow-x-auto scrollbar-hide">
          {samples.map((sample) => (
            <div key={sample.id} onClick={() => handleSampleClick(sample.id)}>
              <SampleCard
                id={sample.id}
                image={sample.image}
                price={sample.price}
              />
            </div>
          ))}
          </div>
        </section>
    );
}

export default RelatedProducts; 