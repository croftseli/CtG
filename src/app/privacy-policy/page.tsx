import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | Copper to Gold",
  description: "Privacy policy for the Copper to Gold website.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full">
      <div className="py-10 md:py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-[#4A3B32] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#7A5139] mb-10">Last updated: June 2026</p>

          <div className="space-y-8 text-[#4A3B32] font-sans text-base md:text-lg leading-relaxed">

            <section>
              <h2 className="font-serif text-2xl text-[#7A5139] mb-3">Overview</h2>
              <p>
                Copper to Gold is committed to protecting your privacy. This website
                (<span className="font-medium">coppertogold.org</span>) does not directly collect,
                store, or process any personal information. We do not use cookies, analytics
                trackers, or any form of browser storage.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#7A5139] mb-3">Mailing List &amp; Notifications</h2>
              <p>
                Our "Join Mailing List" and "Notify Me" sign-up forms are hosted and operated by{' '}
                <strong>Google Forms</strong>. When you submit one of these forms, your information
                (such as your name and email address) is sent directly to Google and stored in
                Google's systems. Copper to Gold accesses that information only to contact you
                about program updates.
              </p>
              <p className="mt-3">
                Google's handling of your data is governed by the{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B7732B] underline hover:text-[#7A5139] transition-colors"
                >
                  Google Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#7A5139] mb-3">Embedded Google Calendar</h2>
              <p>
                Our program calendar page displays a calendar embedded from{' '}
                <strong>Google Calendar</strong>. This embed is read-only and public — no
                sign-in is required. Google may collect standard usage data (such as your IP
                address) when you view the calendar. This is governed by the{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B7732B] underline hover:text-[#7A5139] transition-colors"
                >
                  Google Privacy Policy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#7A5139] mb-3">Third-Party Links</h2>
              <p>
                This site contains links to external websites, including Benevity for corporate
                donation matching. When you follow these links, you leave our site and their own
                privacy policies apply. We are not responsible for the privacy practices of any
                third-party sites.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-[#7A5139] mb-3">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please reach out to us:
              </p>
              <ul className="mt-3 space-y-1 list-none">
                <li>
                  <span className="font-medium">Email: </span>
                  <a
                    href="mailto:admin@coppertogold.org"
                    className="text-[#B7732B] underline hover:text-[#7A5139] transition-colors"
                  >
                    admin@coppertogold.org
                  </a>
                </li>
                <li>
                  <span className="font-medium">Phone: </span>1.615.475.5565
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
