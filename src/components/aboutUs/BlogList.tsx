'use client'

import BlogItem from './BlogItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

const blogs = [
  { title: 'SET QUÀ 8/3 CHỊ EM NÀO CŨNG THÍCH', desc: 'Nếu 8/3 năm nay chị đang băn khoăn...' },
  { title: 'GỢI Ý QUÀ TẶNG DOANH NGHIỆP', desc: 'Những món quà tinh tế giúp doanh nghiệp...' },
  { title: 'GIẢI PHÁP LOGISTICS HIỆU QUẢ', desc: 'An toàn – đúng tiến độ – tối ưu chi phí...' },
  { title: 'XU HƯỚNG BAO BÌ 2025', desc: 'Bao bì thân thiện môi trường...' },
  { title: 'SET QUÀ 8/3 CHỊ EM NÀO CŨNG THÍCH', desc: 'Nếu 8/3 năm nay chị đang băn khoăn...' },
  { title: 'GỢI Ý QUÀ TẶNG DOANH NGHIỆP', desc: 'Những món quà tinh tế giúp doanh nghiệp...' },
]

export default function BlogList() {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-green-600">
          Tin tức
        </h3>

        <button className="text-sm text-green-600 border border-green-600 rounded-full px-3 py-1 hover:bg-green-50">
          Xem thêm →
        </button>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop
        spaceBetween={16}
        slidesPerView={4} // 👈 4 phần tử 1 hàng
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {blogs.map((item, index) => (
          <SwiperSlide key={index}>
            <BlogItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
