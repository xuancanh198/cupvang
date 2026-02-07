import React from 'react'

export default function ContactSection() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <div className="text-sm text-gray-700 space-y-2">
                    <h3 className="text-lg font-semibold text-[#03045E]">Cúp Vàng</h3>
                    <p>
                        D93, ngõ 293 đường Tôn Trình, Phường Hoàng Văn Thụ,
                        Quận Hoàng Mai, Hà Nội
                    </p>
                    <p><b>Hotline:</b> 84-913368822</p>
                    <p><b>Email:</b> tien.materials@gmail.com</p>
                    <p><b>Địa chỉ thuế:</b>  D93, ngõ 293 đường Tam Trinh, Phường Tương Mai, TP Hà Nội, Việt Nam</p>
                </div>

                <h4 className="text-[26px] font-semibold text-[#03045E]">BẢN ĐỒ</h4>
                <div className="h-[260px] rounded-md overflow-hidden border">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps?q=Hoàng+Mai+Hà+Nội&z=14&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* RIGHT - FORM */}
            <div className="bg-white rounded-xl shadow p-6 space-y-4 border border-gray-400">
                <h3 className="text-lg font-semibold text-center text-blue-900">
                    ĐỂ LẠI THÔNG TIN LIÊN HỆ
                </h3>
                <p className='text-center text-[#000000] leading-normal '>Để lại thông tin liên hệ đăng tin bài viết hoặc quảng cáo,
                    chúng tôi sẽ liên hệ lại sau 5 phút</p>
                <input className="
                   input
                    w-full h-[56px] px-[20px]
                    border border-[#252525]
                    outline-none
                    focus:outline-none
                    focus:border-[#252525]
                    rounded-[8px]
                    " placeholder="Số điện thoại" />
                <input className="
                  input
                    w-full h-[56px] px-[20px]
                    border border-[#252525]
                    outline-none
                    focus:outline-none
                    focus:border-[#252525]
                    rounded-[8px]" placeholder="Email" />
                <textarea
                    className="input 
                    min-h-[120px] 
                    w-full 
                    h-[56px] 
                    px-[20px]
                    border border-[#252525]
                    outline-none
                    focus:outline-none
                    focus:border-[#252525]
                    py-[10px]
                    rounded-[8px]"
                    placeholder="Nội dung tin nhắn"
                />

                <button className="w-full cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-white py-2 rounded-md">
                    Gửi thông tin
                </button>
            </div>
        </section>
    )
}
