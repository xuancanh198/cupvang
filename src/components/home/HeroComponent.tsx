'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import Image from 'next/image';
const banners = [
    "/images/banner.png",
    "/images/banner-home-1.png",
    "/images/banner-home-2.jpg",
    "/images/banner-home-3.jpg",
];
export default function Example() {
    return (
        <div className="relative z-0 w-full min-h-[300px] md:min-h-screen overflow-hidden">
            <Swiper
                className="mySwiper z-0"
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full  min-h-[300px] md:min-h-[550px]">
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
        right-[5vw]
          -translate-y-1/2
          z-20
          bg-[#FBBC05CC]
          rounded-[20px]
          w-full
          md:w-[35vw]
          max-w-[90vw]
          md:max-w-[520px]
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
                        text-[24px] md:text-[32px] xl:text-[48px]
                    "
                >
                    Goldcup
                </h1>

                <p
                    className="
                     mt-4
                    text-[#023E8A]
                    font-medium
                    text-[16px] md:text-[20px] xl:text-[24px]
                    leading-normal
                "
                >
                    Chuyên cung cấp vật tư cho ngành dây và cáp
                </p>

                <a
                    href="#"
                    className="
                inline-block
                mt-8
                px-[12px] md:px-[16px] xl:px-[24px]
                 py-[8px] md:py-[10px] xl:py-[12px]
                 rounded-[20px] md:rounded-[30px]
                bg-[#03045E]
                text-white
                uppercase
                hover:bg-orange-500
                 text-[14px] md:text-[16px] xl:text-[20px]
          "
                >
                    Liên hệ ngay
                </a>
            </div>
        </div>
    );
}
