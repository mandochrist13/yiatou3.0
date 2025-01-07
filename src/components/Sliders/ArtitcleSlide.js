import Slider from "react-slick";

const ArtitcleSlide = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <Slider arrows={false} {...settings}>
          <div className='w-full h-[200px] bg-green-500 flex justify-center items-center'>
            <h3 className='text-white text-2xl'>1</h3>
          </div>
          <div className='w-full h-[200px] bg-green-500 flex justify-center items-center'>
            <h3 className='text-white text-2xl'>2</h3>
          </div>
          <div className='w-full h-[200px] bg-green-500 flex justify-center items-center'>
            <h3 className='text-white text-2xl'>3</h3>
          </div>
          <div className='w-full h-[200px] bg-green-500 flex justify-center items-center'>
            <h3 className='text-white text-2xl'>4</h3>
          </div>
        </Slider>
    );
}

export default ArtitcleSlide;
