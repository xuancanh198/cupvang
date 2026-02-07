export interface CategoryItem {
    label: string
    value: string
    active?: boolean
}

export interface Product {
    id: number
    name: string
    slug: string
    image: string
    category: ProductCategory
    price: string
    description: string
}

export type ProductCategory =
    typeof PRODUCT_CATEGORY[keyof typeof PRODUCT_CATEGORY]

export const PRODUCT_CATEGORY = {
    POWER_CABLES: 'power-cables',
    OPTICAL_FIBER: 'optical-fiber',
    FIRE_PROTECTION: 'fire-protection',
    MATERIAL: 'material',
    SERVICE: 'service',
} as const

export const categories: CategoryItem[] = [
    { label: 'Dầu, mỡ', value: 'oil', active: true },
    { label: 'Vật tư cáp điện', value: 'electric_cable', active: false },
    { label: 'Vật tư cáp quang', value: 'fiber_cable', active: false },
    { label: 'Máy móc thiết bị', value: 'machine', active: false },
    { label: 'Phụ tùng', value: 'spare_part', active: false },
]


export const products: Product[] = [
    {
        id: 6,
        name: 'Dầu kéo đồng và nhôm',
        slug: 'dau-keo-dong-va-nhom',
        image: '/images/3501332b63fdd6a38fec.jpg',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: 'Liên hệ',
        description: 'Dầu bôi trơn chuyên dụng cho quá trình kéo dây đồng và nhôm, giúp giảm ma sát và tăng tuổi thọ thiết bị.',
    },
    {
        id: 7,
        name: 'Thùng phuy thép 55 Gallon (216.5L)',
        slug: 'thung-phuy-thep-55-gallon',
        image: '/images/z6529246731744_a774ad53d199d69e7217e90e7c2c088f.jpg',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: 'Liên hệ',
        description: 'Thùng phuy thép chất lượng cao, chịu lực tốt, phù hợp chứa hóa chất, dầu và dung môi công nghiệp.',
    },
    {
        id: 8,
        name: 'Hạt nhựa HDPE mạ 8380',
        slug: 'hat-nhua-hdpe-8380',
        image: '/images/cap-mang-boc-nhua-duong-kinh-7.2mm.jpg',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: 'Liên hệ',
        description: 'Hạt nhựa HDPE độ bền cao, an toàn, được sử dụng phổ biến trong sản xuất bao bì và ống nhựa.',
    },
]

