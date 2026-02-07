import Image from 'next/image'
import Link from 'next/link'

import type { Product } from '@/constant/Product'

function ProductItem({ product }: { product: Product }) {
  return (
      <Link
          href={`/product/${product.slug}`}
          className="group block h-full"
      >
          <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full flex flex-col">

              {/* IMAGE */}
              <div className="relative aspect-[4/3] w-full h-[300px]">
                  <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition group-hover:scale-105"
                  />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-1 p-5 text-center bg-[#CAF0F8]">
                  {/* NAME */}
                  <div className="mt-2 text-lg font-semibold text-gray-800">
                      {product.name}
                  </div>

                  {/* PRICE */}
                  <div className="mt-2 text-sm text-gray-500">
                      {product.description}
                  </div>

                  {/* BUTTON */}
                  <div className="mt-auto pt-4">
                      <div>
                          <button className="font-medium text-[20px] px-[40px] py-[5px] rounded-[10px] bg-[#03045E] text-white h-[50px] cursor-pointer">Xem thêm</button>
                      </div>
                  </div>
              </div>

          </div>
      </Link>
  )
}

export default ProductItem
