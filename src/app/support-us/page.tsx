import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Support Us | Copper to Gold",
  description: "Support Copper to Gold through donations via Zelle, check, Venmo, or Benevity's corporate matching program.",
};

export default function DonationPage() {
  return (
    <div className="min-h-screen w-full">
      {/* TOP WHITE SECTION */}
      <div className="md:py-12 px-8">
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-8 pb:mb-16">
            <h1 className="font-serif text-5xl py-6 text-[#4A3B32] mb-2 md:mb-6">
              Support Us
            </h1>
            <p className="text-[16px] md:text-[20px] text-[#4A3B32] max-w-2xl mx-auto leading-relaxed pb-0 md:pb-8">
              The <span role="text" aria-label="Copper to Gold" className="font-bold text-[#B7732B]">Copper <span className="font-normal text-[#000000]"> to
                <span className="font-bold text-[#F7B000]"> Gold </span></span></span>program is <span className="font-bold">FREE</span>, and we welcome any donations.
              <br />
              Thank you for supporting our work toward race amity.
            </p>
          </div>

          {/* DONATIONS HELP SECTION */}
          <div className="flex items-start justify-between">
            <div className="w-1/2 md:translate-y-6 ">
              <h2 className="font-serif text-[18px] md:text-[32px] text-[#B7732B] mb-6 leading-tight">
                Your donations help us continue
                <br />
                and expand our efforts in:
              </h2>
              <ul className="space-y-1 text-[#4A3B32] text-[14px] md:text-[20px] pb-6 md:pb-0">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Education, training, and program development</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Keeping the course accessible</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Administrative and operational expenses</span>
                </li>
              </ul>
            </div>
            <div className="w-1/2 flex justify-end items-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        
                             
                             
                              <img
                src="/qr.png"
                alt="QR code to donate to Copper to Gold"
                className="translate-x-16 md:translate-x-0 scale-80 md:scale-175"
              />
                <div id="orange"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM ORANGE SECTION */}
      <div
        className="w-full"
        style={{
          background: "linear-gradient(90deg, #F7B923 0%, #B7732B  100%)",
        }}
      >


        {/* DONATION METHODS - code structure here is not so good - can be reviewed*/}
        <div className="p-8 flex flex-col items-center py-20">
          <div className="max-w-5xl w-full text-center mb-12">
            <h2 className="font-serif text-[26px] text-[#171717]">
              Copper to Gold is grateful for any donation you feel moved to make and telling others about our program.
            </h2>
            <p className="font-serif text-[18px] text-[#171717] mt-6">
              Choose from donation methods below.
            </p>
          </div>
          <div className="flex flex-col space-y-6 w-full max-w-5xl">


            {/* ZELLE */}
            <div className="bg-[#FFF4EB] rounded-xl shadow p-8 flex justify-between items-center text-[#4A3B32]">
              <h3 className="font-serif text-[24px]">Zelle</h3>
              <p className="font-sans text-[12px] md:text-[18px]">treasurer@coppertogold.org</p>
            </div>


            {/* CHECK */}
            <div className="bg-[#FFF4EB] rounded-xl shadow p-8 flex justify-between items-center text-[#4A3B32]">
              <div>
                <h3 className="font-serif text-[24px]">Check</h3>
                <p className="font-serif text-[16px]">Copper to Gold</p>
              </div>
              <div className="text-right font-sans text-[12px] md:text-[14px] w-1/2">
                Copper to Gold a Transformative approach to Race Amity <br />
                5543 EDMONDSON PIKE NUM 5 NASHVILLE, TN 37211 <br />
                Employer ID Number: 88-2442790
              </div>
            </div>


            {/* VENMO */}
            <div className="bg-[#FFF4EB] rounded-xl shadow p-8 flex justify-between items-center text-[#4A3B32]">
              <h3 className="font-serif text-[24px]">Venmo</h3>
              <div className="text-right font-sans text-[16px]">
                @copper2gold <br />
                <span className="text-[12px] md:text-[14px] px-4">Please note Venmo charges a small transaction fee.</span>
              </div>
            </div>


            {/* BENEVITY */}
            <div className="bg-[#FFF4EB] rounded-xl shadow p-8 flex justify-between items-center text-[#4A3B32]">
              <div>
                <h3 className="font-serif text-[24px]">Benevity</h3>
                <p className="font-serif text-[16px]">Corporate Matching Program</p>
              </div>
              <div className="text-right font-sans text-[14px]">
                <a href="https://causes.benevity.org" className="underline">
                  Causes.benevity.org
                </a>
                <br />
                Copper to Gold – A Transformative Approach to Race Amity <br />
                ID: 840-882447290
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
