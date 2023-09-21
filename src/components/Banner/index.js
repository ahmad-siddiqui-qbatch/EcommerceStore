import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';
import { Container } from 'react-bootstrap';

const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true, // Enable fading animation
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed
  };
  return (
    <div className='banner'>
      <div className="slider-container">
        <Slider {...settings}>
          <div className='slide'>
            <img src='https://wpbingo-fashow.myshopify.com/cdn/shop/files/slider-1.jpg?v=1663991033' />
            <Container>
              <div className='slider-inner'>
                <span className='subtitle'>30% OFF EVERYTHING</span>
                <h1 className='banner-heading'>End of season sale</h1>
                <button className='btn btn-secondary'>Shop men</button>
              </div>
            </Container>
          </div>
          <div className='slide'>
          <img src='https://wpbingo-fashow.myshopify.com/cdn/shop/files/slider2_4a73c90b-c7b5-4f9d-813d-1085481e08ae.jpg?v=1665116844' />
            <Container>
              <div className='slider-inner'>
                <span className='subtitle'>30% OFF EVERYTHING</span>
                <h1 className='banner-heading'>Spring Collection</h1>
                <button className='btn btn-secondary'>Shop Now</button>
              </div>
            </Container>
          </div>
          <div className='slide'>
          <img src='https://wpbingo-fashow.myshopify.com/cdn/shop/files/slider-1.jpg?v=1663991033' />
            <Container>
              <div className='slider-inner'>
                <span className='subtitle'>NEW COLLECTION</span>
                <h1 className='banner-heading'>Upto 60% off</h1>
                <button className='btn btn-secondary'>Shop Now</button>
              </div>
            </Container>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default index;