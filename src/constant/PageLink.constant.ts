export interface MenuItem {
  label: string
  href: string
}

export const MAIN_MENU: MenuItem[] = [
  {
    label: 'Trang chủ',
    href: '/',
  },
  {
    label: 'Về Chúng Tôi',
    href: '/about-us',
  },
  {
    label: 'Sản phẩm',
    href: '/product',
  },
  {
    label: 'Liên hệ',
    href: '/contact',
  },
  {
    label: 'Tin Tức',
    href: '/blog',
  },
]