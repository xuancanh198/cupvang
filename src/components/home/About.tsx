import Image from 'next/image';
export default function WhyChooseUs() {
    return (
        <section className="bg-white">
            <div className="w-full max-w-[1500px] mx-auto px-[16px] mx-auto pb-[50px]">
                {/* HEADER */}
                <div className="mb-14">
                    <h2 className="text-[48px] text-center font-extrabold italic text-[#0077B6] mb-6">
                        Vì sao chọn chúng Tôi
                    </h2>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <div>
                        <div className="relative w-full h-[300px]">
                            <Image
                                src="/images/about1.jpg"
                                alt="Hợp tác kinh doanh"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>

                        <div className="relative w-full h-[300px] mt-10">
                            <Image
                                src="/images/about2.jpg"
                                alt="Hợp tác kinh doanh"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                    </div>


                    {/* RIGHT */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-[#000000] font-bold text-[22px]">Gần 20 năm kinh nghiệm trong ngành</span>

                            <p className="text-[18px] text-gray-700 mt-[10px]">
                                Hoạt động từ năm 2005, chúng tôi am hiểu sâu thị trường viễn thông và công nghiệp trong nước & quốc tế.
                            </p>
                        </div>
                        <div className="mt-[20px]">
                            <span className="text-[#000000] font-bold text-[22px]">Đối tác phân phối chính hãng, uy tín</span>

                            <p className="text-[18px] text-gray-700 mt-[10px]">
                                Là đại diện và đối tác của nhiều thương hiệu nước ngoài lớn, đảm bảo sản phẩm chính hãng, tiêu chuẩn cao.
                            </p>
                        </div>
                        <div className="mt-[20px]">
                            <span className="text-[#000000] font-bold text-[22px]">Đối tác phân phối chính hãng, uy tín</span>

                            <p className="text-[18px] text-gray-700 mt-[10px]">
                                Là đại diện và đối tác của nhiều thương hiệu nước ngoài lớn, đảm bảo sản phẩm chính hãng, tiêu chuẩn cao.
                            </p>
                        </div>
                        <div className="mt-[20px]">
                            <span className="text-[#000000] font-bold text-[22px]">Nhà cung cấp tin cậy cho nhiều doanh nghiệp lớn</span>

                            <p className="text-[18px] text-gray-700 mt-[10px]">
                                Đồng hành lâu năm cùng các nhà sản xuất uy tín như CADISUN, LIOA, LS-VINA…, được khách hàng tin tưởng lựa chọn.
                            </p>
                        </div>
                        <div className="mt-[20px]">
                            <span className="text-[#000000] font-bold text-[22px]">Đối tác phân phối chính hãng, uy tín</span>

                            <p className="text-[18px] text-gray-700 mt-[10px]">
                                Là đại diện và đối tác của nhiều thương hiệu nước ngoài lớn, đảm bảo sản phẩm chính hãng, tiêu chuẩn cao.
                            </p>
                        </div>
                        <div className="mt-[20px]">
                            <span className="text-[#000000] font-bold text-[22px]">Danh mục sản phẩm và dịch vụ đa dạng</span>

                            <p className="text-[18px] text-gray-700 mt-[10px]">
                                Cung ứng vật tư cáp, máy móc, thiết bị, nguyên liệu công nghiệp cùng dịch vụ vận tải, hải quan trọn gói.
                            </p>
                        </div>
                        <div className="mt-[20px]">
                            <span className="text-[#000000] font-bold text-[22px]">Cam kết chất lượng – Uy tín hàng đầu</span>

                            <p className="text-[18px] text-gray-700 mt-[10px]">
                                Mọi sản phẩm đều được kiểm soát chặt chẽ, đáp ứng tốt yêu cầu kỹ thuật và nhu cầu sản xuất thực tế.
                            </p>
                        </div>
                        <div className="mt-[20px]">
                            <span className="text-[#000000] font-bold text-[22px]">Năng lực tài chính ổn định, giao hàng đúng tiến độín</span>

                            <p className="text-[18px] text-gray-700 mt-[10px]">
                                Đảm bảo khả năng cung ứng lâu dài, số lượng lớn và đúng cam kết với khách hàng.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
