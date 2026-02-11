export const dynamic = 'force-dynamic'
import ContactSection from "@/components/aboutUs/ContactSection"

import DetailPage from '@/components/product/DetailPage'
import { products } from '@/constant/Product'

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params   // 👈 BẮT BUỘC

  const product = products.find(p => p.slug === slug)

  if (!product) {
    return <div className="p-10">Không tìm thấy sản phẩm</div>
  }

  return (
    <main className="mt-[50px] w-full max-w-[1500px] mx-auto px-[16px]  pb-[50px]">
      <DetailPage product={product} />
      <ContactSection />
    </main>
  )
}
