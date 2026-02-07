import HeroComponent from "@/components/home/HeroComponent"
import Image from "next/image"
import ContactSection from '@/components/aboutUs/ContactSection'
import BlogList from '@/components/aboutUs/BlogList'
import ListCardPost from "@/components/card/ListCardPost"
function page() {
    return (
        <main className="w-full">
            <HeroComponent />
            <div className="w-full my-[100px] mx-auto px-[16px]">
                <div className="flex gap-[50px]">
                    <div className="">
                        <div>
                            <span className="font-bold">Câu chuyện của chúng tôi</span>
                            <p>CÔNG TY TNHH CÚP VÀNG (GoLDcup) là doanh nghiệp Việt Nam thành lập và hoạt động từ 07/10/2005, chuyên bán buôn máy móc, thiết bị và phụ tùng, đồng thời cung cấp đa dạng dụng cụ điện cầm tay, dụng cụ cơ khí, thiết bị điện dân dụng – điện công nghiệp, dây cáp điện, sắt thép và các nhóm máy móc – thiết bị – phụ tùng phục vụ công nghiệp, nông nghiệp, thủy lợi, thiết bị văn phòng, cũng như vật tư/thiết bị cho ngành bưu chính viễn thông, điện lực.</p>
                            <Image src="/images/about-us-1.png" alt="company image" width={800} height={400} className="w-full my-[20px] rounded-[20px]" />
                            <p>Chúng tôi bắt đầu từ mong muốn trở thành một đơn vị cung ứng đáng tin cậy, giúp khách hàng dễ dàng chọn đúng sản phẩm phù hợp, giảm bớt thời gian tìm kiếm và hạn chế rủi ro khi mua hàng trên thị trường nhiều lựa chọn. CÚP VÀNG tin rằng, với ngành hàng thiết bị – vật tư, giá trị cốt lõi không chỉ nằm ở “bán được hàng”, mà còn là bán đúng thứ khách hàng cần, đảm bảo thông số rõ ràng – nguồn gốc minh bạch – tiến độ đáp ứng.
                                Chúng tôi yêu thích công việc mình đang làm và luôn đặt mục tiêu phục vụ khách hàng bằng sự tận tâm, minh bạch và trách nhiệm, hướng đến mối quan hệ hợp tác lâu dài và bền vững.</p>
                        </div>
                        <div className="mt-[50px]">
                            <span className="font-bold">Sứ mệnh kinh doanh</span>
                            <p>Sứ mệnh của CÚP VÀNG là giúp khách hàng dễ dàng tiếp cận hơn với các sản phẩm máy móc – thiết bị – vật tư phù hợp cho từng nhu cầu sử dụng, từ dân dụng đến công nghiệp và dự án.</p>
                            <p>Không chỉ cung cấp sản phẩm, chúng tôi còn hỗ trợ khách hàng bằng cách:</p>
                            <ul className="ms-[30px] list-disc  space-y-1 ">
                                <li>Tư vấn rõ ràng về chủng loại, thông số kỹ thuật, công năng để khách hàng chọn đúng.</li>
                                <li>Ưu tiên nguồn hàng minh bạch, đảm bảo thông tin sản phẩm trung thực, dễ kiểm chứng.</li>
                                <li>Xây dựng mối quan hệ tích cực – lâu dài – tin tưởng với khách hàng, nhân viên, nhà cung cấp và đối tác.</li>
                                <li>Không ngừng cải tiến quy trình để nâng cao trải nghiệm mua hàng, tối ưu thời gian và chi phí cho khách hàng.</li>
                            </ul>
                            <p>Sứ mệnh: Cùng đồng hành – Cùng phát triển <br />
                                Phương châm hoạt động: Chuyên nghiệp – Tận tâm – Tin cậy – Hiệu quả</p>
                            <Image src="/images/about-us-2.png" alt="company image" width={800} height={400} className="w-full my-[20px] rounded-[20px]" />

                        </div>
                        <div className="mt-[50px]">
                            <span className="font-bold">Lan tỏa điều tốt và nhiều hơn nữa</span>
                            <p>Là khách hàng của CÚP VÀNG, bạn không cần mất nhiều thời gian để so sánh quá nhiều lựa chọn hoặc lo lắng “mua nhầm – dùng không đúng”. Chúng tôi sẽ hỗ trợ bạn chọn đúng sản phẩm theo nhu cầu thực tế, đồng thời chú trọng quy trình xử lý đơn hàng để đảm bảo nhanh chóng – cẩn thận – đúng hẹn.</p>
                            <p>Chúng tôi hiểu rằng trong sản xuất và thi công, tiến độ là yếu tố quan trọng. Vì vậy, CÚP VÀNG luôn cố gắng tối ưu việc chuẩn bị hàng, đóng gói và phối hợp giao nhận để sản phẩm đến tay khách hàng trong trạng thái tốt nhất.</p>

                            <Image src="/images/about-us-3.png" alt="company image" width={800} height={400} className="w-full my-[20px] rounded-[20px]" />
                        </div>
                        <div className="mt-[50px]">
                            <span className="font-bold">Dịch vụ CSKH tuyệt vời</span>
                            <p>Nhiệm vụ của chúng tôi là cung cấp dịch vụ tốt nhất cho khách hàng, giúp bạn có trải nghiệm mua sắm thuận tiện và an tâm. Chúng tôi thích tương tác với khách hàng và luôn hoan nghênh phản hồi. Đó là cách để CÚP VÀNG hiểu bạn hơn, làm tốt dịch vụ hơn và hoàn thiện mỗi ngày.</p>
                        </div>
                        <div className="mt-[50px]">
                            <span className="font-bold">Giá trị cốt lõi</span>
                            <div>
                                <p>1. Trung thực trong mọi hành động và lời nói </p> <br />
                                <p>Mọi thông tin CÚP VÀNG truyền đạt về sản phẩm đều được đảm bảo trung thực, rõ ràng và chính xác, giúp khách hàng có cái nhìn khách quan nhất để lựa chọn đúng.</p>
                            </div>
                            <div className="mt-[10px]">
                                <p>2. Kinh doanh chân chính – Hàng hóa rõ nguồn gốc </p> <br />
                                <p>Chúng tôi luôn đề cao việc kinh doanh bằng giá trị thật, cung cấp sản phẩm chất lượng, nguồn gốc minh bạch, phục vụ đúng nhu cầu sử dụng với mức giá phù hợp và cạnh tranh.</p>
                            </div>
                            <div className="mt-[10px]">
                                <p>3. Tận tâm phục vụ khách hàng như người thân</p> <br />
                                <p>CÚP VÀNG coi khách hàng như người thân trong gia đình để tận tâm lắng nghe – tư vấn phù hợp – hỗ trợ đến nơi đến chốn, nhằm mang lại lựa chọn tốt nhất cho từng công việc và dự án.</p>
                            </div>
                            <div className="mt-[10px]">
                                <p>4. Quyết liệt và tốc độ trong công việc</p> <br />
                                <p>Để khách hàng có trải nghiệm tốt nhất, chúng tôi luôn cố gắng xử lý đơn hàng nhanh chóng và cẩn thận, đồng thời sẵn sàng giải đáp, hỗ trợ và xử lý các phát sinh một cách trách nhiệm.</p>
                            </div>
                            <div className="mt-[10px]">
                                <p>5. Không sợ sai, dám thay đổi</p> <br />
                                <p>Khi có sai sót hoặc sự cố ngoài ý muốn, CÚP VÀNG sẵn sàng nhận lỗi – sửa sai – cải tiến, để ngày càng nâng cao chất lượng sản phẩm và dịch vụ.</p>
                            </div>
                        </div>
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
