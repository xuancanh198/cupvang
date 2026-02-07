import Image from "next/image"
export default function Forword() {
    return (
        <section className="bg-[#CAF0F8] dark:bg-gray-800 relative z-20 overflow-hidden">
            <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center">

                {/* IMAGE */}
                <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
                    <Image
                        src="/images/banner1.png"
                        alt="Introducing Our Work"
                        className="max-w-md w-full"
                        width={808}
                        height={553}
                    />
                </div>
                {/* TEXT */}
                <div className="w-full lg:w-1/2 flex flex-col space-y-6">
                    <h2 className=" font-medium text-ita text-[32px] 2xl:text-[70px] sm:text-4xl">
                        <span className="text-[#03045E]">Giới thiệu về công ty</span><br />
                        <span className="italic text-[#0077B6] ms-[100px]">Cúp Vàng</span>
                    </h2>


                   <div>
                        <p className="text-[#03045E] text-[18px]">
                        Cùng đồng hành – CùnCông ty TNHH Cúp Vàng được thành lập ngày 07/09/2005 theo đăng ký kinh doanh thay đổi lần thứ ba số 0101787827 ngày 14/06/2011 < br/> 
                       </p>
                        <p className="text-[#03045E] text-[18px] mt-4">
                        Công ty Cúp Vàng chuyên sản xuất và cung cấp các loại cúp, huy chương, kỷ niệm chương, biểu trưng, quà tặng doanh nghiệp và các sản phẩm liên quan khác. Với hơn 15 năm kinh nghiệm trong ngành, chúng tôi tự hào mang đến cho khách hàng những sản phẩm chất lượng cao, thiết kế độc đáo và dịch vụ tận tâm.
                        </p>
                   </div>
                    <div>
                        <button className="font-medium text-[20px] px-[40px] py-[10px] rounded-[10px] bg-[#03045E] text-[#ADE8F4]">Xem thêm</button>
                    </div>
                </div>
               
            </div>
        </section>
    )
}
