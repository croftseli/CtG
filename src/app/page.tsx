import Image from 'next/image'
import Link from 'next/link';
export default function LandingPage() {


{/* */}

  return (
    <main className="min-h-screen overflow-x-hidden font-sans text-[#1a1a1a]">
      {/* --- SECTION 1: CtG (2 columns) --- */}
<section className="relative w-full max-w-7xl mx-auto pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  
  {/* Left */}
  <div className="relative max-w-xl ml-4 xl:-ml-32 md:pt-8 text-left">
    <h1 className="font-serif text-[48px] md:text-[90px] text-[#2C2C2C] pt-24 md:pt-2.5 lg:whitespace-nowrap">
      COPPER to GOLD
    </h1>
     
    <p className="font-serif text-[22px] md:text-[30px] mb-8" style={{ fontFamily: 'var(--font-the-seasons), serif' }}>
      A transformative approach to race amity.
    </p>

      <div
        className="
          relative
          ml-6
          border-l-2
          border-[#7A5139]
          px-6 md:pl-8
          w-full md:w-auto
          mx-auto md:mx-0
          text-left
          h-full max-h-[220px]
          flex flex-col items-start
        "
      >

      <p className="text-[#7A5139] text-base md:text-lg leading-relaxed">
        Racism denies us the world we all deserve. <br/> Copper to Gold puts YOU at the center of change.
      </p>
      <button className="bg-[#F4B933] hover:bg-[#e0a82e] text-[#7A2000] py-3 px-8 rounded-md transition-colors mt-4">
        About Us
      </button>
    </div>
  </div>

  {/* Right*/}
  <div className="relative right-[-450px] h-[600px] w-full hidden lg:block overflow-visible">
    <div className="absolute top-0 right-0 h-full w-[600px]">
      
      <div className="absolute top-16 right-0 w-[550px] h-[550px] pointer-events-none z-1">
        <Image 
          src="/brown.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="absolute top-48 right-[12vw] w-[550px] h-[550px] pointer-events-none z-2">
        <Image 
          src="/gold.svg"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>

    </div>
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

              <div className="border-l-2 border-white pl-6 mb-10">

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
    <p className="text-m md:text-lg mb-16">
      Explore and unlearn behavior in a safe, guided, interactive program
    </p>
    <Link href="/what-to-expect">
      <button className="bg-[#F4B933] hover:bg-[#e0a82e] text-[#7A2000] py-3 px-6 rounded-md transition-colors">
        Learn more
      </button>
    </Link>
  </div>

  {/* Grid Columns */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-18">

    {/*should make this reusable maybe */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-5 relative w-16 h-16">
        <Image src="target.svg" alt="Target icon" fill className="object-contain" />
      </div>
      <h3 className="font-serif text-2xl mb-4">What We Cover</h3>
      <ul className="text-center md:text-left w-full lg:pl-10 px-6 space-y-1.5 text-m leading-snug">
        <li>• Whiteness and White Privilege</li>
        <li>• Gaslighting</li>
        <li>• Avoiding Conversations About Race</li>
        <li>• Intention vs. Impact</li>
      </ul>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="mb-5 relative w-16 h-16">
        <Image src="hourglass.svg" alt="Hourglass icon" fill className="object-contain" />
      </div>
      <h3 className="font-serif text-2xl mb-4">When and How</h3>
      <ul className="text-center md:text-left w-full lg:pl-10 px-6 space-y-1.5 text-m  leading-snug">
        <li>• Cohorts meet twice a year</li>
        <li>• Each cohort lasts 16 weeks</li>
        <li>• 2 hrs per week via Zoom</li>
        <li>• Various days and times available</li>
      </ul>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="mb-5 relative w-16 h-16">
        <Image src="heart.svg" alt="Heart icon" fill className="object-contain" />
      </div>
      <h3 className="font-serif text-2xl mb-4">How It Works</h3>
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