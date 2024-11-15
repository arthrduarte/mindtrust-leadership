import Link from "next/link";
import SponsorProgram from "@/components/SponsorProgram";
import StayConnected from "@/components/StayConnected";

export default function YLPProgram() {
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
            <span>Youth Leadership Program (YLP)</span>
          </div>
          <h1 className="text-4xl font-bold">
            Youth Leadership Program (YLP)
          </h1>
        </div>
      </div>

      {/* Program Description Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-8">
              The Mindtrust Youth Leadership Program (YLP) program is intended for young, impact-driven, 
              and demonstrated leaders with an interest in the future of leadership.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Throughout the program, you will expand your leadership skills and be encouraged to 
              consider the impact that you can have as a leader throughout your own leadership journey. 
              The program will allow you to engage directly with other youth, from a variety of 
              backgrounds, that have an interest in developing their leadership skills, and to extend your 
              network through discussions with community leaders acting as mentors for the program 
              (Mindtrust Leaders).
            </p>
          </div>
        </div>
      </section>

      {/* What Participants Learn Section */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What participants learn</h2>
          <p className="text-gray-600 mb-12">
            The program consists of six modules, which cover key concepts related to leadership in today's innovative world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Leadership overview */}
            <div className="flex bg-white rounded-lg border border-gray-200 h-[16rem]">
              <div className="w-1/5 bg-gray-200"></div>
              <div className="w-4/5 p-6">
                <h3 className="text-xl font-bold mb-4">Leadership overview</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>What is Leadership About?</li>
                  <li>Leading from Within</li>
                </ul>
              </div>
            </div>

            {/* The leader in you */}
            <div className="flex bg-white rounded-lg border border-gray-200 h-[16rem]">
              <div className="w-1/5 bg-gray-200"></div>
              <div className="w-4/5 p-6">
                <h3 className="text-xl font-bold mb-4">The leader in you</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>What Makes a Great Leader?</li>
                  <li>Your Personal Core Values</li>
                  <li>Mindsets of a Leader</li>
                </ul>
              </div>
            </div>

            {/* Leadership & personal style */}
            <div className="flex bg-white rounded-lg border border-gray-200 h-[16rem]">
              <div className="w-1/5 bg-gray-200"></div>
              <div className="w-4/5 p-6">
                <h3 className="text-xl font-bold mb-4">Leadership & personal style</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Assessment of Your Social Style</li>
                  <li>Working & Communicating with Others</li>
                  <li>Managing Conflicts</li>
                </ul>
              </div>
            </div>

            {/* Decision-making frameworks */}
            <div className="flex bg-white rounded-lg border border-gray-200 h-[16rem]">
              <div className="w-1/5 bg-gray-200"></div>
              <div className="w-4/5 p-6">
                <h3 className="text-xl font-bold mb-4">Decision-making frameworks</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Setting Objectives – Short-term vs. Long-term</li>
                  <li>Strategic Planning</li>
                  <li>Frameworks & Models for Effective Decision-Making</li>
                  <li>Fundamentals of Equity, Diversity, & Inclusion</li>
                </ul>
              </div>
            </div>

            {/* Measuring outcomes & impact */}
            <div className="flex bg-white rounded-lg border border-gray-200 h-[16rem]">
              <div className="w-1/5 bg-gray-200"></div>
              <div className="w-4/5 p-6">
                <h3 className="text-xl font-bold mb-4">Measuring outcomes & impact</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Identifying the Problem & Context</li>
                  <li>Evaluating Performance – Personal & Team</li>
                  <li>Making an Impact as a Young Leader</li>
                </ul>
              </div>
            </div>

            {/* Personal leadership statements */}
            <div className="flex bg-white rounded-lg border border-gray-200 h-[16rem]">
              <div className="w-1/5 bg-gray-200"></div>
              <div className="w-4/5 p-6">
                <h3 className="text-xl font-bold mb-4">Personal leadership statements</h3>
                <ul className="space-y-2 text-gray-600 list-disc pl-4">
                  <li>Personal Leadership Statements & Graduation</li>
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
                  "I got to do a lot of self-introspection during these sessions that definitely helped 
                  me learn more about what kind of a leader I want to be."
                </p>
                <footer className="font-bold">— Nishima Malviya</footer>
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
                  "YLP allowed me to meet like-minded individuals who all are eager to further 
                  develop their sense of leadership. A great sense of community after the first 
                  session!"
                </p>
                <footer className="font-bold">— Jean-Simon Lavoie-Albert</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Cohorts Section */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Upcoming Cohorts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* YLP-15 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-2xl font-bold mb-6">YLP-15</h3>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dates:</h4>
                    <p className="text-gray-600">August 28th, August 29th, August 30th (12:30pm – 4:30pm)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Venue:</h4>
                    <p className="text-gray-600">The program will be held fully in-person at Impact Hub Ottawa.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* YLP-16 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-2xl font-bold mb-6">YLP-16</h3>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tentative date:</h4>
                    <p className="text-gray-600">Tuesdays, from September 17th to October 29th (5:30pm – 7:30pm)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Venue:</h4>
                    <p className="text-gray-600">TBD</p>
                  </div>
                </div>
              </div>
            </div>

            {/* YLP-17 */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-2xl font-bold mb-6">YLP-17</h3>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Tentative date:</h4>
                    <p className="text-gray-600">Wednesdays, from October 30th to December 4th (5:30pm – 7:30pm)</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="shrink-0">
                    <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Venue:</h4>
                    <p className="text-gray-600">TBD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost and Eligibility Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Cost and eligibility */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Cost and eligibility</h2>
              <div className="space-y-6">
                <p className="text-gray-600">
                  The normal fee to attend is $375 per person. However, the fee will be waived for 
                  residents of Ottawa due to the generous support of our community partners. 
                  Transportation to in-person sessions will not be covered.
                </p>
                <p className="text-gray-600">
                  There are 15 spots available to young leaders between 16 and 29 years of age. 
                  Preference will be given to those who are from disadvantaged/racialized 
                  communities.
                </p>
              </div>
            </div>

            {/* Submit an application */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Submit an application</h2>
              <p className="text-gray-600 mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget 
                imperdiet arcu. Aliquam consequat est in tortor mollis, non facilisis magna rhoncus.
              </p>
              <Link 
                href="#"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Program */}
      <SponsorProgram />

      {/* Stay Connected */}
      <StayConnected className="bg-white"/>
    </>
  );
} 