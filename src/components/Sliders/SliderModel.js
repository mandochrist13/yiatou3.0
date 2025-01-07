import React, { useRef } from 'react';
import Slider from "react-slick";

const SliderModel = ({children, dots, onSlideChange}) => {
    const sliderRef = useRef(null);
    
    const settings = {
        dots: dots,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        touchThreshold: 10,
        swipe: true,
        beforeChange: (oldIndex, newIndex) => {
            if (onSlideChange) {
                // On ajoute 1 car les indices commencent à 0 mais nous voulons afficher à partir de 1
                onSlideChange(newIndex);
            }
        },
        onSwipe: (direction) => {
            if (!sliderRef.current) return;
            
            const currentSlide = sliderRef.current.innerSlider.state.currentSlide;
            const totalSlides = children.length;
            
            let nextSlide;
            if (direction === 'left') {
                nextSlide = (currentSlide + 1) % totalSlides;
            } else {
                nextSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
            }
            
            if (onSlideChange) {
                onSlideChange(nextSlide);
            }
        }
    };

    return (
        <Slider ref={sliderRef} {...settings}>
            {children}
        </Slider>
    );
};

export default SliderModel;
