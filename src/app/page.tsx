import Image from 'next/image'
import Link from 'next/link';
import GradientText from '@/components/GradientText';
export default function LandingPage() {


{/* */}

  return (
  <main className="min-h-screen overflow-x-hidden font-sans">
  {/* --- SECTION 1: CtG (2 columns - text and face ) --- */}
  <section className="relative w-full md:max-w-7xl mx-auto pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
  {/* Left */}
  <div className="relative max-w-xl ml-4 md:ml-2 md:pt-8 text-left">
      <h1 className="font-serif text-[48px] md:text-[90px] text-[#2C2C2C] pt-20 md:pt-2.5 whitespace-nowrap flex items-baseline gap-3">

        <div className="py-2">
          <GradientText
            colors={["#B7732B", "#B7732B", "#B7732B", "black", "#B7732B",  "#B7732B","#B7732B", ]}
            animationSpeed={19}
            showBorder={false}
            className="cursor-default"
          >
            COPPER
          </GradientText>
        </div>

        <span className="text-[24px] md:text-[52px] relative translate-y-[-5px] md:translate-y-[-10px]">
          TO
        </span>

        <div className="py-2">
          <GradientText
            colors={["#F7B923", "black", "#F7B923", "black", "#F7B923", "black"]}
            animationSpeed={12}
            showBorder={false}
            className="custom-class"
          >
            GOLD
          </GradientText>
        </div>

      </h1>
    <p className="font-serif text-[18px] md:text-[30px] mb-8" style={{ fontFamily: 'var(--font-the-seasons), serif' }}>
      A transformative approach to race amity.
    </p>

      <div
        className="
          relative
          border-l-1 md:border-l-2
          border-[#7A5139]
          px-6 md:pl-8
          w-full md:w-auto
          text-left
          h-full max-h-[220px]
          flex flex-col items-start
        "
      >

      <p className="text-[#7A5139] text-[16px] md:text-lg leading-relaxed">
        Racism denies us the world we all deserve. <br/> Copper to Gold puts YOU at the center of change.
      </p>
      <Link href="/about-us">
      <button className="bg-[#F4B933] hover:bg-[#e0a82e] text-[#7A2000] text-m py-2 md:py-3 px-6 md:px-8 rounded-md transition-colors mt-4">
        About Us
      </button></Link>
    </div>
  </div>

  {/* Right*/}
    <div className="relative right-[-150px] bottom-[-65px] h-[650] hidden lg:block">
      <Image 
        src="/head.png"
        alt=""
        fill
        className="object-cover pointer-events-none"
        priority
      />
    </div>

</section>

        {/* --- SECTION 2: MIDDLE BANNER --- */}
        <section className="relative w-full bg-[#C18227] overflow-hidden">
          
          {/* Background*/}
          <div className="absolute inset-0 z-0">
              <div className="absolute right-0 w-2/3 h-full mix-blend-multiply opacity-50">
                  <Image 
                      src="/homepage.png" 
                      alt="Group of people" 
                      fill
                      className="object-cover object-center grayscale"
                  />
              </div>
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#C18227] via-[#C18227] to-transparent z-10" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32">
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl lg:text-5xl text-white mb-8 leading-tight">
                Promote sustainable change through personal behavioral transformation
              </h2>

              <div className="border-l-1 md:border-l-2 border-white pl-6 mb-10">

                <p className="text-white/90 text-m md:text-lg leading-relaxed">
                  Our mission is to guide a process of personal transformation as we explore attitudes and behaviors associated with anti-black racism and prejudice. We provide an interactive environment that facilitates reflection and collective learning, invites diverse perspectives and encourages building healthy interracial relationships.
                </p>
              </div>

            <Link href="/what-to-expect">
              <button className="bg-[#F4B933] hover:bg-[#e0a82e] text-[#7A2000] py-3 px-8 rounded-md transition-colors">
                Learn more
              </button>
            </Link>
            </div>
          </div>
        </section>
{/* --- SECTION 3: WHAT TO EXPECT --- */}
  <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="font-serif text-3xl md:text-5xl text-[#C18227] mb-3">What to Expect</h2>
      <p className="text-m md:text-lg mb-8 md:mb-12">
        Explore and unlearn behavior in a safe, guided, interactive program
      </p>
    <Link href="/what-to-expect">
      {/* <button className="bg-[#F4B933] hover:bg-[#e0a82e] text-[#7A2000] py-2 md:py-3 px-4 md:px-6 rounded-md transition-colors">
        Learn more
      </button> */} 
      {/* Commented this button out, it's redundant */}
    </Link>
  </div>

  {/* Grid Columns */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 md:mt-14">

    {/* Should make this reusable maybe */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-5 relative w-16 h-16">
        <Image src="check.svg" alt="Target icon" fill className="object-contain scale-75 md:scale-100" />
      </div>
      <h3 className="font-serif text-3xl mb-4">What We Cover</h3>
      <ul className="text-center md:text-left w-full lg:pl-10 px-6 space-y-1.5 text-m leading-snug">
        <li>• Whiteness and White Privilege</li>
        <li>• Gaslighting</li>
        <li>• Avoiding Conversations About Race</li>
        <li>• Intention vs. Impact</li>
        <li>• And Much More...</li> 
      </ul>
    </div>

    <div className="flex flex-col py-6 md:py-0 items-center text-center">
      <div className="mb-5 relative w-16 h-16">
        <Image src="qmark.svg" alt="Hourglass icon" fill className="object-contain scale-100 md:scale-133" />
      </div>
      <h3 className="font-serif text-3xl mb-4">When and How</h3>
      <ul className="text-center md:text-left w-full lg:pl-10 px-6 space-y-1.5 text-m  leading-snug">
        <li>• Cohorts meet twice a year</li>
        <li>• Each cohort lasts 16 weeks</li>
        <li>• 2 hrs per week via Zoom</li>
        <li>• Various days and times available</li>
      </ul>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="mb-5 relative w-16 h-16">
        <Image src="gears.svg" alt="Gears icon" fill className="object-contain scale-125 md:scale-150" />
      </div>
      <h3 className="font-serif text-3xl mb-4">How It Works</h3>
      <ul className="text-center md:text-left w-full lg:pl-10 px-6 space-y-1.5 text-m leading-snug ">
        <li>• A closed, supportive group</li>
        <li>• Intimate setting of trust and respect</li>
        <li>• Sharing experience for growth</li>
        <li>• Commitment to all sessions</li>
      </ul>
    </div>

  </div>
</section>

    </main>
  )
}