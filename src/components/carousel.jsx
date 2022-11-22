import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import '../App.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import pic1 from "../images/kil1.jpg";
import pic2 from "../images/kil2.jpg";
import ser1 from "../images/ser1.jpg";
import ser4 from "../images/ser4.jpg";
import zan1 from "../images/zan1.jpg"; 

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper "
                 

            >
                <SwiperSlide>
                
                    <img
                        className="object-cover w-[100%] h-[310px] md:h-[750px] "
                        src={pic1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover w-[100%] h-[310px] md:h-[750px]"
                        src={pic2}
                        alt="image slide 2"
                    />
                     </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover w-[100%] h-[310px] md:h-[750px]"
                        src={ser4}
                        alt="image slide 3"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}