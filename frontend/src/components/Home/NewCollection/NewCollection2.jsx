import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
const Collection2Item1 = ` ${process.env.REACT_APP_API_URL}/assets/images/NewCollection/collection3.jpg`
const Collection2Item2 = ` ${process.env.REACT_APP_API_URL}/assets/images/NewCollection/collection4.webp`

const Collection2 = () => {
    return (
        <section class=" max-w-7xxl m-auto">
            <div class="flex flex-wrap justify-self-center mt-[10px] lg:mt-[40px]">
                <div class="p-[15px] w-1/2 lg:w-1/4 flex justify-center items-center">
                    <div class="">
                        <div class="">
                            <div class="">
                                <LazyLoadImage src={Collection2Item1} alt="Clotya" className="  " /></div>
                        </div>
                    </div>
                </div>
                <div class=" p-[15px] w-1/2 flex justify-center items-center">
                    <div class="">
                        <div class="">
                            <div class="">
                                <LazyLoadImage src={Collection2Item2} alt="Clotya" className="  " /></div>
                        </div>
                    </div>
                </div>
                <div class="p-[15px] w-full lg:w-1/4 flex justify-center items-center">
                    <div class="">
                        <div class="">
                            <div class="">
                                <h4 class="font-semibold text-black text-[11px] lg:text-[12px] uppercase leading-[14.4px] tracking-[1px] mb-[8px] lg:mb-[10px]">NEW COLLECTIONS</h4></div>
                        </div>
                        <div class="">
                            <div class="">
                                <h2 class="text-[26px] lg:text-[38px] font-[400] leading-[31.2px] lg:leading-[45.6px] mb-[8px] lg:mb-[15px]">Best Sweatshirts and tracksuits for everyone!</h2></div>
                        </div>
                        <div class="">
                            <div class="mb-[32px]">
                                <p class="text-[14px] lg:text-[17px] text-[#75767c] leading-[25.5px]">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p></div>
                        </div>
                        <div class="">
                            <div class="">
                                <div class="flex clotya-button has-icon mb-[8px]" ><a class=" flex justify-center items-center  clotya-btn border-1 border-solid border-[#ddd] py-[8px] px-[15px] text-[15px] font-medium leading-[1.4] h-[42px] rounded-[2px] hover:text-white hover:border-[#8f8f8f] hover:bg-[#8f8f8f]" href="#">Shop Now  <FontAwesomeIcon icon={faLongArrowRight} className="ml-[10px] text-[18px]" /></a></div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:mt-[40px]"> <div className="px-[15px] py-[5px] lg:p-[15px] mx-auto"><div className="lg:py-[10px]"><hr /></div></div></div>
        </section>)
}

export default Collection2;