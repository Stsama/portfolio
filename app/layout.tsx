import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';

import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import LanguageSwitcher from '@/components/language-switch';

const inter = Inter({ subsets: ["latin"] });


// export const metadata = {
//   title: "Albert Ezoula | Personal Portfolio",
//   description: "Albert is a full-stack developer with over a year of experience.",
// };


export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const locale = await getLocale();

  const messages = await getMessages();
  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <NextIntlClientProvider messages={messages}>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              <LanguageSwitcher  locale={locale} />
              {children}
              <Footer />

              <Toaster position="top-right" />
              <ThemeSwitch />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
