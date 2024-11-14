import Link from 'next/link';

interface LearnMoreProps {
  className?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function LearnMore({ 
  className = '',
  title = 'Learn more about Mindtrust',
  description = "Explore how Mindtrust is dedicated to empowering the next generation of leaders. Learn about our history, values, and the impact we're making in communities through our innovative programs.",
  buttonText = 'Donate now',
  buttonHref = '/donate'
}: LearnMoreProps) {
  return (
    <section className={`py-16 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-8">
            {description}
          </p>
          <Link 
            href={buttonHref}
            className="inline-block px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
} 