import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/invertase-logo.svg" 
            alt="Invertase" 
            width={150} 
            height={32} 
            className="text-gray-8"
          />
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/services" className="text-gray-20 hover:text-primary-1 font-medium transition-colors">
            Services
          </Link>
          <Link href="/open-source" className="text-gray-20 hover:text-primary-1 font-medium transition-colors">
            Open Source
          </Link>
          <Link href="/careers" className="text-gray-20 hover:text-primary-1 font-medium transition-colors">
            Careers
          </Link>
          <Link href="/blog" className="text-gray-20 hover:text-primary-1 font-medium transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="btn-primary">
            Contact us
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-md py-4 px-6 z-50">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/services" 
              className="text-gray-20 hover:text-primary-1 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/open-source" 
              className="text-gray-20 hover:text-primary-1 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Open Source
            </Link>
            <Link 
              href="/careers" 
              className="text-gray-20 hover:text-primary-1 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-20 hover:text-primary-1 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
