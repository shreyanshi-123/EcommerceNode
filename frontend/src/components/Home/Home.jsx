import React from 'react';
import MetaData from "../Layout/MetaData"
// import AboutUs from "./AboutUs/AboutUs"
// import Amenities from "./Amenities/Amenities"
import BannerSlider from "./BannerSlider/BannerSlider"
import FreeShipping from "./FreeShipping/freeShipping"
import NewCollection1 from "./NewCollection/NewCollection1"
import NewCollection2 from "./NewCollection/NewCollection2"
import Category from "./Categories/Category"
import Signature from "./Signature"
import Review from "./ReviewSection/Review"

import SliderFunc from "./ProductSlider/slider"
import ShopNow from "./ShopNowSection/shopnow"
import InstagramSlider from "./InstagramSlider/instagram"
import Categoryy from "./category"


const Home = () => {
    return (
        <>
            <MetaData
                title={"Clotya – Fashion Store eCommerce Theme"}
                // description={"Discover premium residential apartments for sale in Zirakpur at The Clotya Aspire. Explore 3 & 4 BHK luxury flats for sale, including options near Chandigarh Airport, all with world-class amenities!"} 
                // keywords={"The Clotya Aspire, 3 BHK Flats in Zirakpur,4 BHK Flats in Zirakpur, Luxury Apartments in Zirakpur,Zirakpur Real Estate, Flats for Sale in Zirakpur, Clotya Aspire Zirakpur, Modern Apartments Zirakpur"}
                canonicalUrl={process.env.REACT_APP_API_URL}
            />

            <BannerSlider />
            <FreeShipping />
            {/* <NewCollection1 /> */}
            {/* <NewCollection2 /> */}
            <Category />
            <Signature />
            <Review />
            <SliderFunc />
            < ShopNow/>
            <InstagramSlider/>
            {/* <Categoryy/> */}
        </>
    )
}

export default Home