import HeroComponent from "@/components/home/HeroComponent"
import ListProduct from "@/components/product/ListProduct"
import About from "@/components/home/About"
import Forword from "@/components/home/Forword"
import AwardsSection from "@/components/home/AwardsSection"
import BlogList from "@/components/blog/ListBlog"
import ContactSection from "@/components/aboutUs/ContactSection"
export default function Home() {
  return (
    <main className="w-full ">
      <HeroComponent />
      <div className="w-full mb-[50px]">
        <Forword />
        <ListProduct />
        <About />    
        <AwardsSection />
        <div className="mt-[50px]">
          <ContactSection />
        </div>  
     </div>
    </main>
  );
}
