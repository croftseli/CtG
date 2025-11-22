import Image from 'next/image'

export default function LandingPage() {


{/* */}

  return (
    <main className="min-h-screen overflow-x-hidden font-sans text-[#1a1a1a]">
      
      {/* --- SECTION 1: CtG (2 columns) --- */}
      <section className="relative w-full max-w-7xl mx-auto pb-16 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left */}
        <div className="relative max-w-xl xl:-ml-32">
          <h1 className="font-serif text-[90px] text-[#4A3B32] mb-[-20px] text-center md:text-lef lg:whitespace-nowrap">
            COPPER to GOLD
          </h1>
            {/*too lazy to make font work outside h1 as its never needed except here :)) */}
          <p className="font-serif text-[30px] mb-8 text-center md:text-left" style={{ fontFamily: 'var(--font-the-seasons), serif' }}>
            A transformative approach to race amity.
          </p>

              <div
                className="
                  relative
                  pt-8 md:pt-0
                  border-t-2 md:border-t-0 md:border-l-2
                  border-[#7A5139]
                  pl-8 pl-0
                  w-2/3 md:w-auto
                  mx-auto md:mx-0
                  text-center md:text-left
                  h-full max-h-[220px]
                  flex flex-col items-center md:items-start
                "
              >
            <p className="text-[#7A5139] text-l md:text-lg leading-relaxed">
              Racism denies us the world we all deserve. <br/> Copper to Gold puts YOU at the center of change.
            </p>
            <button className="bg-[#F4B933] hover:bg-[#e0a82e] text-[#7A5139] py-3 px-8 rounded-md transition-colors self-center md:self-start mt-4">
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
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-8 leading-tight">
              Promote sustainable change through personal behavioral transformation
            </h2>

            <div className="border-l-2 border-white pl-6 mb-10">

              <p className="text-white/90 text-lg leading-relaxed">
                Our mission is to guide a process of personal transformation as we explore attitudes and behaviors associated with anti-black racism and prejudice. We provide an interactive environment that facilitates reflection and collective learning, invites diverse perspectives and encourages building healthy interracial relationships.
              </p>
            </div>

            <button className="bg-[#F4B933] hover:bg-[#e0a82e] text-[#7A5139] font-bold py-3 px-8 rounded-md transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </section>



{/* --- SECTION 3: WHAT TO EXPECT --- */}
<section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
  <div className="text-center mb-10">
    <h2 className="font-serif text-5xl text-[#C18227] mb-3">What to Expect</h2>
    <p className=" text-lg mb-6">
      Explore and unlearn behavior in a safe, guided, interactive program
    </p>
    <button className="bg-[#F4B933] hover:bg-[#e0a82e] text-[#7A5139] font-bold py-3 px-8 rounded-md transition-colors">
      Learn more
    </button>
  </div>

  {/* Grid Columns */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

    {/*should make this reusable maybe */}
    <div className="flex flex-col items-center text-center">
      <div className="mb-5 relative w-16 h-16">
        <Image src="target.svg" alt="Target icon" fill className="object-contain" />
      </div>
      <h3 className="font-serif text-2xl mb-4">What We Cover</h3>
      <ul className="text-center md:text-left w-full lg:pl-10 px-6 space-y-1.5 text-[17px] leading-snug">
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
      <ul className="text-center md:text-left w-full lg:pl-10 px-6 space-y-1.5 text-[17px] leading-snug">
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
      <ul className="text-center md:text-left w-full lg:pl-10 px-6 space-y-1.5 text-[17px] leading-snug ">
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