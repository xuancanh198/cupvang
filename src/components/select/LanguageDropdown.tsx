"use client";

import Image from "next/image";
import { useState } from "react";
import {LANGUAGES} from "@/constant/Languages"

export default function LanguageDropdown() {
  const [lang, setLang] = useState("vi");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLang(value);
  };

  return (
    <div className="relative w-full lg:w-64">
      <button className="w-full border-[#CFD3E1] border-[0.5px] backdrop-blur-[10px] shadow-[0_0_3px_#6A7AAC4D] focus:outline-none focus:ring-0 focus:ring-transparent transition-all duration-300 hover:shadow-[0_0_8px_#6A7AAC80] hover:border-[#45B54D] cursor-pointer flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm bg-white">
        <div className="flex items-center gap-2">
          <img alt="" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="rounded-sm" style={{color:"transparent"}} src={LANGUAGES.find(l => l.code === lang)?.flag || "https://flagcdn.com/w40/gb.png"} />
          <span className="text-[16px] font-normal">{LANGUAGES.find(l => l.code === lang)?.name || "English"}</span>
        </div>
        <svg className="size-4 opacity-50 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9l6 6 6-6"></path>
        </svg>
      </button>
      <div className="absolute bottom-full left-0 right-0 mb-1 bg-white border border-[#CFD3E1] rounded-md shadow-md z-50 translate-y-[-calc(100%+0.5rem)] hidden">
        <ul className="p-1">
          {LANGUAGES.map((language) => (
            <li onChange={()=>handleChange({target: {value: language.code}} as any)} key={language.code}>
              <div className={`flex items-center transition-colors duration-200 hover:bg-[#45B54D]/10 hover:text-[#45B54D] cursor-pointer gap-2 py-1.5 px-2 rounded-sm ${lang === language.code ? 'bg-[#45B54D]/10 text-[#45B54D]' : ''}`}>
                <img alt="" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" className="rounded-sm" style={{color:"transparent"}} src={language.flag} />
                <span className="text-[16px] font-normal">{language.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
