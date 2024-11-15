import Image from "next/image";
import InvestInYouth from '@/components/InvestInYouth';
import StayConnected from '@/components/StayConnected';
import LearnMore from '@/components/LearnMore';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Developing the next generation of leaders
          </h1>
          <p className="text-xl mb-6">
            Empowering youth, strengthening communities
          </p>
          <a
            href="#learn-more"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full"
          >
            Learn more about us
          </a>
        </div>
      </section>

      {/* Developing Young Leaders Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Developing young leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Develop leadership skills</h3>
              <p>Build leadership skills like effective communication, conflict resolution, and strategic decision-making.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Gain confidence</h3>
              <p>Acquire a heightened sense of self-awareness and confidence in your ability to lead and inspire others.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
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
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Enhanced civic engagement</h3>
              <p>Our alumni are more likely to engage in civic activities, contribute to local governance, and take on leadership roles within their communities.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Increased prosperity</h3>
              <p>Our young leaders are equipped with the skills they need to succeed, and contribute to the economic vitality of the region.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-2">A stronger social fabric</h3>
              <p>The connections forged through Mindtrust's programs strengthen the social fabric of the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative aspect-video bg-white rounded-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            </div>
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
            <a href="#programs" className="btn-primary">
              Learn about our programs
            </a>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={`funder-${i}`} className="aspect-[4/3] bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>

            {/* Annual sponsors */}
            <div>
              <h3 className="text-xl mb-6">Annual sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={`sponsor-${i}`} className="aspect-[4/3] bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>

            {/* Community partners */}
            <div>
              <h3 className="text-xl mb-6">Community partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={`community-${i}`} className="aspect-[4/3] bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>

            {/* Program partners */}
            <div>
              <h3 className="text-xl mb-6">Program partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={`program-${i}`} className="aspect-[4/3] bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StayConnected />
    </>
  );
}
