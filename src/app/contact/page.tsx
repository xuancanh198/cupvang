import ContactSection from '@/components/aboutUs/ContactSection'
import BlogList from '@/components/aboutUs/BlogList'

export default function ContactPage() {
    return (
        <main className="w-full bg-white mt-[100px] ">
            <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
                <ContactSection />
                <BlogList />
            </div>
        </main>
    )
}
