import { LazyLoadImage } from "react-lazy-load-image-component";
import React from 'react';
const Item1 = ` ${process.env.REACT_APP_API_URL}/assets/images/delivery-location.png`
const Item2 = ` ${process.env.REACT_APP_API_URL}/assets/images/box.png`
const Item3 = ` ${process.env.REACT_APP_API_URL}/assets/images/24-hours-support.png`
const Item4 = ` ${process.env.REACT_APP_API_URL}/assets/images/credit-card.png`



const FreeShipping = () => {
    return (
        <section class="max-w-7xxl w-full mx-auto" >
            <div class="  mt-[24px]">
                <div className="flex flex-wrap ">
                    <div class="p-[15px] w-full md:w-1/2 lg:w-1/4">
                        <div class="flex items-start"><div class="iconbox-icon max-w-[100%] lg:max-w-[70px] flex md:items-center justify-center h-[75px] mr-[20px]"> <LazyLoadImage
                            src={Item1}
                            alt="Clotya"

                            className=" mx-[10px] w-[50px] h-[50px] "
                        /></div>
                            <div class="iconbox-detail max-w-[100%] lg:max-w-[190px]">
                                <h4 class="entry-title text-[18px] text-black font-medium mb-[8px]">Free Shipping</h4>
                                <div class="entry-description text-[13px] lg:text-[15px] text-[#75767c] mb-[16px] font-[300]">
                                    <p>Free Shipping for orders over £130.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="p-[15px] w-full md:w-1/2 lg:w-1/4">
                        <div class=" flex items-start"><div class="max-w-[100%] lg:max-w-[70px] mr-[20px] flex md:items-center justify-center h-[75px]"> <LazyLoadImage
                            src={Item2}
                            alt="Clotya"

                            className="mx-[10px] w-[50px] h-[50px] "
                        /></div>
                            <div class="iconbox-detail max-w-[100%] lg:max-w-[190px]">
                                <h4 class="entry-title text-[18px] text-black font-medium mb-[8px]">Money Guarantee</h4>
                                <div class="entry-description text-[13px] lg:text-[15px] text-[#75767c] mb-[16px] font-[300]">
                                    <p>Within 30 days for an exchange.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="p-[15px] w-full md:w-1/2 lg:w-1/4">
                        <div class="flex items-start"><div class="iconbox-icon max-w-[100%] lg:max-w-[70px] mr-[20px] flex md:items-center justify-center h-[75px]"> <LazyLoadImage
                            src={Item3}
                            alt="Clotya"

                            className="mx-[10px] w-[50px] h-[50px]"
                        /></div>
                            <div class="iconbox-detail max-w-[100%] lg:max-w-[190px]">
                                <h4 class="entry-title text-[18px] text-black font-medium mb-[8px]">Online Support</h4>
                                <div class="entry-description text-[13px] lg:text-[15px] text-[#75767c] mb-[16px] font-[300]">
                                    <p>Within 30 days for an exchange.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="p-[15px] w-full md:w-1/2 lg:w-1/4">
                        <div class="flex items-start">
                            <div class="iconbox-icon max-w-[100%] lg:max-w-[70px] mr-[20px] flex md:items-center justify-center h-[75px]"> <LazyLoadImage
                                src={Item4}
                                alt="Clotya"

                                className="mx-[10px] w-[50px] h-[50px] "
                            /></div>
                            <div class="iconbox-detail max-w-[100%] lg:max-w-[190px]">
                                <h4 class="entry-title text-[18px] text-black font-medium mb-[8px]">Flexible Payment</h4>
                                <div class="entry-description text-[13px] lg:text-[15px] text-[#75767c] mb-[16px] font-[300]">
                                    <p>Pay with Multiple Credit Cards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="px-[15px] py-[5px]">
                <hr /></div>
        </section>)
}

export default FreeShipping;