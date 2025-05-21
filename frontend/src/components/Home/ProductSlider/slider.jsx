import React, { useState } from 'react';

import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart, faShoppingBag, faArrowsUpDownLeftRight, faStar, faRotate } from '@fortawesome/free-solid-svg-icons';
// import   faHeart from '@fortawesome/free-regular-svg-icons';
import './slider.css';
import Review from '../ReviewSection/Review';

// Image imports
const Jacket1 = `${process.env.REACT_APP_API_URL}/assets/images/Products/jackets/basic1.jpeg`;
const Jacket2 = `${process.env.REACT_APP_API_URL}/assets/images/Products/jackets/basic2.jpeg`;
const Jacket3 = `${process.env.REACT_APP_API_URL}/assets/images/Products/jackets/basic3.jpeg`;
const Jacket4 = `${process.env.REACT_APP_API_URL}/assets/images/Products/jackets/basic4.jpeg`;
const Jacket5 = `${process.env.REACT_APP_API_URL}/assets/images/Products/jackets/basic5.jpeg`;

const Leggings1 = `${process.env.REACT_APP_API_URL}/assets/images/Products/leggings/leggings1.jpeg`;
const Leggings2 = `${process.env.REACT_APP_API_URL}/assets/images/Products/leggings/leggings2.jpeg`;
const Leggings3 = `${process.env.REACT_APP_API_URL}/assets/images/Products/leggings/leggings3.jpeg`;
const Leggings4 = `${process.env.REACT_APP_API_URL}/assets/images/Products/leggings/leggings4.jpeg`;

const Pants1 = `${process.env.REACT_APP_API_URL}/assets/images/Products/Pants/pants1.webp`;
const Pants2 = `${process.env.REACT_APP_API_URL}/assets/images/Products/Pants/pants2.webp`;
const Pants3 = `${process.env.REACT_APP_API_URL}/assets/images/Products/Pants/pants3.jpeg`;
const Pants4 = `${process.env.REACT_APP_API_URL}/assets/images/Products/Pants/pants4.jpeg`;

const Hoody1 = `${process.env.REACT_APP_API_URL}/assets/images/Products/PinkHoody/printedh1.jpg`;
const Hoody2 = `${process.env.REACT_APP_API_URL}/assets/images/Products/PinkHoody/printedh2.jpg`;
const Hoody3 = `${process.env.REACT_APP_API_URL}/assets/images/Products/PinkHoody/printedh3.jpg`;
const Hoody4 = `${process.env.REACT_APP_API_URL}/assets/images/Products/PinkHoody/printedh4.jpg`;

const WhiteTee1 = `${process.env.REACT_APP_API_URL}/assets/images/Products/WhiteTshirt/cup1.jpeg`;
const WhiteTee2 = `${process.env.REACT_APP_API_URL}/assets/images/Products/WhiteTshirt/cup2.jpeg`;
const WhiteTee3 = `${process.env.REACT_APP_API_URL}/assets/images/Products/WhiteTshirt/cup3.jpeg`;
const WhiteTee4 = `${process.env.REACT_APP_API_URL}/assets/images/Products/WhiteTshirt/cup4.jpeg`;

const Heart = `${process.env.REACT_APP_API_URL}/assets/images/Shopping/heart.png`;
const Arrow = `${process.env.REACT_APP_API_URL}/assets/images/Shopping/arrows.png`;
const Bags = `${process.env.REACT_APP_API_URL}/assets/images/Shopping/shopping-bags.png`;
const compare = `${process.env.REACT_APP_API_URL}/assets/images/Shopping/compare.png`;

const AngleRight = ` ${process.env.REACT_APP_API_URL}/assets/images/angle.png`
// Products
const productList = [
  {
    id: 1,
    title: "Basic Colored Sweatpants With Elastic Hems",
    price: "110.99",
    imageMain: Pants1,
    Review : '1 review',
    hoverImages: [Pants1, Pants2, Pants3, Pants4]
  },
  {
    id: 2,
    title: "Basic High-Neck Puff Jacket",
    price: "110.99",
    Review : '2 reviews',
    imageMain: Jacket1,
    
    hoverImages: [Jacket1, Jacket2, Jacket3, Jacket4, Jacket5]
  },
  {
    id: 3,
    title: "Basic Relax Fit Leggings",
    price: "110.99",
    Review : '3 reviews',
    imageMain: Leggings1,
    hoverImages: [Leggings1, Leggings2, Leggings3, Leggings4]
  },
  {
    id: 4,
    title: "Check Overshirt With Pocket Detail",
    Review : '1 review',
    price: "110.99",
    imageMain: WhiteTee1,
    hoverImages: [WhiteTee1, WhiteTee2, WhiteTee3, WhiteTee4]
  },
  {
    id: 5,
    title: "Rose Printed Hoodie",
    price: "110.99",
    Review : '1 review',
    imageMain: Hoody1,
    hoverImages: [Hoody1, Hoody2, Hoody3, Hoody4]
  }
];

const productBadge = () => [
  { title: 'Trending', text: 'text-[#75767c]' },
  { title: '15%', text: 'text-[#47b486]' },
  { title: '15%', text: 'text-[#47b486]' },
  { title: '15%', text: 'text-[#47b486]' },
  { title: '15%', text: 'text-[#47b486]' }
];


const HoverProductSlider = () => {
  const settings = {
    dots: true, // globally disabled
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: (
      <div className="custom-prev-arrow">
        <img src={AngleRight} alt="" className="" />
      </div>
    ),
    nextArrow: (
      <div className="custom-next-arrow">
        <img src={AngleRight} alt="" className="rotate-[180deg]" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      }
    ]
  };
  const badges = productBadge();

  return (
    <section className="max-w-7xxl mx-auto Product-section category-section mb-[40px] lg:my-[40px] ">
      <div className="">
        <div class="site-module p-[15px]">
          <div class="module-header flex flex-col lg:flex-row justify-between mt-[25px] lg:mt-[0px] lg:mb-[30px] pb-[15px] lg:pb-[0px]">
            <h3 class="entry-title max-w-full mb-[8px] lg:max-w-[35%] font-medium text-[20px] lg:text-[30px]">Featured Products</h3>
            <div class="entry-description max-w-[840px] lg:max-w-[60%] text-[#75767c] text-[14px] lg:text-[17px] font-[300]"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p></div>
          </div>
        </div>
        <Slider {...settings} className=''>
          {productList.map((product, index) => (
            <ProductCard key={product.id} product={product} badge={badges[index]} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

const ProductCard = ({ product, badge }) => {
  const [hoverIndex, setHoverIndex] = useState(0);

  return (

    <div className="product-card ">
      <div className="thumbnail-wrapper mb-[20px]">
        <div class="product-badges"> {badge && (
          <div className="product-badges absolute left-[10px] top-[10px] bg-white z-30">
            <span className={`badge style-1 trending font-medium ${badge.text}`}>
              {badge.title}
            </span>
          </div>
        )}</div>
        <div className="product-buttons">
          <a href="#" className="wishlist hover:bg-[#ee403d] bg-white rounded-[50%] h-[34px] w-[34px] p-[4px] flex items-center justify-center  hover:text-[white]"><img src={Heart} alt="" className='w-[15px] h-[15px] shop-icon' /></a>
          <a href="#" className="quick-view wishlist hover:bg-[#ee403d] bg-white rounded-[50%] h-[34px] w-[34px] p-[4px] flex items-center justify-center  hover:text-[white]"><img src={Arrow} alt="" className='w-[15px] h-[15px] shop-icon'/></a>
          <a href="#" className="compare wishlist hover:bg-[#ee403d] bg-white rounded-[50%] h-[34px] w-[34px] p-[4px] flex items-center justify-center  hover:text-[white]"><img src={compare} alt="" className='w-[15px] h-[15px] shop-icon'/></a>
          <a href="#" className="add-to-cart wishlist hover:bg-[#ee403d] bg-white rounded-[50%] h-[34px] w-[34px] p-[4px] flex items-center justify-center  hover:text-[white]"><img src={Bags} alt="" className='w-[15px] h-[15px] shop-icon'/></a>
        </div>

        <div className="hover-slider-container">
          <img
            src={product.hoverImages[hoverIndex]}
            alt={`${product.title} image ${hoverIndex + 1}`}
            className="main-product-img"
          />

          <div className="hover-zones">
            {product.hoverImages.map((_, i) => (
              <div
                key={i}
                className="hover-zone"
                onMouseEnter={() => setHoverIndex(i)}
              />
            ))}
          </div>

          <div className="hover-indicators w-full">
            {product.hoverImages.map((_, i) => (
              <div
                key={i}
                className={`hover-dot ${hoverIndex === i ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div class="content-wrapper">
        <div class="content-switcher">
          <div class="product-swatches mb-[10px]">
            <div class="product-review flex gap-2.5">
              <div class="stars flex gap-[6px] items-center">
                <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#edbc30]" /></div>
              <span className='font-medium text-[13px]'>{product.Review} </span>
            </div>
          </div>
        </div>
        <h3 class="product-title text-[15px] mb-[8px]"><a href="#" className='hover:no-underline no-underline hover:text-primary-red'>{product.title}</a></h3>
        <span class="price">

          <span class="woocommerce-Price-amount amount font-[14.1px] opacity-[0.3] line-through mr-2">
            <span class="woocommerce-Price-currencySymbol">$</span>25.90
          </span>
          {/* <span class="screen-reader-text">Original price was: $25.90.</span> */}
          <span class="woocommerce-Price-amount amount font-medium">
            <span class="woocommerce-Price-currencySymbol">$</span>{product.price}</span>
          {/* <span class="screen-reader-text">Current price is: $19.90.</span> */}
        </span>
      </div>
    </div>

  );
};

export default HoverProductSlider;
