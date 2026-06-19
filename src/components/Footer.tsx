// app/components/Footer.js
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="relative h-46 md:h-64 flex flex-col items-center justify-center text-white px-6">
        <Image src="/footer.png" alt="" aria-hidden="true" fill className="object-cover" />
        <div className="relative z-10 text-center">
          <h2 className="text-[#FFF4EB] text-2xl md:text-4xl mb-6">Ready to join?</h2>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSepEd-b_GkPt5RGPD3-7Rs3Jvxwi8BztnbiFTU3sRto70I5LQ/viewform" className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#F7B923] text-[#7A2000]">
            <span>Join Mailing List</span>
          </Link>

          {/* <Link href="https://forms.gle/ATCL16rRaKBgLmWz9" className="inline-flex items-center gap-2 px-5 py-2 rounded bg-[#F7B923] text-[#7A2000]">
            <span>Join Cohort 12!</span>
          </Link> */}

        </div>
      </div>

      <div className="bg-[#DFB97B] px-4 md:px-12 md:py-4 flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Copper to Gold logo"
            width={192}
            height={48}
            className="w-24 md:w-38 h-auto mx-2 md:mx-[4vw] cursor-pointer"
          />
        </Link>

        <Link href="/calendar" aria-label="Our Program" className="flex flex-col items-center text-center group translate-x-[-2px] md:translate-x-0">
          <Image
            src="/calendar.svg"
            alt=""
            width={32}
            height={32}
            className="w-6 md:w-10 h-auto scale-125 md:mb-4"
          />
          <p className="hidden md:block text-[10px] md:text-[18px] group-hover:underline">
            Our Program
          </p>
        </Link>

        <Link href="/support-us#orange" aria-label="Donate Now" className="flex flex-col items-center text-center group">
          <Image
            src="/heart.svg"
            alt=""
            width={32}
            height={32}
            className="w-6 md:w-10 h-auto transition-transform scale-125 group-hover:scale-150 md:mb-4"
          />
          <p className="text-[10px] md:text-[18px] group-hover:underline">
            Donate Now
          </p>
        </Link>

        <div className="text-left text-[12px] md:text-[18px] pl-2 md:pr-8 md:mx-[4vw]">
          <p>Questions? Call or Email us:</p>
          <a
            href="mailto:admin@coppertogold.org"
            className="block break-all md:break-normal hover:underline"
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
            aria-label="Website by UnityWall, opens in a new tab"
            className="underline hover:text-white transition-colors"
          >
            UnityWall
          </a>
          {" · "}
          <Link href="/privacy-policy" className="underline hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
}

// will this deploy?