// app/components/Navbar.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/what", label: "What to Expect" },
    { href: "/aboutus", label: "About Us" },
    { href: "/supportus", label: "Support Us" }
  ];

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-4 md:py-6">
      <Link href="/" className="pl-2 md:pl-4">
        <Image src="/logo.png" alt="Copper to Gold logo" width={128} height={32} className="w-24 md:w-32" />
      </Link>
      

      {/* menu items format */}
      <ul className="hidden md:flex justify-between text-lg flex-1 gap-[5vw] mx-[8vw]">
        {links.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}
      </ul>
      
      <Link href="/notify" className="hidden md:flex items-center gap-2 px-5 py-2 rounded bg-[#F7B923] pr-6">
        <Image src="/bell.svg" alt="bell" width={12} height={12} />
        <span>Notify Me</span>
      </Link>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
        <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-black ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col text-lg">
            {links.map(link => (
              <li key={link.href} className="border-b">
                <Link href={link.href} className="block px-6 py-4" onClick={() => setIsOpen(false)}>{link.label}</Link>
              </li>
            ))}
            <li className="p-4">
              <Link href="/notify" className="flex items-center justify-center gap-2 px-4 py-2 rounded bg-[#F7B923]" onClick={() => setIsOpen(false)}>
                <Image src="/bell.svg" alt="bell" width={12} height={12} />
                <span>Notify Me</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}