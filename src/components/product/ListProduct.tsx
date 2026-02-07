'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import { products, PRODUCT_CATEGORY } from '@/constant/Product'
import ProductItem from '@/components/product/ProductItem'
const CATEGORY = PRODUCT_CATEGORY.MATERIAL

export default function Example() {
  const filteredProducts = products.filter(
    item => item.category === CATEGORY
  )

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16">

        {/* ===== TITLE (DIV) ===== */}
        <div
          style={{ fontFamily: 'ABeeZee, sans-serif' }}
          className="
            text-center
            mb-16
            text-[48px]
            lg:text-[40px]
            leading-[100%]
            italic
            font-normal
            text-gray-900
          "
        >
          Danh sách sản phẩm
        </div>

        {/* ===== SLIDER ===== */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredProducts.map(product => (
            <SwiperSlide key={product.id}>
              <ProductItem product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
