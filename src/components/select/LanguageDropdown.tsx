"use client";

import Image from "next/image";
import { useState } from "react";
import {LANGUAGES} from "@/constant/Languages"

export default function LanguageDropdown() {
  const [lang, setLang] = useState("vi");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLang(value);

    // TODO:
    // - gọi i18n.changeLanguage(value)
    // - hoặc set context
    // - hoặc lưu localStorage
    console.log("Language:", value);
  };

  return (
    <div className="w-full lg:w-64 border border-[#CFD3E1] rounded-md px-3 py-2">
      <select
        value={lang}
        onChange={handleChange}
        className="w-full bg-transparent outline-none"
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
           <Image src={l.flag} alt={l.name} width={20} height={15} className="inline mr-2"/>
            {l.name}
          </option>
        ))}
      </select>
    </div>
  );
}
