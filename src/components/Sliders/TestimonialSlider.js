import Slider from "react-slick";

const TestimonialSlider = () => {
    const settings = {
        className: "slider variable-width",
        centerMode: true,
        infinite: true,
        centerPadding: "30px",
        slidesToShow: 1,
        speed: 500
      };
    return (
        <div  className="slider-container overflow-hidden">
      <Slider  {...settings}>
        <div className="h-[200px] px-2">
          <div className="w-full h-full bg-orange-300 rounded"></div>
        </div>
        <div className="h-[200px] px-2">
        <div className="w-full h-full bg-orange-300 rounded"></div>
        </div>
        <div className="h-[200px] px-2">
        <div className="w-full h-full bg-orange-300 rounded"></div>
        </div>
        <div className="h-[200px] px-2">
        <div className="w-full h-full bg-orange-300 rounded"></div>
        </div>
      </Slider>
    </div>
    );
}

export default TestimonialSlider;
