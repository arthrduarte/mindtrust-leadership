import Link from "next/link";
import SponsorProgram from "@/components/SponsorProgram";

export default function MLDPProgram() {
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
            <span>Mindtrust Leadership Development Program (MLDP)</span>
          </div>
          <h1 className="text-4xl font-bold">
            Mindtrust Leadership Development Program (MLDP)
          </h1>
        </div>
      </div>

      {/* Program Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-8">
              Delivered since 2005, in partnership with post-secondary institutions in the National Capital 
              Region, this program features seven interactive sessions facilitated by leadership 
              development experts. Leadership theory and content is complemented by the inclusion of 
              community leaders, whom share their practical leadership experiences and wisdom.
            </p>
          </div>
        </div>
      </section>

      {/* What Participants Learn Section */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What participants learn</h2>
          <p className="text-gray-600 mb-12">
            The program consists of seven modules, which cover key concepts related to leadership in today's innovative world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leadership dimensions */}
            <div className="flex bg-white rounded-lg border border-gray-200">
              <div className="w-1/3 bg-gray-200"></div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4">Leadership dimensions</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Introduction to leadership</li>
                  <li>Leadership dimensions</li>
                  <li>Are leaders born or made?</li>
                </ul>
              </div>
            </div>

            {/* Leading from Within */}
            <div className="flex bg-white rounded-lg border border-gray-200">
              <div className="w-1/3 bg-gray-200"></div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4">Leading from Within</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>What Makes a Great Leader?</li>
                  <li>Leadership vs. Management</li>
                  <li>INSIGHT Assessment</li>
                </ul>
              </div>
            </div>

            {/* Communications & Influence */}
            <div className="flex bg-white rounded-lg border border-gray-200">
              <div className="w-1/3 bg-gray-200"></div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4">Communications & Influence</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Leadership Qualities That Increase Influence</li>
                  <li>Influence as an Outcome</li>
                </ul>
              </div>
            </div>

            {/* Team Collaboration & EDI */}
            <div className="flex bg-white rounded-lg border border-gray-200">
              <div className="w-1/3 bg-gray-200"></div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4">Team Collaboration & EDI</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Facilitation & Team Development</li>
                  <li>Fundamentals of Equity, Diversity, & Inclusion</li>
                </ul>
              </div>
            </div>

            {/* Balanced Leadership */}
            <div className="flex bg-white rounded-lg border border-gray-200">
              <div className="w-1/3 bg-gray-200"></div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4">Balanced Leadership</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Work/Life Balance</li>
                  <li>Being Resilient & Dealing with Stress</li>
                </ul>
              </div>
            </div>

            {/* Leadership & Conflict */}
            <div className="flex bg-white rounded-lg border border-gray-200">
              <div className="w-1/3 bg-gray-200"></div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4">Leadership & Conflict</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Sources of Conflict</li>
                  <li>Effective Conflict Resolution</li>
                </ul>
              </div>
            </div>

            {/* Leadership in Action */}
            <div className="flex bg-white rounded-lg border border-gray-200">
              <div className="w-1/3 bg-gray-200"></div>
              <div className="w-2/3 p-6">
                <h3 className="text-xl font-bold mb-4">Leadership in Action</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Presentation of Personal Leadership Statements</li>
                  <li>Panel & Individual Discussions with Community Leaders</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <svg 
                className="w-12 h-12 text-gray-600 mb-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z"/>
              </svg>
              <blockquote className="text-gray-600">
                <p className="text-lg mb-6">
                  "The Mindtrust program is truly an eye-opening experience that has allowed me 
                  to discover the true essence of leadership. It has equipped me with a diversity of 
                  life skills and problem-solving skills, and has helped me gain more confidence. 
                  Through this program I have met and engaged with collaborative individuals in a 
                  very friendly environment. This program is a valuable opportunity for personal 
                  development and networking for aspiring future leaders."
                </p>
                <footer className="font-bold">— Alumni</footer>
              </blockquote>
            </div>

            <div>
              <svg 
                className="w-12 h-12 text-gray-600 mb-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z"/>
              </svg>
              <blockquote className="text-gray-600">
                <p className="text-lg mb-6">
                  "The unique part, I'd say, is the focus on your own skills and your own 
                  introspection – which is very important, but often overlooked."
                </p>
                <footer className="font-bold">— Alumni</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Registration Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Register</h2>
              <p className="text-gray-600">
                Next session in the Fall of 2024. Participants must register through their 
                university.
              </p>
            </div>

            {/* Notification Signup */}
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Get notified when registrations are open
              </h2>
              <p className="text-gray-600 mb-8">
                Sign up for our newsletter, and we'll notify you when registration is 
                available. You'll also receive updates on our programs, events, and 
                opportunities to support the next generation of leaders.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Program */}
      <SponsorProgram />

      {/* Partners and Funders Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Partners and Funders</h2>
          
          {/* Funders */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Funders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={`funder-${i}`} 
                  className="aspect-[3/2] bg-gray-200 rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Annual sponsors */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Annual sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={`sponsor-${i}`} 
                  className="aspect-[3/2] bg-gray-200 rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Community partners */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Community partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={`community-${i}`} 
                  className="aspect-[3/2] bg-gray-200 rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Program partners */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Program partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={`program-${i}`} 
                  className="aspect-[3/2] bg-gray-200 rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 