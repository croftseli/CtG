// app/components/Footer.js
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative h-46 md:h-64 flex flex-col items-center justify-center text-white px-6">
        <Image src="/footer.png" alt="" fill className="object-cover" />
        <div className="relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl mb-6">Ready to join?</h2>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSepEd-b_GkPt5RGPD3-7Rs3Jvxwi8BztnbiFTU3sRto70I5LQ/viewform" className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#F7B923] text-[#7A2000]">
            <span>Join Mailing List</span>
          </Link>
        </div>
      </div>
      
      <div className="bg-[#DFB97B] px-4 md:px-12 md:py-4 flex flex-row items-center justify-between">
       <Image 
          src="/logo.png" 
          alt="Copper to Gold logo" 
          width={192} 
          height={48} 
          className="w-32 h-auto md:w-48 mx-2 md:mx-[4vw]" 
        />
        
        <div className="text-left text-[12px] md:text-[18px] pl-2 md:pr-8 md:mx-[8vw]">
          <p className="">Questions? Call or Email us:</p>
      <a 
        href="mailto:admin@coppertogold.org" 
        className="block pt-4 break-all md:break-normal hover:underline hover:text-[#B7732B]"
      >
        admin@coppertogold.org
      </a>
          <p className="block">1.615.475.5565</p>
        </div>
      </div>
      
      <div className="bg-[#7A5139] text-[#FFF4EB] text-center text-sm md:py-2">
        <p className="font-bold text-[12px] md:text-[16px] py-1">
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