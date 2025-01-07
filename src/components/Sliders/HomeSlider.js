import React from 'react';
import Slider from "react-slick";
import { sliders } from '../../utils/utils';

const HomeSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        style={{
          width: "15px",
          height: "15px",
          borderRadius: "50%",
          backgroundColor: "#000",
          margin: "0 5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
      ></div>
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          listStyle: "none",
        }}
      >
        {dots}
      </div>
    ),
  };

  return (
    <Slider arrows={false} {...settings} className="w-full mt-36 h-auto">
      {sliders.map((img, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "8rem",
          }}
        >
          <img
            src={img}
            alt={`slider-${i}`}
            style={{
              width: "100%",
              height: "9rem",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlider;
