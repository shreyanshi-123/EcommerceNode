import './shopnow.css'
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLongArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from '../../../Action/ProductAction'

const background = `${process.env.REACT_APP_API_URL}/assets/images/Products/background.jpg`;
const cart = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/shopping-cart.png`;
const Product1a = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product1a.jpg`;
const Product1b = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product1b.jpg`;
const Product2a = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product2a.jpg`;
const Product2b = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product2b.jpg`;
const Product3a = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product3a.jpg`;
const Product3b = `${process.env.REACT_APP_API_URL}/assets/images/ShopNow/product3b.jpg`;

const ShopNow = () => {
    const baseUrl = window.location.hostname === 'localhost'
        ? 'http://localhost:5000'
        : process.env.REACT_APP_API_URL;

    const dispatch = useDispatch();
    const { products = [], loading, error } = useSelector(state => state.productList);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    const [activeProduct, setActiveProduct] = useState(null);
    const style = {
        background: `url(${background})`,
        backgroundSize: '',
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
                        {products.products && products.products.length > 0 && (() => {
                            const featuredProducts = products.products.filter(product => product.featuredProduct === true) || [];

                            const firstFeatured = featuredProducts[0];
                            const secondFeatured = featuredProducts[2];
                            const thirdFeatured = featuredProducts[1];

                            return (
                                <>

                                    <div className="w-full sm:w-3/5 relative h-full">
                                        {/* first product */}
                                        {firstFeatured &&

                                            <div className="firstprod">
                                                {/* <div className="one bg-primary-red text-white font-medium rounded-[50%] w-[35px] h-[35px] flex justify-center items-center absolute top-[56%] left-[-7%]">1</div> */}
                                                <div className={`one ${activeProduct === 'one' ? 'active' : ''}`}
                                                    onMouseEnter={() => setActiveProduct('one')}
                                                    onMouseLeave={() => setActiveProduct(null)}
                                                >
                                                    <a href="javascript:void(0)" className={`product-card-one max-w-[410px] w-full   absolute left-[-6%] top-[32%] hover:no-underline no-underline hover:text-black ${activeProduct === 'one' ? 'active' : ''}`}>

                                                        <div className="product-wrapper flex items-center bg-white">
                                                            <div className="image-part w-[48%] relative">
                                                                <img src={`${baseUrl}${firstFeatured.images[0]}`} alt="" className='first-image ' />
                                                                <img src={`${baseUrl}${firstFeatured.images[1]}`} alt="" className='second-image absolute top-0' />

                                                            </div>
                                                            <div className="product-info-shop w-[52%]">
                                                                <h3 className='productname mb-[8px] hover:no-underline no-underline'>{firstFeatured.title}</h3>
                                                                <p className='price-of-product mb-[8px] hover:no-underline no-underline'>$ {firstFeatured.sellingPrice}</p>
                                                                <div className="review-product my-[15px]">
                                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                    <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#e6e6e6]" />
                                                                </div>
                                                                <div className="btn-shop-prod" > <a href="" className='hover:no-underline no-underline'> <button className='bg-black text-white black-btn-shop rounded-[30px] flex items-center gap-2'><img src={cart} alt="" className='w-[20px] h-[20px] invert hover:no-underline no-underline' />Add to cart</button></a></div>

                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>}
                                        {/* second product */}
                                        {secondFeatured &&


                                            <div className="secondProd">
                                                {/* <div className="two bg-primary-red text-white font-medium rounded-[50%] w-[35px] h-[35px] flex justify-center items-center absolute ">2</div> */}
                                                <div className={`two ${activeProduct === 'two' ? 'active' : ''}`}
                                                    onMouseEnter={() => setActiveProduct('two')}
                                                    onMouseLeave={() => setActiveProduct(null)}
                                                >
                                                    <div className="" >
                                                        <a href="javascript:void(0)" className={`product-card-two max-w-[410px] w-full  absolute top-[22%] right-[11%] hover:no-underline no-underline hover:text-black ${activeProduct === 'two' ? 'active' : ''}`}>



                                                            <div className="product-wrapper flex items-center bg-white">
                                                                <div className="image-part w-[48%] relative">
                                                                    <img src={`${baseUrl}${secondFeatured.images[1]}`} alt="" className='first-image ' />
                                                                    <img src={`${baseUrl}${secondFeatured.images[0]}`} alt="" className='second-image absolute top-0' />

                                                                </div>
                                                                <div className="product-info-shop w-[52%]">
                                                                    <h3 className='productname mb-[8px] hover:no-underline no-underline'>{secondFeatured.title}</h3>
                                                                    <p className='price-of-product mb-[8px] hover:no-underline no-underline'>$ {secondFeatured.sellingPrice}</p>
                                                                    <div className="review-product my-[15px]">
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#e6e6e6]" />
                                                                    </div>
                                                                    <div className="btn-shop-prod" > <a href="" className='hover:no-underline no-underline'> <button className='bg-black text-white black-btn-shop rounded-[30px] flex items-center gap-2'><img src={cart} alt="" className='w-[20px] h-[20px] invert ' />Add to cart</button></a></div>

                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>}
                                        {/* third product */}
                                        {thirdFeatured &&

                                            <div className="thirdProd">
                                                {/* <div className="three bg-primary-red text-white font-medium rounded-[50%] w-[35px] h-[35px] flex justify-center items-center ">3</div> */}
                                                <div className={`three ${activeProduct === 'three' ? 'active' : ''}`}
                                                    onMouseEnter={() => setActiveProduct('three')}
                                                    onMouseLeave={() => setActiveProduct(null)}
                                                >
                                                    <div className="" >
                                                        <a href="javascript:void(0)" className={`product-card-three max-w-[410px] w-full  absolute left-[-7%] bottom-[5%] hover:no-underline no-underline hover:text-black ${activeProduct === 'three' ? 'active' : ''}`}>

                                                            <div className="product-wrapper flex items-center bg-white">
                                                                <div className="image-part w-[48%] relative">
                                                                    <img src={`${baseUrl}${thirdFeatured.images[0]}`} alt="" className='first-image ' />
                                                                    <img src={`${baseUrl}${thirdFeatured.images[1]}`} alt="" className='second-image absolute top-0' />

                                                                </div>
                                                                <div className="product-info-shop w-[52%]">
                                                                    <h3 className='productname mb-[8px] hover:no-underline no-underline'>{thirdFeatured.title}</h3>
                                                                    <p className='price-of-product mb-[8px] hover:no-underline no-underline'>${thirdFeatured.discountPrice} - ${thirdFeatured.sellingPrice}</p>
                                                                    <div className="review-product my-[15px]">
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#000]" />
                                                                        <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#e6e6e6]" />
                                                                    </div>
                                                                    <div className="btn-shop-prod" > <a href="" className='hover:no-underline no-underline'> <button className='bg-black text-white black-btn-shop rounded-[30px] flex items-center gap-2'><img src={cart} alt="" className='w-[20px] h-[20px] invert hover:no-underline no-underline' />Select options</button></a></div>

                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>}
                                    </div>
                                </>
                            );
                        })()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopNow;
