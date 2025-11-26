// app/components/Footer.js
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative h-46 md:h-80 flex flex-col items-center justify-center text-white px-6">
        <Image src="/footer.png" alt="" fill className="object-cover" />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl mb-6">Ready to join or Have questions for us?</h2>
          <Link href="/support-us" className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#F7B923] text-[#7A2000]">
            <span>Support Us</span>
          </Link>
        </div>
      </div>
      
      {/* FIX APPLIED HERE */}
      <div className="bg-[#DFB97B] px-4 md:px-12 md:py-8 flex flex-row items-center justify-between">
        {/* 1. Removed scale-75. Added w-32 h-auto to physically shrink the element on mobile */}
        {/* 2. Reduced mx-[4vw] to mx-2 on mobile to save space */}
        <Image 
          src="/logoblack.png" 
          alt="Copper to Gold logo" 
          width={192} 
          height={48} 
          className="w-32 h-auto md:w-48 mx-2 md:mx-[4vw]" 
        />
        
        {/* 3. Reduced mx-[8vw] to pl-2 on mobile */}
        <div className="text-left text-[12px] md:text-[18px] pl-2 md:pr-8 md:mx-[8vw]">
          <p className="mb-1">Questions? Call or Email us </p>
          <a href="mailto:admin@coppertogold.org" className="block pt-4 break-all md:break-normal">admin@coppertogold.org</a>
          <a href="tel:1.615.475.5565" className="block">1.615.475.5565</a>
        </div>
      </div>
      
      <div className="bg-[#7A5139] text-[#DFB97B] text-center text-sm">
        <p className="font-bold text-[12px] md:text-[20px] py-1">
          A Transformative Approach to Race Amity 
        </p>
        <p className="text-[12px]">
          Website by{" "}
          <a 
            href="https://unitywall.co/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            UnityWall
          </a>
        </p>
      </div>
    </footer>
  );
}