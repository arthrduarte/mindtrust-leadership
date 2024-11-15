import Link from 'next/link';
import StayConnected from '@/components/StayConnected';
import LearnMore from '@/components/LearnMore';

export default function HowYouCanHelp() {
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
            <span>How you can help</span>
          </div>
          <h1 className="text-4xl font-bold">Invest in local youth leaders</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-8">
              For over 20 years, we've successfully connected over 1,200 young people with leadership 
              experts and community leaders. Many of these graduates are now guiding the next 
              generation, creating a self-sustaining ecosystem of leadership and support. Your 
              contribution will help us continue this vital work.
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Fund Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Join our fund</h2>
            <p className="text-gray-600 mb-6">
              We are raising $100,000 to expand our youth leadership development 
              programs, with a special focus on supporting youth from disadvantaged and 
              racialized communities. Your donation to Mindtrust Leadership is more than 
              just a gift—it's an investment in the future of our community.
            </p>
            <Link 
              href="/donate" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Donate now
            </Link>
            <p className="text-sm text-gray-500 mt-6">
              Note: You can choose to direct your one-time donation to a specific program, ensuring 
              your contribution aligns with your values.
            </p>
          </div>
          <div className="bg-gray-200 w-full h-[300px]">
            {/* Placeholder for image - you can replace this with an actual image component */}
          </div>
        </div>
      </section>

      {/* Become a Sustaining Partner Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-200 w-full h-[300px]">
            {/* Placeholder for image - replace with actual image component */}
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Become a sustaining partner</h2>
            <p className="text-gray-600 mb-6">
              Join us in creating a self-sustaining ecosystem of leadership and support by 
              making ongoing contributions or sponsoring a program. Your continued 
              investment will ensure that even more young people have the opportunity to 
              grow into community leaders. Together, we can expand our impact and create 
              lasting change.
            </p>
            <Link 
              href="/contact" 
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      {/* Mentor the Next Generation Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Mentor the next generation</h2>
            <p className="text-gray-600 mb-6">
              Help shape the future by becoming a mentor with Mindtrust Leadership. By 
              sharing your experience and knowledge, you can guide young leaders on their 
              journey, making a lasting impact on both their lives and the community. 
              Mentorship is a powerful way to give back and be a part of our growing 
              leadership ecosystem.
            </p>
            <Link 
              href="/programs/mentorship" 
              className="text-blue-600 hover:underline font-medium"
            >
              Learn more
            </Link>
          </div>
          <div className="bg-gray-200 w-full h-[300px]">
            {/* Placeholder for image - replace with actual image component */}
          </div>
        </div>
      </section>

      <LearnMore className='bg-gray-100'/>
    </>
  );
}
