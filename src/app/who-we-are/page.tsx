import InvestInYouth from "@/components/InvestInYouth";
import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <a href="/" className="hover:text-blue-600">
              Home
            </a>
            <span>›</span>
            <span>Who we are</span>
          </div>
          <h1 className="text-4xl font-bold">Our story</h1>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg mb-8">
            Mindtrust empowers the next generation of leaders by providing
            innovative and inclusive leadership programs. Since 2001, we've
            fostered a dynamic ecosystem that strengthens communities and drives
            positive change. Join us in building a brighter future by supporting
            the leaders of tomorrow.
          </p>

          <p className="text-lg mb-12">
            seeks to create a lasting impact on both the youth we serve and the
            broader community. By empowering young leaders, we aim to cultivate
            a culture of leadership that is inclusive, innovative, and dedicated
            to making a difference. Our programs are designed to create ripple
            effects—helping participants grow into leaders who then contribute
            to the well-being and vitality of their communities.
          </p>

          {/* Mission, Vision, Purpose Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>
              <h2 className="text-xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Mindtrust helps youth leaders grow by creating opportunities to
                learn together, share experiences and build life-long
                relationships
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>
              <h2 className="text-xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                Fostering youth leadership excellence to enable individual and
                community growth.
              </p>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>
              <h2 className="text-xl font-bold mb-4">Our Purpose</h2>
              <p className="text-gray-600">
                To build a sustainable ecosystem of leadership within the
                National Capital Region. We focus on equipping young people with
                the practical skills, mentoring, and networks necessary to
                navigate their leadership journeys with confidence and
                integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our impact section */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Our impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-2">1,100+ Alumni</h3>
              <p className="text-gray-600">
                Since 2005, over 1,100 participants have completed our programs,
                many of whom are now leaders in business, government, and
                community organizations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">100+ leaders engaged</h3>
              <p className="text-gray-600">
                Our network includes 100+ leaders who actively contribute their
                expertise to mentor and develop young leaders.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Lifelong connections</h3>
              <p className="text-gray-600">
                Our participants build lasting relationships with peers,
                mentors, and leaders, creating powerful networks that support
                their growth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Economic Growth</h3>
              <p className="text-gray-600">
                Many graduates go on to launch businesses, drive innovation, and
                contribute to economic growth, creating lasting prosperity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Stronger Social Fabric</h3>
              <p className="text-gray-600">
                The connections formed through our programs strengthen the
                community's social fabric, fostering unity and a shared purpose.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Civic engagement</h3>
              <p className="text-gray-600">
                Our alumni are more likely to engage in civic activities,
                contribute to local governance, and assume leadership roles in
                their communities.
              </p>
            </div>
          </div>

          {/* Additional Content with Image */}
          <div className="mt-12">
            <div className="grid md:grid-cols-2 bg-white rounded-lg">
              <div className="p-16">
                <h3 className="text-xl font-bold mb-4">
                  Empowering racialized and disadvantaged youth
                </h3>
                <p className="text-gray-600 mb-8">
                  Our Youth Leadership Program (YLP) prioritizes youth from
                  racialized and disadvantaged communities, addressing the
                  urgent need for diverse, future-focused leadership. Delivered
                  in partnership with local organizations, YLP has run fourteen
                  successful sessions since 2020, equipping young leaders with
                  the skills and confidence to effect change in their
                  communities.
                </p>
              </div>
              <div className="bg-white rounded-lg">
                <div className="w-full h-full bg-gray-300"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-100 p-8 rounded-lg">
              <blockquote className="text-gray-600 italic mb-4">
                “I really enjoyed my time at YLP. The discussions with the other
                participants was refreshing and synergistic. I gained tangible
                skills and created a foundation for change in my community.”
              </blockquote>
              <p className="font-bold">— Haley Aldred</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <blockquote className="text-gray-600 italic mb-4">
                “Being part of Mindtrust YLP made me aware of the leader that we
                can become and mostly help us realize that leadership comes from
                the human being not the work title.”
              </blockquote>
              <p className="font-bold">— Léna Kantorska</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-gray-200 rounded-lg"></div>
            
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our people</h2>
              <p className="text-gray-600 mb-8">
                At the heart of Mindtrust is a team of passionate mentors, leadership experts, 
                and community leaders. Their diverse experiences and unwavering 
                commitment to youth development ensure our programs remain impactful and 
                transformative. Our people are our greatest asset, driving the success and 
                sustainability of our mission.
              </p>
              <Link 
                href="/our-people" 
                className="btn-primary inline-block"
              >
                Meet our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto py-16 px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our milestones</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600">
                    Mindtrust was founded in 2001 as a membership organization focused on 
                    developing leadership capacity in the National Capital Region. Recognizing the 
                    need for a more structured approach to leadership development, we launched 
                    the Mindtrust Leadership Development Program (MLDP) in 2005. This program 
                    was created to help top students reflect on their leadership journey, learn from 
                    others, and set their path forward.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-600">
                    Since its inception, MLDP has seen over 1,100 students graduate, with 
                    participants coming from Carleton University, the University of Ottawa, and 
                    Algonquin College. The program has grown into a cornerstone of youth 
                    leadership development in the region.
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-600">
                    In 2016, Mindtrust was incorporated as a not-for-profit corporation, a move 
                    aimed at ensuring our long-term sustainability. We were granted charitable 
                    status in 2020, further solidifying our commitment to fostering youth 
                    leadership.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </section>

      <InvestInYouth />

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Partners and Funders</h2>
          
          {/* Funders */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Funders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={`funder-${i}`} className="aspect-[3/2] bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Annual sponsors */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Annual sponsors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={`sponsor-${i}`} className="aspect-[3/2] bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Community partners */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Community partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={`community-${i}`} className="aspect-[3/2] bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>

          {/* Program partners */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Program partners</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={`program-${i}`} className="aspect-[3/2] bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
