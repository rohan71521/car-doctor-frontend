import { useState } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ban1 from '../../assets/images/homeCarousel/1.jpg';
import ban2 from '../../assets/images/homeCarousel/2.jpg';
import ban3 from '../../assets/images/homeCarousel/3.jpg';
import ban4 from '../../assets/images/homeCarousel/4.jpg';

const banners = [ban1, ban2, ban3, ban4];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImage = (direction) => {
    const lastIndex = banners.length - 1; 
    let newIndex;

    if (direction === 'next') {
      newIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : lastIndex;
    }

    setCurrentIndex(newIndex);
  };



  return (
    <div className="w-full h-[50vh] lg:h-[80vh] rounded overflow-hidden relative">
      {banners.map((banner, index) => (
        <div key={index + 1} className={`relative w-full h-full ${index === currentIndex ? '' : 'hidden'}`}>
          {/* overlay */}
          <div className='bg-gradient-to-r from-second-color to-third-color w-full h-full opacity-60 z-10 absolute top-0 left-0'></div>
          <img
            src={banner}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
          <div className="absolute lg:top-10 lg:left-10 md:top-5 md:left-5 top-2 left-2 z-20 text-third-color">
          <div>
            <h1>Affordable</h1>
            <h1>Price For Car</h1>
            <h1>Servicing</h1>
          </div>
          <p className='lg:py-10 py-5 text-justify max-w-md pr-2'>There are many variations of passages of  available,
             but  the majority have suffered alteration in some form</p>

          <div className='space-x-5'>
            <button className='button primary-fill-button'>Discover More </button>
            <button className='button white-outline-button'>Latest Project</button>
          </div>
          </div>
          <div className="absolute flex right-1  md:bottom-5 bottom-1 gap-5 z-20">
            <a onClick={() => handleImage('prev')} className="btn btn-circle hover:bg-theme-color hover:text-third-color"><FaArrowLeft /></a>
            <a onClick={() => handleImage('next')} className="btn btn-circle hover:bg-theme-color hover:text-third-color"><FaArrowRight /></a>
          </div>
        </div>
      ))}
    </div>

  );
}

export default Banner;
