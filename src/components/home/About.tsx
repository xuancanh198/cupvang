"use client"

import { useState } from "react"
import Image from "next/image"

import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

export default function WhyChooseUs() {
    const [expanded, setExpanded] = useState<string | false>(false)

    const handleChange =
        (panel: string) =>
            (_: React.SyntheticEvent, isExpanded: boolean) => {
                setExpanded(isExpanded ? panel : false)
            }

    return (
        <section className="bg-white">
            <div className="w-full max-w-[1500px] mx-auto px-[16px] pb-[50px]">
                {/* HEADER */}
                <div className="mb-14">
                    <h2 className="text-[48px] text-center font-extrabold italic text-[#0077B6] mb-6">
                        Vì sao chọn chúng tôi
                    </h2>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* LEFT IMAGE */}
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

                    {/* RIGHT ACCORDION */}
                    <div className="space-y-4">

                        <Accordion
                            expanded={expanded === "panel1"}
                            onChange={handleChange("panel1")}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={700}>
                                    Gần 20 năm kinh nghiệm trong ngành
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Hoạt động từ năm 2005, chúng tôi am hiểu sâu thị trường
                                    viễn thông và công nghiệp trong nước & quốc tế.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === "panel2"}
                            onChange={handleChange("panel2")}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={700}>
                                    Đối tác phân phối chính hãng, uy tín
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Là đại diện và đối tác của nhiều thương hiệu nước ngoài lớn,
                                    đảm bảo sản phẩm chính hãng, tiêu chuẩn cao.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === "panel3"}
                            onChange={handleChange("panel3")}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={700}>
                                    Nhà cung cấp tin cậy cho nhiều doanh nghiệp lớn
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Đồng hành lâu năm cùng các nhà sản xuất uy tín như CADISUN,
                                    LIOA, LS-VINA…, được khách hàng tin tưởng lựa chọn.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === "panel4"}
                            onChange={handleChange("panel4")}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={700}>
                                    Danh mục sản phẩm và dịch vụ đa dạng
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Cung ứng vật tư cáp, máy móc, thiết bị, nguyên liệu công nghiệp
                                    cùng dịch vụ vận tải, hải quan trọn gói.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === "panel5"}
                            onChange={handleChange("panel5")}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={700}>
                                    Cam kết chất lượng – Uy tín hàng đầu
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Mọi sản phẩm đều được kiểm soát chặt chẽ, đáp ứng tốt yêu cầu
                                    kỹ thuật và nhu cầu sản xuất thực tế.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion
                            expanded={expanded === "panel6"}
                            onChange={handleChange("panel6")}
                        >
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography fontWeight={700}>
                                    Năng lực tài chính ổn định, giao hàng đúng tiến độ
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Đảm bảo khả năng cung ứng lâu dài, số lượng lớn và đúng cam kết
                                    với khách hàng.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </div>
                </div>
            </div>
        </section>
    )
}