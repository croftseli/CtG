export default function DonationPage() {
  return (
    <div className="min-h-screen w-full">
      {/* TOP WHITE SECTION */}
      <div className="py-20 px-8">
        <div className="max-w-5xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-[48px] text-[#4A3B32] mb-6">
              Support Us
            </h1>
            <p className="font-sans text-[18px] text-[#4A3B32] max-w-2xl mx-auto leading-relaxed">
              The Copper to Gold program is free, and we welcome any donations.
              <br />
              Thank you for supporting our work toward race amity.
            </p>
          </div>

          {/* DONATIONS HELP SECTION */}
          <div className="flex items-start justify-between">
            <div className="w-1/2">
              <h2 className="font-serif text-[32px] text-[#B7732B] mb-8 leading-tight">
                Your donations help us continue
                <br />
                and expand our efforts in:
              </h2>
              <ul className="space-y-3 text-[#4A3B32] font-sans text-[18px]">
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
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                    </svg>
                  </div>
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
          background: "linear-gradient(90deg, #B7732B 0%, #F7B923 100%)",
        }}
      >
        {/* PAGE CONTENT WRAPPER */}
        <div className="p-8 flex flex-col items-center py-20">
          <div className="max-w-5xl w-full text-center mb-16">
            <h2 className="font-serif text-[26px] text-white">
              Copper to Gold is grateful for any donation you feel moved to make and telling others about our program.
            </h2>
            <p className="font-serif text-[18px] text-white mt-2">
              Choose from these donation methods.
            </p>
          </div>
          <div className="flex flex-col space-y-6 w-full max-w-5xl">
            {/* ZELLE */}
            <div className="bg-[#FFF8EE] rounded-xl shadow p-8 flex justify-between items-center text-[#4A3B32]">
              <h3 className="font-serif text-[24px]">Zelle</h3>
              <p className="font-sans text-[18px]">treasurer@coppertogold.org</p>
            </div>
            {/* CHECK */}
            <div className="bg-[#FFF8EE] rounded-xl shadow p-8 flex justify-between items-center text-[#4A3B32]">
              <div>
                <h3 className="font-serif text-[24px]">Check</h3>
                <p className="font-serif text-[16px]">Copper to Gold</p>
              </div>
              <div className="text-right font-sans text-[14px] w-1/2">
                Copper to Gold a Transformative approach to Race Amity <br />
                5543 EDMONDSON PIKE NUM 5 NASHVILLE, TN 37211 <br />
                Employer ID Number: 88-2442790
              </div>
            </div>
            {/* VENMO */}
            <div className="bg-[#FFF8EE] rounded-xl shadow p-8 flex justify-between items-center text-[#4A3B32]">
              <h3 className="font-serif text-[24px]">Venmo</h3>
              <div className="text-right font-sans text-[16px]">
                @copper2gold <br />
                <span className="text-[12px]">Please note Venmo charges a small transaction fee.</span>
              </div>
            </div>
            {/* BENEVITY */}
            <div className="bg-[#FFF8EE] rounded-xl shadow p-8 flex justify-between items-center text-[#4A3B32]">
              <div>
                <h3 className="font-serif text-[24px]">Benevity</h3>
                <p className="font-serif text-[16px]">Corporate Matching Program</p>
              </div>
              <div className="text-right font-sans text-[14px]">
                <a href="https://causes.benevity.org" className="underline hover:text-[#B7732B]">
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