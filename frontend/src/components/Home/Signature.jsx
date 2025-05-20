import { LazyLoadImage } from "react-lazy-load-image-component";
import React from 'react';
const Signature = ` ${process.env.REACT_APP_API_URL}/assets/images/signature.webp`
const chanellogo = ` ${process.env.REACT_APP_API_URL}/assets/images/chanel-logo.webp`


const Siggnature = () => {
    return (
        <section class="mt-[25px] lg:mt-[75px] pt-[25px] pb-[20px] lg:pt-[93px] lg:pb-[85px] bg-[#EDF2F9]">

            <div class="p-[15px]">
                <div class="text-center flex flex-col justify-center items-center">
                    <img decoding="async" src={chanellogo} class="brand w-[130px] mb-[20px] lg:mb-[40px]" />
                    <div class="entry-comment mx-auto mb-[16px] lg:mb-[40px] max-w-[840px] text-[16px] lg:text-[26px] text-black"><p>Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodobendo viverra maecenas accumsan lacus vel facilisis libero.</p></div>
                    <img decoding="async" src={Signature} class="signature w-[202px] mb-[20px] lg:mb-[40px]" />
                    <h4 class="entry-author text-black opacity-[0.6] font-semibold tracking-[1px] uppercase text-[12px]">CHANEL CEO</h4>
                </div>
            </div>

        </section>)
}

export default Siggnature;