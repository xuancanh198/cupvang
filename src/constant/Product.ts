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
    description: string,
    features? : string[]
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
        id: 1,
        name: 'Dầu kéo sợi KJ30',
        slug: 'dau-keo-soi-kj30',
        image: '/images/image-product-1.jpg',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Dầu kéo sợi chuyên dụng cho dây đồng và nhôm.',
        features: [
            'Giảm ma sát khi kéo sợi',
            'Tăng tuổi thọ khuôn kéo',
            'Ổn định độ nhớt khi vận hành liên tục',
            'Hạn chế oxy hóa trong môi trường nhiệt cao',
        ],
    },
    {
        id: 2,
        name: 'Dầu kéo đồng CV125',
        slug: 'dau-keo-dong-cv125',
        image: '/images/image-product-2.jfif',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Dầu bôi trơn chuyên dùng cho kéo dây đồng.',
        features: [
            'Bôi trơn hiệu quả cao',
            'Không tạo cặn',
            'Dễ vệ sinh sau sản xuất',
            'Tương thích nhiều loại máy kéo',
        ],
    },
    {
        id: 3,
        name: 'Dầu thủy lực HM32',
        slug: 'dau-thuy-luc-hm32',
        image: 'images/image-product-3.jfif',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Dầu thủy lực ổn định nhiệt và chống mài mòn.',
        features: [
            'Chống mài mòn cao',
            'Ổn định nhiệt tốt',
            'Chống tạo bọt',
            'Bảo vệ hệ thống bơm thủy lực',
        ],
    },
    {
        id: 4,
        name: 'Dầu thủy lực chống mài mòn AP AW32',
        slug: 'dau-thuy-luc-ap-aw32',
        image: 'images/image-product-4.jfif',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Dầu thủy lực cao cấp cho máy công nghiệp.',
        features: [
            'Khả năng chống mài mòn vượt trội',
            'Giảm tiếng ồn hệ thống',
            'Ổn định khi tải nặng',
            'Tăng hiệu suất vận hành',
        ],
    },
    {
        id: 5,
        name: 'Dầu bánh răng cực áp EP320',
        slug: 'dau-banh-rang-ep320',
        image: '/images/image-product-5.jfif',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Dầu bánh răng chịu tải nặng.',
        features: [
            'Chịu áp suất cao',
            'Bảo vệ bề mặt bánh răng',
            'Giảm rung động',
            'Kéo dài chu kỳ bảo trì',
        ],
    },
    {
        id: 6,
        name: 'Dầu máy W50',
        slug: 'dau-may-w50',
        image: '/images/image-product-6.jfif',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Dầu máy công nghiệp đa dụng.',
        features: [
            'Ổn định độ nhớt',
            'Giảm tiêu hao nhiên liệu',
            'Bảo vệ động cơ lâu dài',
            'Hoạt động tốt trong môi trường bụi',
        ],
    },
    {
        id: 7,
        name: 'Dầu cầu hộp số GL-5 80W-90',
        slug: 'dau-cau-hop-so-gl5-80w90',
        image: '/images/image-product-7.jfif',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Dầu hộp số chuyên dụng cho tải nặng.',
        features: [
            'Chịu tải cực áp',
            'Giảm mài mòn bánh răng',
            'Ổn định khi nhiệt độ cao',
            'Tăng tuổi thọ hệ truyền động',
        ],
    },
    {
        id: 8,
        name: 'Dầu xung điện EDM100',
        slug: 'dau-xung-dien-edm100',
        image: '/images/image-product-8.jfif',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Dầu dùng cho gia công tia lửa điện.',
        features: [
            'Độ tinh khiết cao',
            'Tản nhiệt tốt',
            'Giảm cháy bề mặt kim loại',
            'Đảm bảo độ chính xác gia công',
        ],
    },
    {
        id: 9,
        name: 'Dầu tách khuôn SI 100',
        slug: 'dau-tach-khuon-si-100',
        image: '/images/image-product-9.jfif',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Dầu tách khuôn dùng trong sản xuất nhựa.',
        features: [
            'Chống dính hiệu quả',
            'Giảm lỗi sản phẩm',
            'Tiết kiệm chi phí bảo trì',
            'Dễ sử dụng và an toàn',
        ],
    },
    {
        id: 10,
        name: 'Mỡ chịu nhiệt đặc biệt HP280',
        slug: 'mo-chiu-nhiet-hp280',
        image: '/images/image-product-10.jfif',
        category: PRODUCT_CATEGORY.MATERIAL,
        price: '',
        description: 'Mỡ bôi trơn chịu nhiệt cao.',
        features: [
            'Chịu nhiệt độ cao',
            'Chống oxy hóa mạnh',
            'Bám dính tốt',
            'Phù hợp môi trường khắc nghiệt',
        ],
    },
]

