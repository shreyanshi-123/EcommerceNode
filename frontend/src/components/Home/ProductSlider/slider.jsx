import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faHeart, faShoppingBag, faArrowsUpDownLeftRight, faStar, faRotate } from '@fortawesome/free-solid-svg-icons';
import { getProducts } from '../../../Action/ProductAction'
// import   faHeart from '@fortawesome/free-regular-svg-icons';
import './slider.css';
import Review from '../ReviewSection/Review';



const Heart = `${process.env.REACT_APP_API_URL}/assets/images/Shopping/heart.png`;
const Arrow = `${process.env.REACT_APP_API_URL}/assets/images/Shopping/arrows.png`;
const Bags = `${process.env.REACT_APP_API_URL}/assets/images/Shopping/shopping-bags.png`;
const compare = `${process.env.REACT_APP_API_URL}/assets/images/Shopping/compare.png`;

const AngleRight = ` ${process.env.REACT_APP_API_URL}/assets/images/angle.png`

const baseUrl = window.location.hostname === 'localhost'
  ? 'http://localhost:5000'
  : process.env.REACT_APP_API_URL;




const HoverProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    prevArrow: (
      <div className="custom-prev-arrow">
        <img src={AngleRight} alt="" />
      </div>
    ),
    nextArrow: (
      <div className="custom-next-arrow">
        <img src={AngleRight} alt="" className="rotate-[180deg]" />
      </div>
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, arrows: false } }
    ]
  };

  const dispatch = useDispatch();
  const { products = [], loading, error } = useSelector(state => state.productList);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);




  return (
    <section className="max-w-7xxl mx-auto Product-section category-section mb-[40px] lg:my-[40px] ">
      <div className="">
        <div className="site-module p-[15px]">
          <div className="module-header flex flex-col lg:flex-row justify-between mt-[25px] lg:mt-[0px] lg:mb-[30px] pb-[15px] lg:pb-[0px]">
            <h3 className="entry-title max-w-full mb-[8px] lg:max-w-[35%] font-medium text-[20px] lg:text-[30px]">Featured Products</h3>
            <div className="entry-description max-w-[840px] lg:max-w-[60%] text-[#75767c] text-[14px] lg:text-[17px] font-[300]"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p></div>
          </div>
        </div>

        {loading && <p>Loading products...</p>}
        {error && <p>Error: {error}</p>}

        <Slider {...settings}>
          {products.products && products.products.length > 0 && products.products.map((product, index) => {
            //  {innerArray.map((product,index) => {
            const hoverImages = product.images.map(img => baseUrl + img);
            const productData = {
              id: product._id,
              title: product.title,
              price: product.sellingPrice,
              discountPercent: product.discountPrice ? ((1 - (product.discountPrice / product.sellingPrice)) * 100).toFixed(0) : null,
              discountPrice: product.discountPrice,
              Review: "2 reviews",
              hoverImages: hoverImages.length ? hoverImages : [baseUrl + product.images[0]]
            };

            return <ProductCard key={index} product={productData} />;
          })}
          
        </Slider>






      </div>
    </section>
  );
};

const ProductCard = ({ product }) => {
  const [hoverIndex, setHoverIndex] = useState(0);


  return (


    <div className="product-card ">
      <div className="thumbnail-wrapper mb-[20px]">
        <div className="product-badges"> {product.discountPercent && (
          <div className="product-badges absolute left-[10px] top-[10px] bg-white z-30">
            <span className={`badge style-1 trending font-medium text-[#47b486]`}>
              {product.discountPercent}%
            </span>
          </div>
        )}</div>

        <div className="product-buttons">
          <a href="#" className="wishlist hover:bg-[#ee403d] bg-white rounded-[50%] h-[34px] w-[34px] p-[4px] flex items-center justify-center  hover:text-[white]"><img src={Heart} alt="" className='w-[15px] h-[15px] shop-icon' /></a>
          <a href="#" className="quick-view wishlist hover:bg-[#ee403d] bg-white rounded-[50%] h-[34px] w-[34px] p-[4px] flex items-center justify-center  hover:text-[white]"><img src={Arrow} alt="" className='w-[15px] h-[15px] shop-icon' /></a>
          <a href="#" className="compare wishlist hover:bg-[#ee403d] bg-white rounded-[50%] h-[34px] w-[34px] p-[4px] flex items-center justify-center  hover:text-[white]"><img src={compare} alt="" className='w-[15px] h-[15px] shop-icon' /></a>
          <a href="#" className="add-to-cart wishlist hover:bg-[#ee403d] bg-white rounded-[50%] h-[34px] w-[34px] p-[4px] flex items-center justify-center  hover:text-[white]"><img src={Bags} alt="" className='w-[15px] h-[15px] shop-icon' /></a>
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

      <div className="content-wrapper">
        <div className="content-switcher">
          <div className="product-swatches mb-[10px]">
            <div className="product-review flex gap-2.5">
              <div className="stars flex gap-[6px] items-center">
                <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#edbc30]" /></div>
              <span className='font-medium text-[13px] capitalize'>{product.Review} </span>
            </div>
          </div>
        </div>
        <h3 className="product-title text-[15px] mb-[8px]"><a href="#" className='hover:no-underline no-underline hover:text-primary-red'>{product.title}</a></h3>
        <span className="price">

          <span className="woocommerce-Price-amount amount font-[14.1px] opacity-[0.3] line-through mr-2">
            {product.discountPrice ? `$ ${product.price}` : ``}
          </span>
         
          <span className="woocommerce-Price-amount amount font-medium">
            {product.discountPrice ? `$ ${product.discountPrice}` : `$ ${product.price}`}</span>
          
        </span>
      </div>
    </div>
    


  );
};

export default HoverProductSlider;
