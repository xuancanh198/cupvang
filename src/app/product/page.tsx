'use client'
import HeroComponent from "@/components/home/HeroComponent";
import ContactSection from '@/components/aboutUs/ContactSection'
import BlogList from '@/components/aboutUs/BlogList'
import { products, categories } from '@/constant/Product'
import ProductItem from '@/components/product/ProductItem'


export default function ProductsPage() {


    return (
        <main className="w-full z">
            <HeroComponent />
            <div className="w-full my-[100px] mx-auto px-[16px]">
                <div className="flex gap-[50px] w-full">
                    <div className="w-full">
                        <div className="flex justify-center w-full">
                            {categories?.map((category) => {
                                return (
                                    <button
                                        key={category.value}
                                        className={`mr-4 mb-4 px-[20px] py-[8px] rounded-full border cursor-pointer ${category.active
                                                ? 'bg-indigo-600 text-white border-indigo-600'
                                                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                                            }`}
                                    >
                                        {category.label}
                                    </button>

                                )
                            })}
                        </div>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {products.map(product => (
                                <ProductItem product={product} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-[100px]">

                    <BlogList />
                    <div className="mt-[50px]">
                        <ContactSection />
                    </div>
                </div>
            </div>
        </main>
    )
}
