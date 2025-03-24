export default function ContactHero() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-40 md:text-56 font-title font-bold text-gray-8 leading-tight mb-6">
            Contact us
          </h1>
          <p className="text-18 md:text-20 text-gray-40 mb-8">
            We're here to answer your questions about our Firebase and app development services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 border border-gray-94 rounded-lg">
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-18 font-title font-bold text-gray-8 mb-2">
                Reliable SDKs
              </h3>
              <p className="text-gray-40">
                Empowering developers with reliable SDKs for Firebase.
              </p>
            </div>

            <div className="p-6 border border-gray-94 rounded-lg">
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 12H12V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-18 font-title font-bold text-gray-8 mb-2">
                SDK Maintenance
              </h3>
              <p className="text-gray-40">
                Dedicated to maintaining and updating high-quality SDKs.
              </p>
            </div>

            <div className="p-6 border border-gray-94 rounded-lg">
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-18 font-title font-bold text-gray-8 mb-2">
                Unified Codebase
              </h3>
              <p className="text-gray-40">
                Accelerating development with a unified codebase approach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
