"use client";


import Image from "next/image";
import Link from "next/link";
import LanguageDropdown from "@/components/select/LanguageDropdown"

interface LinkItem {
  title: string;
  url: string;
}

export default function Footer() {
  const links: LinkItem[] =  [
      { title: "Về chúng tôi", url: "/about-us" },
      { title: "Sản phẩm", url: "/product" },
    ]


  return (
    <footer className="w-full lg:mt-10">
      <div className="container mx-auto backdrop-blur-[30px] pt-12 pb-4 w-10/12 justify-center flex flex-col lg:w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-10 lg:space-y-6 flex flex-col justify-center items-center lg:items-start">
            <Link
              href="/"
              className="flex items-center w-full justify-center lg:justify-start gap-2 lg:gap-3 group cursor-pointer"
            >
              {/* Logo */}
         
              <span className="text-[19px] lg:text-[26px] font-black tracking-[1px] lg:tracking-[3px] text-[#FFCC00] transition-all duration-300">
                Cúp Vàng
              </span>
            </Link>
            <div className="space-y-4 w-10/12 lg:w-full">
              <p className="md:text-[16px] text-[12px]  text-[#7C7C7C] ">
               CÔNG TY TNHH CÚP VÀNG chuyên cung cấp đa dạng máy móc, thiết bị và vật tư công nghiệp: dụng cụ điện cầm tay, dụng cụ cơ khí, thiết bị điện dân dụng – điện công nghiệp, dây cáp điện, sắt thép… với tiêu chí đúng hàng – đúng chất lượng – đúng nhu cầu.
              MST: 0101787827
              </p>
              <LanguageDropdown/>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex mx-auto flex-col w-10/12 lg:flex-row gap-10 lg:w-full lg:justify-between">
            {/* Links Section */}
            <div className="flex w-full lg:w-11/12">
              <ul className="space-y-2 lg:space-y-4 w-6/12 lg:w-5/12 sm:w-6/12">
                {links?.map((link, linkIndex) => (
                  <li key={linkIndex} className="h-[30px]">
                    <Link
                      href={link?.url || "#"}
                      className="text-[12px] sm:text-[16px] 2xl:text-[20px] text-[#7C7C7C] font-bold transition-all duration-300 hover:text-[#45B54D] hover:translate-x-1 cursor-pointer"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
             
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:flex-col justify-content gap-4 lg:gap-2 lg:pr-10 xl:pr-16 lg:w-3/24">
              <a
                href="https://www.facebook.com/Trustima.Official"
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 rounded-[10px] w-[52px] h-[52px]  flex items-center justify-center hover:shadow-[0_0_12px_#6A7AAC80] hover:border-[#45B54D] hover:scale-110 hover:bg-[#45B54D]/5 group"
              >
                <Image
                  className="text-[#7C7C7C] object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  src={`/images/icon-fb-footer.png`}
                  alt="Facebook"
                  width={200}
                  height={200}
                />
              </a>

              {/* X */}
              <a
                href="https://x.com/Trustima_"
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 rounded-[10px] w-[52px] h-[52px]  flex items-center justify-center hover:shadow-[0_0_12px_#6A7AAC80] hover:border-[#45B54D] hover:scale-110 hover:bg-[#45B54D]/5 group"
              >
                <Image
                  className="text-[#7C7C7C] object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  src={`/images/icon-x-footer.png`}
                  alt="Twitter"
                  width={200}
                  height={200}
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/trustima_/"
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 rounded-[10px] w-[52px] h-[52px]  flex items-center justify-center hover:shadow-[0_0_12px_#6A7AAC80] hover:border-[#45B54D] hover:scale-110 hover:bg-[#45B54D]/5 group"
              >
                <Image
                  className="text-[#7C7C7C] object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  src={`/images/icon-ins-footer.png`}
                  alt="Instagram"
                  width={200}
                  height={200}
                />
              </a>
              <a
                href={"https://www.linkedin.com/company/trustima"}
                rel="nofollow noopener noreferrer"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-all duration-300 rounded-[10px] w-[52px] h-[52px]  flex items-center justify-center hover:shadow-[0_0_12px_#6A7AAC80] hover:border-[#45B54D] hover:scale-110 hover:bg-[#45B54D]/5 group"
              >
                <Image
                  className="text-[#7C7C7C] object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                  src={`/images/icon-linked-footer.png`}
                  alt="LinkedIn"
                  width={200}
                  height={200}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t text-center border-t-[#CFD3E1] transition-all duration-300 hover:border-t-[#45B54D]/30">
          <p className="text-[15px] text-[#777777] font-normal text-muted-foreground transition-colors duration-300 hover:text-[#45B54D] cursor-default">
                Copyright ©  2023 Công ty TNHH Thiết bị điện Gia Sơn <br/>
          Việc sử dụng trang web này cho thấy bạn tuân thủ chính sách quyền riêng tư, điều khoản và điều kiện của chúng tôi
          </p>
        </div>
      </div>
    </footer>
  );
};
