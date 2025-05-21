
import React from 'react';

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLongArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
const ReviewImg = ` ${process.env.REACT_APP_API_URL}/assets/images/reviewImg.webp`



const Review = () => {
    return (
        <section class="mt-[25px] lg:mt-[85px] max-w-7xxl mx-auto">
            <div class="flex flex-col lg:flex-row">
                <div class="w-auto lg:w-[50%]">
                    <div class="p-[15px]">
                        <div class="">
                            <div class="">
                                <img loading="lazy" decoding="async" width="654" height="680" src={ReviewImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[7.665%]">
                    <div class="">
                    </div>
                </div>
                <div class=" lg:w-[41.66666667%] p-[15px]">
                    <div class="">
                        <div class="">
                            <div class="">
                                <h4 class="font-semibold text-black text-[11px] lg:text-[12px] uppercase leading-[14.4px] tracking-[1px] mb-[8px] lg:mb-[10px]">NEW COLLECTIONS</h4></div>
                        </div>
                        <div class="">
                            <div class="">
                                <h2 class="text-[26px] lg:text-[38px] font-[400] leading-[31.2px] lg:leading-[45.6px] mb-[8px] lg:mb-[15px]">Best Sweatshirts and tracksuits for everyone!</h2>		</div>
                        </div>
                        <div class="">
                            <div class="mb-[16px] lg:mb-[32px]">
                                <p class="text-[14px] lg:text-[17px] text-[#75767c] leading-[25.5px]">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p></div>
                        </div>
                        <div class="">
                            <div class="">
                                <div class="flex clotya-button has-icon"><a class=" flex justify-center items-center  clotya-btn border-1 border-solid border-[#ddd] py-[8px] px-[15px] text-[15px] font-medium leading-[1.4] h-[42px] rounded-[2px] hover:text-white hover:border-[#8f8f8f] hover:bg-[#8f8f8f] hover:no-underline no-underline" href="#">Shop Now  <FontAwesomeIcon icon={faLongArrowRight} className="ml-[10px] text-[18px]" /></a></div></div>	</div>
                    </div>
                    <div class="">
                        <div class="">
                            <div class="mt-[30px] mb-[20px] lg:mt-[70px] lg:mb-[60px]">
                                <hr className="bg-[#DEE0EA]" />
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="">
                            <div class="">
                                <div class="flex mb-[20px]"><div class="stars flex gap-[6px] items-center"> 
                                <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#edbc30]" />
                                <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#edbc30]" />
                                <FontAwesomeIcon icon={faStar} className="  text-[12px] text-[#edbc30]" />
                                <FontAwesomeIcon icon={faStar} className="  text-[12px] text-[#edbc30]" />
                                <FontAwesomeIcon icon={faStar} className=" text-[12px] text-[#edbc30]" /></div>
                                <span className="ml-[12px] text-[13px] text-[#75767c]">4.5 (10.000+) Rating</span></div>
                                <div class="entry-comment text-[14px] lg:text-[16px] text-[#75767c] leading-[25.5px] mb-[10px]"><p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                                </div>
                                <h4 class="enty-author font-medium text-[14px] mb-[10px]">Petra van der Meer</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-[40px]"> <div className="px-[15px] py-[5px] lg:p-[15px] mx-auto"><div className="lg:py-[10px]"><hr /></div></div></div>
        </section >
    )
}

export default Review;

