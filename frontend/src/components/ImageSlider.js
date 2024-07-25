import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../css/ImageSlider.css';

import image1 from '../images/Slider.png';
import image2 from '../images/Slider.png';
import image3 from '../images/Slider.png';
import image4 from '../images/Slider.png';

const images = [image1, image2, image3, image4];

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: false,
    centerPadding: '0px',
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '90px', // Ensure visibility of left and right images
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '90px', // Ensure visibility of left and right images
        },
      },
    ],
  };

  return (
    <div className="image-slider-container">
      <div className="slider-overlay left" onClick={handlePrevClick}></div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`slide-${index}`} className="slider-image" />
          </div>
        ))}
      </Slider>
      <div className="slider-overlay right" onClick={handleNextClick}></div>
    </div>
  );
};

export default ImageSlider;
