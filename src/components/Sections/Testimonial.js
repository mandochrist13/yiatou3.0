import React from 'react';
import { FaQuoteRight } from 'react-icons/fa6';
import TestimonialSlider from '../Sliders/TestimonialSlider';

const Testimonial = () => {
    return (
        <div className='py-5 flex flex-col gap-4'>
            <h2 className='flex items-center gap-3 text-xl font-medium text-gray-500 px-3'>Témoignages clients <FaQuoteRight size={40}/></h2>
            <TestimonialSlider/>
        </div>
    );
}

export default Testimonial;
