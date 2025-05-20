import './Banner.css';
import React from 'react';
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const banner1 = ` ${process.env.REACT_APP_API_URL}/assets/images/BannerSlider/slider1.webp`
const banner2 = ` ${process.env.REACT_APP_API_URL}/assets/images/BannerSlider/slider2.webp`
const banner3 = ` ${process.env.REACT_APP_API_URL}/assets/images/BannerSlider/slider3.webp`
const forward = ` ${process.env.REACT_APP_API_URL}/assets/images/BannerSlider/forward.png`
const AngleLeft = ` ${process.env.REACT_APP_API_URL}/assets/images/angle-left.png`
const AngleRight = ` ${process.env.REACT_APP_API_URL}/assets/images/right-arrow-angle.png`

const BannerSlider = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position and add/remove class
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Attach the scroll event
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const settings = {
    autoplay: false,
    autoplaySpeed: 50000,
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    pauseOnHover: false,
    lazyLoad: "progressive",
    prevArrow: (
      <div className="custom-prev-arrow">
        <img src={AngleLeft} alt="" />
      </div>
    ),
    nextArrow: (
      <div className="custom-next-arrow">
        <img src={AngleRight} alt="" />
      </div>
    ),
  };

  const slides = [
    {
      image: banner1,
      subtitle: "WINTER 2022 COLLECTION",
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      buttonText: "Shop Collection",
    },
    {
      image: banner2,
      subtitle: "WINTER 2022 COLLECTION",
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      buttonText: "Shop Collection",
    },
    {
      image: banner3,
      subtitle: "WINTER 2022 COLLECTION",
      title: "VALENTIN PAUL ESSENTIAL COLLECTION",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      buttonText: "Shop Collection",
    },
  ];
  
  return (
    <section className={`overflow-hidden banner-section ${scrolled ? 'BannerScrolled' : ''}`}>

      <Slider {...settings}>
        {slides.map((el, i) => (
          <div key={i} className='relative w-full h-screen banner-wrap mb-[20px] lg:mb-0'>

            <img
              src={el.image}
              alt={`Slide ${i + 1}`}
              className="absolute top-0 left-0 w-full h-full position-center object-cover z-0"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/25 z-10"></div>
            <div className="relative z-20 flex items-center justify-center h-full w-full text-center px-4">
              <div className="text-white max-w-7xxl mx-auto px-[0px] sm:px-[15px]">
                <h4 className="text-white text-[10px] md:text-[12px] font-semibold tracking-[1px] uppercase">{el.subtitle}</h4>
                <h1 className="text-[34px] sm:text-[50px] md:text-[66px] font-[500] sm:font-[300]  lg:text-[77px] xl:text-[98px] lg:font-semibold leading-[1.2] uppercase">{el.title}</h1>
                <p className="text-[13px] sm:text-lg md:text-[16px] opacity-[0.6]">{el.text}</p>
                <button className="mt-4 px-6 py-2 text-[16px] sm:text-sm sm:text-white font-semibold flex flex-row gap-2 justify-center w-full text-white rounded  left-animate">
                  {el.buttonText} <img className='invert ' src={forward} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </section>
  );
};

export default BannerSlider;
