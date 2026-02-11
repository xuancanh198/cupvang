import HeroComponent from "@/components/home/HeroComponent"
import ListProduct from "@/components/product/ListProduct"
import About from "@/components/home/About"
import Forword from "@/components/home/Forword"
import AwardsSection from "@/components/home/AwardsSection"
import ContactSection from "@/components/aboutUs/ContactSection"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trang chủ | Cup Vàng',
  description: 'Website uy tín',
}

export default function Home() {
  return (
    <main className="w-full ">
      <HeroComponent />
      <div className="w-full mb-[50px]">
        <Forword />
        <ListProduct />
        <About />    
        <AwardsSection />
        <div className="mt-[50px] w-full max-w-[1500px] mx-auto px-[16px]  pb-[50px]">
          <ContactSection />
        </div>  
     </div>
    </main>
  );
}
