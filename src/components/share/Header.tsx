'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

/* ===== MENU PRODUCT (chỉ 4 item) ===== */
const menuProducts = [
  {
    name: 'Sản phẩm nổi bật',
    description: 'Các sản phẩm được quan tâm nhiều',
    href: '/products',
    icon: ChartPieIcon,
  },
  {
    name: 'Sản phẩm mới',
    description: 'Sản phẩm vừa ra mắt',
    href: '/products',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Giảm giá',
    description: 'Ưu đãi tốt nhất hôm nay',
    href: '/products',
    icon: ArrowPathIcon,
  },
  {
    name: 'Bán chạy',
    description: 'Top sản phẩm bán chạy',
    href: '/products',
    icon: FingerPrintIcon,
  },
]

const callsToAction = [
  { name: 'Xem tất cả', href: '/products', icon: SquaresPlusIcon },
  { name: 'Liên hệ', href: '/about-us', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <nav className="fixed z-50 top-0 left-0 right-0 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-[#FFCC00] rounded-[15px]">
       <div className="flex gap-[30px]">
         {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8">
            <Image
              src="/images/logo.jpg"
              alt="Logo"
              fill
              className="object-cover rounded"
            />
          </div>
        </Link>

        {/* Mobile button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden rounded-md p-2 text-gray-700"
        >
          <Bars3Icon className="size-6" />
        </button>

        {/* Desktop menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-[25px] gap-3xl-[35px]">
          <Link href="/" className="text-[20px] text-3xl-[26px] font-semibold text-[#0077B6]">
            Trang chủ
          </Link> 
            <Link href="/about-us" className="text-[20px] text-3xl-[26px] font-semibold text-[#0077B6]">
            Về Chúng Tôi
          </Link>
          {/* Product dropdown */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
              <Link href="/product" className="text-[20px] text-3xl-[26px] font-semibold text-[#0077B6]">
                Sản phẩm
              </Link>
              <ChevronDownIcon className="size-5 text-gray-400" />
            </PopoverButton>

            <PopoverPanel className="absolute left-1/2 z-10 mt-4 w-screen max-w-md -translate-x-1/2 rounded-2xl bg-white shadow-lg">
              <div className="p-4">
                {menuProducts.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex gap-x-4 rounded-lg p-3 hover:bg-gray-50"
                  >
                    <item.icon className="size-6 text-gray-500 group-hover:text-indigo-600" />
                    <div>
                      <p className="font-semibold text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="grid grid-cols-2 divide-x bg-gray-50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2 p-3 text-sm font-semibold hover:bg-gray-100"
                  >
                    <item.icon className="size-5 text-gray-400" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

            <Link href="/contact" className="text-[20px] text-3xl-[26px] font-semibold text-[#0077B6]">
            Liên hệ
          </Link>
          <Link href="/blog" className="text-[20px] text-3xl-[26px] font-semibold text-[#0077B6]">
            Tin Tức
          </Link>
        </PopoverGroup>
        </div>

        {/* Login */}
        <div className="hidden lg:flex">
          <div className='bg-white w-[300px] h-[40px] px-[45px] relative rounded-[50px]'>
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-[20px] top-1/2 -translate-y-1/2" />
            <input placeholder='Search here...' className='w-full h-full outline-0 border-none' />
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/images/logo.jpg" alt="Logo" width={32} height={32} />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)}>
              <XMarkIcon className="size-6" />
            </button>
          </div>

          <div className="mt-6">
            <Disclosure>
              <DisclosureButton className="flex w-full justify-between py-2 font-semibold">
                Sản phẩm
                <ChevronDownIcon className="size-5" />
              </DisclosureButton>
              <DisclosurePanel className="space-y-2 pl-4">
                {menuProducts.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-1 text-sm text-gray-700"
                  >
                    {item.name}
                  </Link>
                ))}
              </DisclosurePanel>
            </Disclosure>

            <Link href="/about-us" className="block py-2 font-semibold">
              Liên hệ
            </Link>

            <div className='search'>

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
