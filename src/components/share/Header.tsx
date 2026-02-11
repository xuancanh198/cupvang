import Image from 'next/image'
import Link from 'next/link'
import {
  PopoverGroup,
} from '@headlessui/react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MAIN_MENU } from '@/constant/PageLink.constant'
import type { MenuItem } from '@/constant/PageLink.constant'
import SearchProduct from '@/components/share/SearchHeader';
export default function Header() {

  return (
    <header className="">
      <nav className="fixed z-50 top-0 left-0 right-0 hidden md:flex max-w-7xl items-center justify-between mx-[16px] p-6 lg:px-8 bg-[#FFCC00] rounded-[15px]">
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

          <PopoverGroup className="hidden lg:flex lg:gap-x-[25px] gap-3xl-[35px]">
            {MAIN_MENU.map((item: MenuItem) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[20px] text-3xl-[26px] font-semibold text-[#0077B6]"
              >
                {item.label}
              </Link>
            ))}
          </PopoverGroup>
        </div>

        <div className="hidden lg:flex">
            <SearchProduct />
        </div>
      </nav>
    </header>
  )
}
