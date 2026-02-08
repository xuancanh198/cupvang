"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
const imagesLogoBrand = [
  "/images/image-logo-1.png",
  "/images/image-logo-2.png",
  "/images/image-logo-3.png",
  "/images/image-logo-4.png",
  "/images/image-logo-5.png",
  "/images/image-logo-6.png",
  "/images/image-logo-7.png",
  "/images/image-logo-8.png",
  "/images/image-logo-9.png",
  "/images/image-logo-10.png",
  "/images/image-logo-11.png"
];
export default function AwardsSection() {
  return (
    <section className="relative  w-full min-h-[300px] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/bg-slide.png"
          alt="Awards Background"
          fill
          className="object-cover"
        />
      </div>
      <h4 className="absolute top-[50px] text-[48px] left-0 right-0 text-center text-white z-10">Đối Tác của chúng tôi </h4>
      {/* Color overlay */}
      <div className="absolute inset-0 -z-10 bg-[#03045E]/70" />

      {/* Content */}
      <div className="absolute bottom-[20px] bg-white w-full h-[100px] py-[10px] left-0 right-0 z-10">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          loop={true}
          speed={800}
          slidesPerView={5}
          spaceBetween={30}
          className="w-full h-full"
        >

          {imagesLogoBrand.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center h-full">
              <Image
                src={image}
                alt={`Logo ${index + 1}`}
                width={200}
                height={100}
                className="object-contain h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
