import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
// import { InstagramEmbed } from 'react-social-media-embed';
import axios from 'axios';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import './instaslider.css'

const Post1 = `${process.env.REACT_APP_API_URL}/assets/images/Instagram/post1.jpg`
const Post2 = `${process.env.REACT_APP_API_URL}/assets/images/Instagram/post2.jpg`
const Post3 = `${process.env.REACT_APP_API_URL}/assets/images/Instagram/post3.jpg`
const Post4 = `${process.env.REACT_APP_API_URL}/assets/images/Instagram/post4.jpg`
const Post5 = `${process.env.REACT_APP_API_URL}/assets/images/Instagram/post5.jpg`
const Post6 = `${process.env.REACT_APP_API_URL}/assets/images/Instagram/post6.jpg`



const InstagramSlider = () => {

    const posts = [
        {
            id: 1,
            image: Post1,

        },
        {
            id: 2,
            image: Post2,

        },
        {
            id: 3,
            image: Post3,

        },
        {
            id: 4,
            image: Post4,

        },
        {
            id: 5,
            image: Post5,

        },
        {
            id: 6,
            image: Post6,

        }


    ]
   

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        swipeToSlide: true,
        touchMove: true,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 340,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
    };


    return (
        <section className='my-[40px]'>
            <div className="instagram-slider max-w-7xxl mx-auto ">
                <h2 className='text-[26px] lg:text-[38px] font-[400] leading-[31.2px] lg:leading-[45.6px] mb-[40px]  text-center'>Express yourself with #yobazar<br /> on instagram</h2>
                <Slider {...settings}>
                    {posts.map((posts) => (
                        <div key={posts.id} className="slider-item">
                            {/* <InstagramEmbed url={posts.permalink} width="100%" /> */}
                            {/* <NavLink to="/" className="block w-auto"> */}
                            <img src={posts.image} alt="Clotya" />
                                
                            {/* </NavLink> */}
                        </div>
                    ))}
                </Slider>
                <div className='mt-[30px] text-center'>
                <a className='underline text-black' href="#">Follow us on Instagram</a></div>
            </div>
        </section>
    );
};

export default InstagramSlider;
