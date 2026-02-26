import Image from "next/image"
export default function Forword() {
    return (
        <section className="bg-[#CAF0F8] dark:bg-gray-800 relative z-20 overflow-hidden">
            <div className="w-full max-w-[1500px] mx-auto px-[16px]  py-5 md:py-20 flex flex-col gap-[40px] lg:flex-row items-center">

                {/* IMAGE */}
                <div className="w-full lg:w-1/2 md:mt-12  lg:mt-0 flex justify-center">
                    <Image
                        src="/images/banner1.png"
                        alt="Introducing Our Work"
                        className="w-full h-auto rounded-[20px]"
                        width={808}
                        height={553}
                    />
                </div>
                {/* TEXT */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                    <h2 className="text-center md:text-start font-medium text-ita  text-[24px] md:text-[32px] 2xl:text-[70px] sm:text-4xl">
                        <span className="text-[#03045E]">Giới thiệu về công ty</span><br />
                        <span className="italic text-[#0077B6] md:ms-[100px]">Cúp Vàng</span>
                    </h2>


                   <div>
                        <p className="text-[#03045E] text-[14px] md:text-[18px]">
                        Cùng đồng hành – CùnCông ty TNHH Cúp Vàng được thành lập ngày 07/09/2005 theo đăng ký kinh doanh thay đổi lần thứ ba số 0101787827 ngày 14/06/2011 < br/> 
                       </p>
                        <p className="text-[#03045E]  text-[14px] md:text-[18px] mt-4">
                        Công ty Cúp Vàng chuyên sản xuất và cung cấp các loại cúp, huy chương, kỷ niệm chương, biểu trưng, quà tặng doanh nghiệp và các sản phẩm liên quan khác. Với hơn 15 năm kinh nghiệm trong ngành, chúng tôi tự hào mang đến cho khách hàng những sản phẩm chất lượng cao, thiết kế độc đáo và dịch vụ tận tâm.
                        </p>
                   </div>
                    <div>
                        <button className="font-medium text-[14px] md:text-[20px] px-[24px] md:px-[40px] py-[8px] md:py-[10px] rounded-[10px] bg-[#03045E] text-[#ADE8F4]">Xem thêm</button>
                    </div>
                </div>
               
            </div>
        </section>
    )
}
