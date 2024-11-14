import Link from "next/link";
import SponsorProgram from "@/components/SponsorProgram";
import StayConnected from "@/components/StayConnected";

export default function MentorshipProgram() {
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
            <span>Mentorship program</span>
          </div>
          <h1 className="text-4xl font-bold">Mentorship program</h1>
        </div>
      </div>

      {/* Program Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-8">
              The Mindtrust Mentorship Program connects recent graduates of our MLDP and YLP 
              programs with experienced mentors from the Mindtrust community. With over 100 active 
              mentors, we carefully match young leaders with seasoned professionals who can provide 
              personalized guidance, helping them navigate leadership challenges and seize opportunities.
            </p>
            <Link
              href="#become-mentor"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply to become a mentor
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Benefits of participating</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* For mentees */}
            <div>
              <h3 className="text-2xl font-bold mb-6">For mentees</h3>
              <ul className="space-y-4">
                {[
                  "Receive tailored advice and support from experienced leaders",
                  "Enhance your leadership abilities through targeted mentorship",
                  "Build connections with established professionals"
                ].map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="shrink-0">
                      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For mentors */}
            <div>
              <h3 className="text-2xl font-bold mb-6">For mentors</h3>
              <ul className="space-y-4">
                {[
                  "Contribute to the growth of the next generation of leaders",
                  "Continue developing your own leadership and mentoring skills",
                  "Play a key role in shaping the future of your community"
                ].map((benefit, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="shrink-0">
                      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Mentor Section */}
      <section id="become-mentor" className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Shape the future: become a mentor</h2>
            <p className="text-gray-600 mb-8">
              Join the Mindtrust Mentorship Program and make a meaningful impact on the next generation of leaders. As a 
              mentor, you'll share your expertise, foster valuable relationships, and guide young leaders on their journeys. Ready 
              to inspire and support emerging leaders? Apply today and become part of our thriving mentorship community.
            </p>
            <Link 
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Apply to become a mentor
            </Link>
          </div>
        </div>
      </section>

      <SponsorProgram />
      <StayConnected className="bg-gray-100"/>
    </>
  );
}
