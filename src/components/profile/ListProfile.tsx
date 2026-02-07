import ProfileItem from "@/components/profile/ProfileItem"

export default function ProfilesSection() {
    return (
        <section className="bg-blue-300  py-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    <ProfileItem />
                    <ProfileItem />
                    <ProfileItem />
                </div>
            </div>
        </section>
    )
}
