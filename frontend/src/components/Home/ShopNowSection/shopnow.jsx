import './shopnow.css'
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLongArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';

const background = `${process.env.REACT_APP_API_URL}/assets/images/Products/background.jpg`;
const cart = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/shopping-cart.png`;
const Product1a = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product1a.jpg`;
const Product1b = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product1b.jpg`;
const Product2a = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product2a.jpg`;
const Product2b = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product2b.jpg`;
const Product3a = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product3a.jpg`;
const Product3b = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product3b.jpg`;

const ShopNow = () => {
    const [activeProduct, setActiveProduct] = useState(null);
    const style = {
        background: `url(${background})`,
        backgroundSize: '', // Optional: Ensures the background covers the container
        height: '530px',
        backgroundPosition: '50% 82%'
    };

    return (
        <section className="shop-now-section  sm:h-[530px] mt-[40px] sm:mt-[80px]">
            <div style={style} className='bg-div'>
                <div className="max-w-7xxl mx-auto p-[15px]  h-full ">
                    <div className='flex items-center h-full flex-col sm:flex-row'>
                        <div className="pt-[15px] sm:pt-[0px] sm:w-2/5 ">
                            <div className="max-w-[353px] w-full mx-auto">
                                <div className="flex flex-col gap-[20px] lg:gap-[30px] wrapper-shop-sec">
                                    <h2 className="sm:mb-[30px] md:mb-[0px] text-[31px] sm:text-[36px] md:text-[49px] lg:text-[53px] font-[500] lg:leading-[1.2] ">Life from the comic book</h2>
                                    <p className="text-[17px] sm:text-[18px] lg:text-[20px]  leading-[1.2] ">Retro games t-shirts!</p>
                                    <div className='w-auto'><button className="py-[10px] px-[40px] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.3] h-[44px]  hover:bg-white text-white hover:text-primary-red bg-primary-red rounded-[30px] btn-shopnow">Shop Now</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-3/5 relative h-full">
                            {/* first product */}
                            <div className="firstprod">
                                {/* <div className="one bg-primary-red text-white font-medium rounded-[50%] w-[35px] h-[35px] flex justify-center items-center absolute top-[56%] left-[-7%]">1</div> */}
                                <div className={`one ${activeProduct === 'one' ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveProduct('one')}
                                    onMouseLeave={() => setActiveProduct(null)}
                                >
                                    <a href="javascript:void(0)" className={`product-card-one max-w-[410px] w-full max-h-[260px] h-full absolute left-[-6%] top-[32%] ${activeProduct === 'one' ? 'active' : ''}`}>

                                        <div className="product-wrapper flex items-center bg-white">
                                            <div className="image-part w-[48%] relative">
                                                <img src={Product1b} alt="" className='first-image ' />
                                                <img src={Product1a} alt="" className='second-image absolute top-0' />

                                            </div>
                                            <div className="product-info-shop w-[52%]">
                                                <h3 className='productname mb-[8px]'>Raw denim shorts with sequins</h3>
                                                <p className='price-of-product mb-[8px]'>$69.00</p>
                                                <div className="review-product my-[15px]">
                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#e6e6e6]" />
                                                </div>
                                                <div className="btn-shop-prod" > <a href=""> <button className='bg-black text-white black-btn-shop rounded-[30px] flex items-center gap-2'><img src={cart} alt="" className='w-[20px] h-[20px] invert' />Add to cart</button></a></div>

                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            {/* second product */}
                            <div className="secondProd">
                                {/* <div className="two bg-primary-red text-white font-medium rounded-[50%] w-[35px] h-[35px] flex justify-center items-center absolute ">2</div> */}
                                <div className={`two ${activeProduct === 'two' ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveProduct('two')}
                                    onMouseLeave={() => setActiveProduct(null)}
                                >
                                    <div className="" >
                                        <a href="javascript:void(0)" className={`product-card-two max-w-[410px] w-full max-h-[260px] h-full absolute top-[22%] right-[11%] ${activeProduct === 'two' ? 'active' : ''}`}>



                                            <div className="product-wrapper flex items-center bg-white">
                                                <div className="image-part w-[48%] relative">
                                                    <img src={Product2a} alt="" className='first-image ' />
                                                    <img src={Product2b} alt="" className='second-image absolute top-0' />

                                                </div>
                                                <div className="product-info-shop w-[52%]">
                                                    <h3 className='productname mb-[8px]'>Women's slim-fit cotton tank</h3>
                                                    <p className='price-of-product mb-[8px]'>$16.00</p>
                                                    <div className="review-product my-[15px]">
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#e6e6e6]" />
                                                    </div>
                                                    <div className="btn-shop-prod" > <a href=""> <button className='bg-black text-white black-btn-shop rounded-[30px] flex items-center gap-2'><img src={cart} alt="" className='w-[20px] h-[20px] invert' />Add to cart</button></a></div>

                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* third product */}
                            <div className="thirdProd">
                                {/* <div className="three bg-primary-red text-white font-medium rounded-[50%] w-[35px] h-[35px] flex justify-center items-center ">3</div> */}
                                <div className={`three ${activeProduct === 'three' ? 'active' : ''}`}
                                    onMouseEnter={() => setActiveProduct('three')}
                                    onMouseLeave={() => setActiveProduct(null)}
                                >
                                    <div className="" >
                                        <a href="javascript:void(0)" className={`product-card-three max-w-[410px] w-full max-h-[260px] h-full absolute left-[-7%] bottom-[5%] ${activeProduct === 'three' ? 'active' : ''}`}>

                                            <div className="product-wrapper flex items-center bg-white">
                                                <div className="image-part w-[48%] relative">
                                                    <img src={Product3a} alt="" className='first-image ' />
                                                    <img src={Product3b} alt="" className='second-image absolute top-0' />

                                                </div>
                                                <div className="product-info-shop w-[52%]">
                                                    <h3 className='productname mb-[8px]'>Textured vegan leather moto jacket</h3>
                                                    <p className='price-of-product mb-[8px]'>$693.00-$699.00</p>
                                                    <div className="review-product my-[15px]">
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#e6e6e6]" />
                                                    </div>
                                                    <div className="btn-shop-prod" > <a href=""> <button className='bg-black text-white black-btn-shop rounded-[30px] flex items-center gap-2'><img src={cart} alt="" className='w-[20px] h-[20px] invert' />Select options</button></a></div>

                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopNow;
