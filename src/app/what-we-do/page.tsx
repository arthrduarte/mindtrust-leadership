import Link from "next/link";
import Image from "next/image";
import InvestInYouth from "@/components/InvestInYouth";
import LearnMore from "@/components/LearnMore";

export default function WhatWeDo() {
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
            <span>What we do</span>
          </div>
          <h1 className="text-4xl font-bold">Our leadership programs</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600">
              Mindtrust is dedicated to developing the next generation of leaders who will shape the 
              future of the National Capital Region. Our programs are designed to educate and empower. 
              They equip youth with the skills, confidence, and networks needed to make a meaningful 
              difference in their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid Section */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* MLDP Program */}
            <div className="flex flex-col h-full p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold mb-2">
                  Mindtrust Leadership Development Program (MLDP)
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Our flagship program, delivered in partnership with post-secondary institutions since 2005, 
                  combines leadership theory with practical insights from community leaders. MLDP 
                  features seven interactive sessions that equip participants with the skills and knowledge to 
                  lead effectively.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  href="/programs/mldp" 
                  className="text-blue-600 text-sm hover:underline"
                >
                  Learn more about MLDP
                </Link>
              </div>
            </div>

            {/* YLP Program */}
            <div className="flex flex-col h-full p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold mb-2">
                  Youth Leadership Program (YLP)
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  YLP is tailored for young, impact-driven individuals with a passion for leadership. 
                  Through engaging sessions and direct interaction with community leaders and peers, 
                  this program fosters leadership skills and encourages participants to make a positive 
                  impact.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  href="/programs/ylp" 
                  className="text-blue-600 text-sm hover:underline"
                >
                  Learn more about YLP
                </Link>
              </div>
            </div>

            {/* Mentorship Program */}
            <div className="flex flex-col h-full p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold mb-2">
                  Mentorship program
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Our Mentorship Program connects recent alumni with experienced Mindtrust leaders 
                  who provide personalized guidance and support. This program is a cornerstone for 
                  leadership growth, offering both mentors and mentees invaluable opportunities for learning 
                  and connection.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  href="/programs/mentorship" 
                  className="text-blue-600 text-sm hover:underline"
                >
                  Explore opportunities
                </Link>
              </div>
            </div>

            {/* Career Planning Program */}
            <div className="flex flex-col h-full p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold mb-2">
                  Career planning program
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  The Career Planning Program prepares Mindtrust alumni for their next career steps by 
                  connecting them with employers across the region. It includes career education sessions 
                  and targeted career fairs, providing participants with the insights and 
                  opportunities needed to advance their careers.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  href="/programs/career-planning" 
                  className="text-blue-600 text-sm hover:underline"
                >
                  Find out more about career planning
                </Link>
              </div>
            </div>

            {/* Networking Events */}
            <div className="flex flex-col h-full p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
                <h2 className="text-xl font-bold mb-2">
                  Networking events
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Our networking events, including the Mindtrust Meetup, are designed to bring 
                  together alumni, community leaders, and business professionals. These events facilitate 
                  meaningful connections, collaboration, and the exchange of ideas, all within a supportive 
                  environment.
                </p>
              </div>
              <div className="mt-auto">
                <Link 
                  href="/events" 
                  className="text-blue-600 text-sm hover:underline"
                >
                  Discover upcoming events
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InvestInYouth/>
      
      <LearnMore/>
    </>
  );
} 