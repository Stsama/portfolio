"use client";

import { setUserLocale } from "@/actions/setLanguage";
export default function LanguageSwitcher({ locale }: { locale: string }) {

  return (
    <select 
      className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 z-40" 
      onChange={(e) => {
        setUserLocale(e.target.value as any)
      }}
      defaultValue={locale}
    >
        <option value="en">En</option>
        <option value="fr">Fr</option>
    </select>



  );
}
