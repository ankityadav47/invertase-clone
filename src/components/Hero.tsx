import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-40 md:text-56 font-title font-bold text-gray-8 leading-tight mb-6">
              Firebase & App Development Experts
            </h1>
            <p className="text-18 md:text-20 text-gray-40 mb-8 max-w-xl">
              We help companies build better apps with
              Flutter, React Native and web technologies.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/contact" className="btn-primary text-center">
                Get in touch
              </Link>
              <Link href="/services" className="btn-outline text-center">
                Explore our services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-64 md:h-96 relative overflow-hidden rounded-lg bg-gray-94">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-1/20 to-transparent">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary-1 opacity-75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 8L16 12L10 16V8Z" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-1 rounded-full flex items-center justify-center transform rotate-12">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 8L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-94">
          <h2 className="text-20 md:text-24 font-medium text-gray-40 text-center mb-12">
            Trusted by companies worldwide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-24 h-12 bg-gray-94 rounded flex items-center justify-center">
                <div className="w-16 h-6 bg-gray-80 rounded opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
