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

export default function Slider(props) {
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
                        src={props.img1}
                        alt="image slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover w-[100%] h-[310px] md:h-[750px]"
                        src={props.img2}
                        alt="image slide 2"
                    />
                     </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="object-cover w-[100%] h-[310px] md:h-[750px]"
                        src={props.img3}
                        alt="image slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                
                    <img
                        className="object-cover w-[100%] h-[310px] md:h-[750px] "
                        src={props.img4}
                        alt="image slide 4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                
                    <img
                        className="object-cover w-[100%] h-[310px] md:h-[750px] "
                        src={props.img5}
                        alt="image slide 5"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}