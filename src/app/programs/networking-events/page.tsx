import Link from "next/link";
import SponsorProgram from '@/components/SponsorProgram';
import StayConnected from '@/components/StayConnected';

export default function NetworkingEvents() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>›</span>
            <Link href="/what-we-do" className="hover:text-blue-600">
              What we do
            </Link>
            <span>›</span>
            <span>Networking events</span>
          </div>
          <h1 className="text-4xl font-bold">Networking events</h1>
        </div>
      </div>

      {/* Program Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-8">
              Our networking events, including the Mindtrust Meetup, are designed to connect alumni, 
              community leaders, and business professionals. These gatherings feature keynote speakers 
              or panel discussions that highlight alumni success stories and the impact of their 
              leadership. The events offer a balanced mix of formal and informal networking 
              opportunities, encouraging collaboration and sustaining lifelong professional relationships.
            </p>
          </div>
        </div>
      </section>

      {/* What Participants Learn Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-12">What participants learn</h2>
              <ul className="space-y-6">
                {[
                  "Connect with alumni, mentors, and community leaders",
                  "Gain insights from keynote speakers and panel discussions",
                  "Build and expand your professional network",
                  "Celebrate the successes of Mindtrust alumni",
                  "Collaborate with like-minded professionals",
                  "Explore topics around leadership and personal growth"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="shrink-0">
                      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-[4/3]"></div>
          </div>
        </div>
      </section>

      {/* Upcoming Dates Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Upcoming Dates</h2>
          <p className="text-gray-600 mb-8">
            Participants have to register with the university. Algonquin and Carleton create registrations pages in the fall.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* September Event */}
            <div className="bg-white rounded-lg p-6 space-y-6">
              <h3 className="text-xl font-bold">September</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Date:</h4>
                    <p className="text-gray-600">17 September, 2024</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Venue:</h4>
                    <p className="text-gray-600">TBD</p>
                  </div>
                </div>
              </div>
              <Link 
                href="#"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Register
              </Link>
            </div>

            {/* December Event */}
            <div className="bg-white rounded-lg p-6 space-y-6">
              <h3 className="text-xl font-bold">December</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tentative date:</h4>
                    <p className="text-gray-600">December</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Venue:</h4>
                    <p className="text-gray-600">TBD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* March Event */}
            <div className="bg-white rounded-lg p-6 space-y-6">
              <h3 className="text-xl font-bold">March</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Tentative date:</h4>
                    <p className="text-gray-600">December</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Venue:</h4>
                    <p className="text-gray-600">TBD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SponsorProgram />
      <StayConnected className="bg-gray-100"/>
    </>
  );
}
