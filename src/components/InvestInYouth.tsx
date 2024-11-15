import Link from 'next/link';

interface InvestInYouthProps {
  className?: string;
}

export default function InvestInYouth({ className = '' }: InvestInYouthProps) {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Invest in local youth leaders</h2>
          <p className="text-gray-600 mb-8">
            Empower young people from diverse backgrounds to become the leaders our communities need. Your donation to 
            Mindtrust Leadership is more than just a gift—it's an investment in the future of our community.
          </p>
          <Link 
            href="/donate"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Donate now
          </Link>
        </div>
      </div>
    </section>
  );
} 