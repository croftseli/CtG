import type { Metadata } from "next";
import { PT_Sans} from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";

const ptSans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-pt-sans",
})

const theSeasons = localFont({
  src: [
    {
      path: '../../public/fonts/Fontspring-DEMO-theseasons-reg.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-theseasons-it.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-theseasons-bd.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Fontspring-DEMO-theseasons-bdit.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-the-seasons',
})

export const metadata: Metadata = {
  title: "Copper to Gold",
  description: "Copper to Gold",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSans.variable} ${theSeasons.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-[#171717] focus:rounded focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}