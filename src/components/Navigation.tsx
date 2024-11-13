import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4">
      <Link href="/" className="text-xl font-bold">
        Mindtrust
      </Link>
      <div className="flex gap-6">
        <Link 
          href="/who-we-are"
          className={`${isActive('/who-we-are') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
        >
          Who we are
        </Link>
        <Link 
          href="/what-we-do"
          className={`${isActive('/what-we-do') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
        >
          What we do
        </Link>
        <Link 
          href="/how-you-can-help"
          className={`${isActive('/how-you-can-help') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
        >
          How you can help
        </Link>
        <Link 
          href="/contact-us"
          className={`${isActive('/contact-us') ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600 transition-colors`}
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
} 