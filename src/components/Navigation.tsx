import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <Link href="/" className="text-xl font-bold">
        Mindtrust
      </Link>
      <div className="flex gap-6">
        <Link href="/who-we-are" className="hover:text-blue-600">
          Who we are
        </Link>
        <Link href="/what-we-do" className="hover:text-blue-600">
          What we do
        </Link>
        <Link href="/how-you-can-help" className="hover:text-blue-600">
          How you can help
        </Link>
        <Link href="/contact-us" className="hover:text-blue-600">
          Contact us
        </Link>
      </div>
    </nav>
  );
} 