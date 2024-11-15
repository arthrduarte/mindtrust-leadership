import InvestInYouth from '@/components/InvestInYouth';
import StayConnected from '@/components/StayConnected';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        {/* Background image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/banner.jpg')",
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl font-bold mb-4 text-white">
              Developing the next generation of leaders
            </h1>
            <p className="text-xl mb-6 text-white">
              Empowering youth, strengthening communities
            </p>
            <Link
              className="inline-block bg-[#0e809b] text-white px-6 py-3 rounded-full hover:bg-[#0a6077] transition-colors"
              href="/who-we-are"
            >
              Learn more about us
            </Link>
          </div>
        </div>
      </section>

      {/* Developing Young Leaders Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Developing young leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#9bd2d9] p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#0e809b] rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Develop leadership skills</h3>
              <p>Build leadership skills like effective communication, conflict resolution, and strategic decision-making.</p>
            </div>
            <div className="bg-[#9bd2d9] p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#0e809b] rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Gain confidence</h3>
              <p>Acquire a heightened sense of self-awareness and confidence in your ability to lead and inspire others.</p>
            </div>
            <div className="bg-[#9bd2d9] p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#0e809b] rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Build lifelong connections</h3>
              <p>Creation of lasting relationships among participants, mentors, and community leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Building Strong Communities Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Building strong communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#9bd2d9] p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#0e809b] rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Enhanced civic engagement</h3>
              <p>Our alumni are more likely to engage in civic activities, contribute to local governance, and take on leadership roles within their communities.</p>
            </div>
            <div className="bg-[#9bd2d9] p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#0e809b] rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Increased prosperity</h3>
              <p>Our young leaders are equipped with the skills they need to succeed, and contribute to the economic vitality of the region.</p>
            </div>
            <div className="bg-[#9bd2d9] p-6 rounded-lg">
              <div className="w-16 h-16 bg-[#0e809b] rounded-full mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">A stronger social fabric</h3>
              <p>The connections forged through Mindtrust's programs strengthen the social fabric of the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-[#9bd2d9] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <iframe 
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/MoSbnmDZjy8?si=YS7UmYpJxspLyLD7" 
              title="Mindtrust Testimonial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col justify-center">
            <blockquote className="text-lg mb-4">
              "The Mindtrust program is truly an eye-opening experience that has allowed me to discover the true essence of leadership. It has equipped me with a diversity of life skills and problem-solving skills; and has helped me gain more confidence. Through this program, I have met and engaged with distinctive individuals in a very friendly environment. The program is a valuable opportunity for personal development and networking for aspiring future leaders."
            </blockquote>
            <cite className="text-sm">— Alumni</cite>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">What we do</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Build leadership skills</h3>
              <p className="text-sm text-gray-600">
                Our Mentorship Program connects recent alumni with experienced Mindtrust leaders who provide personalized guidance and support. This program is a cornerstone for leadership growth, offering both mentors and mentees invaluable opportunities for learning and connection.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Guide young leaders</h3>
              <p className="text-sm text-gray-600">
                Our Mentorship Program connects recent alumni with experienced Mindtrust leaders who provide personalized guidance and support. This program is a cornerstone for leadership growth, offering both mentors and mentees invaluable opportunities for learning and connection.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Propel careers forward</h3>
              <p className="text-sm text-gray-600">
                The Career Planning Program prepares Mindtrust alumni for their next career step by connecting them with employers across the region. It includes career education sessions and targeted career fairs, providing participants with the insights and opportunities needed to advance their careers.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Foster connections</h3>
              <p className="text-sm text-gray-600">
                Our networking events, including the Mindtrust Meetup, are designed to bring together alumni, community leaders, and business professionals. These events facilitate meaningful connections, collaboration, and the exchange of ideas, all within a supportive environment.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link href="/programs" className="btn-primary">
              Learn about our programs
            </Link>
          </div>
        </div>
      </section>

      <InvestInYouth />

      {/* Partners and Funders Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Partners and Funders</h2>
          
          <div className="space-y-12">
            {/* Funders */}
            <div>
              <h3 className="text-xl mb-6">Funders</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/funders/canada-logo.png" 
                    alt="Government of Canada Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/funders/ottawa-community-foundation.png" 
                    alt="Ottawa Community Foundation Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/funders/city-of-ottawa.jpg" 
                    alt="City of Ottawa Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/funders/innoweave.webp" 
                    alt="Innoweave Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/funders/mcconnell-foundation.png" 
                    alt="McConnell Foundation Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Annual sponsors */}
            <div>
              <h3 className="text-xl mb-6">Annual sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/sponsors/invest-ottawa.png" 
                    alt="Invest Ottawa | Investir Ottawa Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/sponsors/member365.png" 
                    alt="Member365 Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Community partners */}
            <div>
              <h3 className="text-xl mb-6">Community partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/community-partners/business-sherpa-group.png" 
                    alt="Business Sherpa Group Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/community-partners/boyden-logo.png" 
                    alt="Boyden Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/community-partners/mdk-business-law.png" 
                    alt="MDK Business Law Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/community-partners/ross-living-live.png" 
                    alt="Ross Living Live Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/community-partners/tech-insights.webp" 
                    alt="Tech Insights Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Program partners */}
            <div>
              <h3 className="text-xl mb-6">Program partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/program-partners/algonquin-college.png" 
                    alt="Algonquin College Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/program-partners/uottawa.png" 
                    alt="University of Ottawa Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/program-partners/carleton-university-sprott-school-of-business.jpg" 
                    alt="Carleton University Sprott School of Business Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/program-partners/oak-computing.png" 
                    alt="Oak Computing Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="aspect-[4/3] bg-white rounded-lg p-4 flex items-center justify-center">
                  <img 
                    src="/program-partners/telfer-school-of-management.png" 
                    alt="Telfer School of Management Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StayConnected />
    </>
  );
}
