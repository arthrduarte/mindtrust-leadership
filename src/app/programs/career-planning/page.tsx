import Link from "next/link";
import SponsorProgram from '@/components/SponsorProgram';
import InvestInYouth from '@/components/InvestInYouth';
import StayConnected from '@/components/StayConnected';
import LearnMore from '@/components/LearnMore';

export default function CareerPlanning() {
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
            <span>Career development</span>
          </div>
          <h1 className="text-4xl font-bold">Career planning</h1>
        </div>
      </div>

      {/* Program Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-8">
              The Mindtrust Career Development Program is designed to equip our alumni with the tools 
              and connections they need to advance in their careers. By offering a combination of career 
              education sessions and small, targeted career fairs, we prepare participants to successfully 
              navigate the job market and connect with leading employers from across the region.
            </p>
            <Link 
              href="#"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit your application
            </Link>
          </div>
        </div>
      </section>

      {/* What the Program Entails Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">  
          <h2 className="text-3xl font-bold mb-12">What the program entails</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Career Education Sessions */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Career Education Sessions</h3>
              <p className="text-gray-600 mb-8">
                Our career education sessions are designed to prepare participants for 
                upcoming career fairs and the job market in general. These one-hour sessions, 
                provide valuable insights into the hiring process and offer practical advice on 
                how to stand out to potential employers.
              </p>
              <ul className="space-y-4">
                {[
                  "Learn what HR professionals and hiring managers are really looking for in candidates.",
                  "Gain tips on how to present yourself effectively at the career fair and during interviews.",
                  "Discover how to differentiate yourself from other applicants and make a lasting impression."
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

            {/* Small Targeted Career Fairs */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Small Targeted Career Fairs</h3>
              <p className="text-gray-600 mb-8">
                Our career fairs are intimate and focused, allowing participants to connect 
                directly with employers who are actively looking for talent. These events offer a 
                unique opportunity to explore career opportunities, network with industry 
                professionals, and secure job placements.
              </p>
              <ul className="space-y-4">
                {[
                  "Engage with leading employers in the region who are specifically seeking new hires.",
                  "Build valuable connections with industry professionals and potential employers.",
                  "Explore job openings that align with your skills and aspirations."
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
          </div>
        </div>
      </section>


    </>
  );
} 