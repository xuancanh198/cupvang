'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import Image from 'next/image';
const banners = [
    "/images/banner.png",
    "/images/banner.png",
    "/images/banner.png",
    "/images/banner.png",
    "/images/banner.png",
];
export default function Example() {
    return (
        <div className="relative z-0 w-full min-h-screen overflow-hidden">
            <Swiper
                className="mySwiper z-0"
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,              // 3s đổi slide
                    disableOnInteraction: false, // kéo tay vẫn auto chạy tiếp
                }}
                loop={true} // chạy vòng lặp
            > 
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full min-h-[550px]">
                            <Image
                                src={banner}
                                alt={`Banner ${index + 1}`}
                                fill
                                priority={index === 0}
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}              
            </Swiper>
            {/* HERO BOX */}
            <div
                className="
          absolute top-1/2
          left-[5vw]
          -translate-y-1/2
          z-20

          bg-[#FBBC05CC]
          rounded-[20px]

          w-[35vw]
          max-w-[520px]
          min-w-[280px]

          p-[clamp(20px,3vw,40px)]
        "
            >
                <h1
                    className="
            font-bebas-neue
            uppercase
            font-black
            text-[#03045E]
            leading-none
            text-[clamp(36px,4vw,64px)]
          "
                >
                    Goldcup
                </h1>

                <p
                    className="
                     mt-4
                    text-[#023E8A]
                    font-medium
                    text-[20px]
                    leading-normal
                "
                >
                    Logistics chuyên biệt cho dầu khí – thùng phuy – hạt nhựa:
                    <br />
                    An toàn | Đúng tiến độ | Tối ưu chi phí.
                </p>

                <a
                    href="#"
                    className="
                inline-block
                mt-8
                px-[clamp(20px,2.5vw,36px)]
                py-[clamp(10px,1.5vw,14px)]
                rounded-[30px]
                bg-[#03045E]
                text-white
                uppercase
                text-[clamp(14px,1.2vw,18px)]
                hover:bg-orange-500
          "
                >
                    Liên hệ ngay
                </a>
            </div>
        </div>
    );
}
