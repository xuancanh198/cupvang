import Image from 'next/image'
import Link from 'next/link'

import type { Product } from '@/constant/Product'

function ProductItem({ product }: { product: Product }) {
    return (
        <Link href={`/product/${product.slug}`} className="group block h-full">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full min-h-[550px] flex flex-col">
                {/* IMAGE */}
                <div className="relative w-full h-[300px] overflow-hidden flex-shrink-0">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col flex-1 p-5 text-center bg-[#CAF0F8]">
                    <div title={product.name} className="mt-2 text-lg font-semibold text-gray-800 line-clamp-1">
                        {product.name}
                    </div>

                    <div title={product.description} className="mt-2 text-sm text-gray-500 line-clamp-3">
                        {product.description}
                    </div>

                    <div className="mt-auto pt-4">
                        <button className="font-medium text-[20px] px-[40px] py-[5px] rounded-[10px] bg-[#03045E] text-white h-[50px]">
                            Xem thêm
                        </button>
                    </div>
                </div>

            </div>
        </Link>
    )
}


export default ProductItem
