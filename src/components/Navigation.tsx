'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/mindtrust-leadership-logo.png"
            alt="Mindtrust Leadership Logo"
            width={250}
            height={100}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Hamburger menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/who-we-are" className="hover:text-[#0e809b] font-bold">
            Who we are
          </Link>
          <Link href="/what-we-do" className="hover:text-[#0e809b] font-bold">
            What we do
          </Link>
          <Link href="/how-you-can-help" className="hover:text-[#0e809b] font-bold">
            How you can help
          </Link>
          <Link href="/contact-us" className="hover:text-[#0e809b] font-bold">
            Contact us
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden mt-4 space-y-4 pb-4`}
      >
        <Link
          href="/who-we-are"
          className="block hover:text-[#0e809b] font-bold py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Who we are
        </Link>
        <Link
          href="/what-we-do"
          className="block hover:text-[#0e809b] font-bold py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          What we do
        </Link>
        <Link
          href="/how-you-can-help"
          className="block hover:text-[#0e809b] font-bold py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          How you can help
        </Link>
        <Link
          href="/contact-us"
          className="block hover:text-[#0e809b] font-bold py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact us
        </Link>
      </div>
    </nav>
  );
} 