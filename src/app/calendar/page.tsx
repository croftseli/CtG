export default function CalendarPage() {
  return (
    <main className="min-h-screen bg-[#FFF4EB] px-6 py-20 font-sans">
      {/* Header */}
      <section className="max-w-7xl mx-auto mb-12">
        <h1 className="font-serif text-4xl md:text-6xl text-[#7A5139] mb-4">
          Program Calendar
        </h1>
      </section>
      {/* Calendar Container */}
      <section className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-4 md:p-8 border border-[#E6D3B1]">
        <div className="w-full overflow-hidden rounded-lg">
         <iframe
            src="https://calendar.google.com/calendar/embed?src=admin%40coppertogold.org"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Program Calendar"
            ></iframe>
        </div>
      </section>
    </main>
  )
}