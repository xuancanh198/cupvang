export const dynamic = 'force-dynamic'

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

  return <DetailPage product={product} />
}
