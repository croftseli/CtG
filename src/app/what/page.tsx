export default function WhatToExpect() {
  return (
    <main className="min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl mb-4">What to Expect</h1>
          <p className="text-lg">
            Explore and unlearn behavior in a safe, guided, interactive program
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* Programming */}
          <div className="bg-[#F7B923] rounded-2xl text-[#7A5139] p-12 aspect-square flex flex-col justify-center">
            <h2 className="font-serif text-3xl pb-6 text-center mb-4">Programming</h2>
            <ul className="space-y-3 text-xl max-w-[85%] mx-auto leading-relaxed">
              <li>• We explore 19 unique "inherent and at times subconscious" behaviors that negatively impact interracial relations.</li>
              <li>• Copper to Gold uses multimedia, current research on racism, and questions for consultation and reflection</li>
            </ul>
          </div>

          {/* Some Behaviors Covered */}
          <div className="bg-[#DFB97B] text-[#7A5139] rounded-2xl p-12 aspect-square flex flex-col justify-center">
            <h2 className="font-serif text-3xl text-center translate-y-[-48px] mb-4">Some Behaviors Covered:</h2>
            <ul className="space-y-0.5 text-xl max-w-[85%] mx-auto leading-relaxed">
              <li>• Whiteness and White Privilege</li>
              <li>• Gaslighting</li>
              <li>• Avoiding Conversations About Race</li>
              <li>• Intention vs. Impact</li>
            </ul>
          </div>

          {/* Frequency */}
          <div className="bg-[#7A5139] text-white rounded-2xl p-12 aspect-square flex flex-col justify-center">
            <h2 className="font-serif text-3xl pb-6 translate-y-[-12px] text-center mb-4">Frequency</h2>
            <ul className="space-y-3 text-xl max-w-[85%] mx-auto leading-relaxed">
              <li>• We offer two cohorts per year, spring and fall.</li>
              <li>• Duration is 16 weeks, 2 hours per session</li>
              <li>• We offer a variety of days and times for participants to choose from.</li>
            </ul>
          </div>

          {/* Environment */}
          <div className="bg-[#B7732B] text-white rounded-2xl p-12 aspect-square flex flex-col justify-center">
            <h2 className="font-serif text-3xl pb-10 text-center mb-4">Environment</h2>
            <p className="text-xl max-w-[85%] mx-auto leading-relaxed">The course takes place in an <span className="font-bold">online</span> closed group setting where intimacy and trust are fostered. We encourage the sharing of personal experiences as a path toward self-discovery and to develop an awareness of different perspectives.</p>
          </div>
        </div>

        {/* Special Arrangements */}
        <div className="text-center">
          <h2 className="font-serif text-3xl text-[#B7732B] mb-3">Special Arrangements</h2>
          <p className="text-lg">
            We are happy to consult on setting up a time that works best for you and your group.
          </p>
        </div>
      </div>
    </main>
  )
}
