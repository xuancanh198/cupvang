'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { products, Product } from '@/constant/Product'
import Link from 'next/link'

export default function SearchProduct() {
    const [keyword, setKeyword] = useState('')
    const [open, setOpen] = useState(false)

    const results: Product[] = useMemo(() => {
        if (!keyword.trim()) return []
        const k = keyword.toLowerCase()
        return products.filter(item =>
            item.name.toLowerCase().includes(k)
        )
    }, [keyword])

    return (
        <div className="relative">
            {/* INPUT – giữ nguyên UI */}
            <div className="bg-white w-[300px] h-[40px] px-[45px] relative rounded-[50px]">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-[20px] top-1/2 -translate-y-1/2" />
                <input
                    value={keyword}
                    onChange={e => {
                        setKeyword(e.target.value)
                        setOpen(true)
                    }}
                    onFocus={() => setOpen(true)}
                    placeholder="Tìm kiếm sản phẩm..."
                    className="w-full h-full outline-none border-none"
                />
            </div>

            {/* GỢI Ý */}
            {open && keyword && (
                <div className="absolute z-50 mt-2 w-[300px] bg-white rounded-xl shadow-lg overflow-hidden">
                    {results.length > 0 ? (
                        results.slice(0, 6).map(item => (
                            <Link
                                key={item.id}
                                href={`/product/${item.slug}`}
                                onMouseDown={() => {
                                    // QUAN TRỌNG: đóng trước khi blur
                                    setOpen(false)
                                }}
                                className="flex gap-3 p-3 hover:bg-gray-100 cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={44}
                                    height={44}
                                    className="rounded-md object-cover"
                                />
                                <div className="flex-1">
                                    <p className="text-sm font-medium line-clamp-2">
                                        {item.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {item.price}
                                    </p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="p-3 text-sm text-gray-500">
                            Không tìm thấy sản phẩm
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}
