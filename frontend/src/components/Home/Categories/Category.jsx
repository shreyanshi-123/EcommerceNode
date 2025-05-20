import Slider from "react-slick";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './category.css'

const image1 = `${process.env.REACT_APP_API_URL}/assets/images/category/men.jpg`;
const image2 = `${process.env.REACT_APP_API_URL}/assets/images/category/women.jpg`;
const image3 = `${process.env.REACT_APP_API_URL}/assets/images/category/bags.jpg`;
const image4 = `${process.env.REACT_APP_API_URL}/assets/images/category/belts.webp`;
const image5 = `${process.env.REACT_APP_API_URL}/assets/images/category/shoes.webp`;
const image6 = `${process.env.REACT_APP_API_URL}/assets/images/category/outerwear.webp`;
const image7 = `${process.env.REACT_APP_API_URL}/assets/images/category/cargo.webp`;
// const AngleLeft = ` ${process.env.REACT_APP_API_URL}/assets/images/angle-left.png`
const AngleRight = ` ${process.env.REACT_APP_API_URL}/assets/images/angle.png`

const Category = () => {
    const settings = {
        autoplay: false,
        autoplaySpeed: 50000,
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        draggable: true,
        pauseOnHover: true,
        margin: 10,
        initialSlide: 0,
        lazyLoad: "progressive",
        prevArrow: (
            <div className="custom-prev-arrow">
              <img src={AngleRight} alt="" className="" />
            </div>
          ),
          nextArrow: (
            <div className="custom-next-arrow">
              <img src={AngleRight} alt="" className="rotate-[180deg]"/>
            </div>
          ),
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
               
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                initialSlide: 1
              }
            }
          ]
    };

    const List = [
        {
            id: '1',
            quantity: '23',
            category: 'Men',
            image: image1
        },
        {
            id: '2',
            quantity: '23',
            category: 'Women',
            image: image2
        },
        {
            id: '3',
            quantity: '23',
            category: 'Bags',
            image: image3
        },
        {
            id: '4',
            quantity: '23',
            category: 'Belts',
            image: image4
        },
        {
            id: '5',
            quantity: '23',
            category: 'Shoes',
            image: image5
        },
        {
            id: '6',
            quantity: '23',
            category: 'Outerwear',
            image: image6
        },
        {
            id: '7',
            quantity: '23',
            category: 'Cargo Trousers',
            image: image7
        }
    ];

    return (
        <section className="max-w-7xxl mx-auto category-section mt-[25px] lg:mt-[40px]">
            <div className="p-[15px]">
                <div className="category-header flex items-center mb-[40px]">
                    <h3 className="entry-title text-[22px] font-medium mr-[15px]">Best for your categories</h3>
                    <p className="text-[14px] text-[#a6a7ac]  items-center gap-1 mt-[5px]"><strong className="font-medium">23 categories</strong> belonging to a total of <strong className="font-medium">34,592 products</strong></p>
                </div>
                <Slider {...settings}>
                    {List.map((el, i) => (
                        <div key={i} className="relative w-full">
                            <div className="category-item">

                                <div className="module-body">
                                    <div className="category">
                                        <div className="category-thumbnail overflow-hidden mb-[14px]">
                                            <div className="total-product absolute z-[10] top-[10px] left-[10px] text-[11px] font-semibold py-[2px] px-[6px] bg-white">{el.quantity}</div>
                                            <a href="#" className="overflow-hidden relative image-category">
                                                <LazyLoadImage
                                                    src={el.image}
                                                    alt={el.category}
                                                    className="category-image"
                                                />
                                            </a>
                                        </div>
                                        <div className="category-content">
                                            <h3 className="entry-title text-[16px] font-medium text-blact text-center">
                                                <a href="#">{el.category}</a>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Category;
