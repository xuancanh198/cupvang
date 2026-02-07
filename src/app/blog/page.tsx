import HeroComponent from "@/components/home/HeroComponent";
import Image from "next/image";
import ListCardPost from "@/components/card/ListCardPost"
import ContactSection from '@/components/aboutUs/ContactSection'
import BlogList from '@/components/aboutUs/BlogList'
import ListBlog from "@/components/blog/ListBlog";
function page() {
  return (
    <main className="w-full">
      <HeroComponent />
      <div className="w-full my-[100px] mx-auto px-[16px]">
        <div className="flex gap-[50px]">
          <div className="">
            <ListBlog/>
          </div>
          <div className="w-full max-w-[40%]">
            <ListCardPost />
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

export default page
