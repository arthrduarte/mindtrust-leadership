import Link from 'next/link';

interface SponsorProgramProps {
  className?: string;
}

export default function SponsorProgram({ className = '' }: SponsorProgramProps) {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Sponsor this program</h2>
          <p className="text-gray-600 mb-8">
            Support the next generation of leaders by this program. Your sponsorship will empower young leaders to make a 
            lasting impact in their communities, driving growth, innovation, and prosperity. Join us in shaping a brighter future.
          </p>
          <Link 
            href="/sponsorship"
            className="text-blue-600 hover:text-blue-700 hover:underline"
          >
            Contact us to learn more about sponsorship opportunities.
          </Link>
        </div>
      </div>
    </section>
  );
} 