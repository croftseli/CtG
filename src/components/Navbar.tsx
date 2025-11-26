"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/what-to-expect", label: "What to Expect" },
    { href: "/about-us", label: "About Us" },
    { href: "/support-us", label: "Support Us" }
  ];

  return (
    <>
      <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 md:py-6 fixed top-0 left-0 right-0 z-50 bg-[#FFF4EB]">
        <Link href="/" className="pl-2 md:pl-4">
          <Image src="/logo.png" alt="Copper to Gold logo" width={128} height={32} className="w-28 md:w-32" />
        </Link>

        {/* menu items format */}
        <ul className="hidden md:flex justify-between text-l lg:text-xl flex-1 gap-[5vw] mx-[8vw]">
          {links.map(link => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors hover:text-[#C18227] ${
                    isActive ? "text-[#C18227] font-semibold border-b-2 border-[#C18227] pb-0.5" : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSepEd-b_GkPt5RGPD3-7Rs3Jvxwi8BztnbiFTU3sRto70I5LQ/viewform"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded bg-[#F7B923] pr-6"
        >
          <Image src="/bell.svg" alt="bell" width={12} height={12} />
          <span>Notify Me</span>
        </Link>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
          <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-black ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <div className={`absolute top-[72px] left-0 right-0 bg-[#FFF4EB] shadow-lg md:hidden z-50 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col text-lg">
            {links.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href} className="border-b">
                  <Link
                    href={link.href}
                    className={`block px-6 py-4 transition-colors hover:text-[#C18227] ${
                      isActive ? "text-[#C18227] font-semibold" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="p-4">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSepEd-b_GkPt5RGPD3-7Rs3Jvxwi8BztnbiFTU3sRto70I5LQ/viewform"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-[#F7B923]"
                onClick={() => setIsOpen(false)}
              >
                <Image src="/bell.svg" alt="bell" width={12} height={12} />
                <span>Notify Me</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="h-[72px] md:h-[88px]" />
    </>
  );
}
