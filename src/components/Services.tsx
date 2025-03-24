import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'SDK Development',
      description: 'We build robust SDKs that simplify complex APIs and provide a consistent developer experience across platforms.',
      icon: (
        <svg className="w-12 h-12 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9L11 12L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 9L13 12L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: 'SDK Maintenance',
      description: 'We maintain and improve SDKs to ensure they remain compatible with the latest platform updates and API changes.',
      icon: (
        <svg className="w-12 h-12 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7 6.3C14.5168 6.11691 14.2659 6.01408 14.0007 6.01408C13.7355 6.01408 13.4846 6.11691 13.3014 6.3L6.7 12.9C6.60442 12.9949 6.52888 13.1072 6.47664 13.2302C6.4244 13.3532 6.39649 13.4848 6.39454 13.618C6.39258 13.7513 6.41663 13.8836 6.46539 14.0082C6.51415 14.1327 6.58649 14.2471 6.68 14.3441C6.77351 14.441 6.88452 14.5174 7.00727 14.5706C7.13002 14.6239 7.26227 14.6528 7.39646 14.6558C7.53065 14.6589 7.66411 14.6361 7.7891 14.5887C7.91408 14.5413 8.02868 14.4704 8.12628 14.3791L14.7 7.7C14.886 7.51958 14.9899 7.26878 14.9899 7.0095C14.9899 6.75022 14.886 6.49942 14.7 6.32V6.3Z" fill="currentColor"/>
          <path d="M18.8 3.9C16.58 1.68 13.12 1.68 10.9 3.9L9.2 5.6C9.08674 5.71302 9.0191 5.86897 9.0191 6.0315C9.0191 6.19403 9.08674 6.34998 9.2 6.463C9.31302 6.57626 9.46897 6.6439 9.6315 6.6439C9.79403 6.6439 9.94998 6.57626 10.063 6.463L11.763 4.763C13.4 3.126 16.2 3.126 17.836 4.763C19.473 6.4 19.473 9.2 17.836 10.837L16.136 12.537C16.0794 12.5955 16.0341 12.6644 16.0025 12.7401C15.9709 12.8157 15.9536 12.8968 15.9514 12.9792C15.9493 13.0616 15.9622 13.1436 15.9897 13.2208C16.0171 13.298 16.0586 13.3692 16.112 13.4305C16.1654 13.4919 16.2297 13.5425 16.302 13.5795C16.3742 13.6165 16.4532 13.6392 16.5344 13.6463C16.6156 13.6534 16.6976 13.6449 16.7754 13.6212C16.8532 13.5975 16.9253 13.559 16.988 13.5077L18.688 11.8077C19.7739 10.7205 20.3874 9.2337 20.3874 7.6846C20.3874 6.1355 19.7739 4.64871 18.688 3.56153C18.6814 3.55487 18.6775 3.54493 18.6712 3.538C18.665 3.53133 18.655 3.5274 18.6484 3.52047L18.8 3.9Z" fill="currentColor"/>
          <path d="M14.9 17.5C14.7837 17.3872 14.6228 17.323 14.4545 17.3233C14.2862 17.3235 14.1256 17.3883 14.0098 17.5016C13.8939 17.6148 13.8259 17.774 13.8224 17.9422C13.8189 18.1104 13.8802 18.2727 14.992 18.392L13.292 20.092C11.654 21.73 8.85402 21.73 7.21802 20.092C5.58102 18.455 5.58102 15.656 7.21802 14.019L8.91802 12.319C8.97654 12.2606 9.02189 12.1917 9.05346 12.116C9.08504 12.0403 9.10233 11.9591 9.10435 11.8767C9.10637 11.7943 9.09309 11.7122 9.06532 11.635C9.03756 11.5578 8.99584 11.4865 8.94218 11.4252C8.88852 11.3639 8.82402 11.3133 8.75156 11.2762C8.6791 11.2391 8.60003 11.2164 8.51869 11.2093C8.43736 11.2022 8.3553 11.2107 8.27731 11.2344C8.19933 11.2581 8.12717 11.2963 8.06402 11.3477L6.36402 13.0477C5.82171 13.5896 5.39088 14.2344 5.09901 14.9459C4.80715 15.6575 4.65958 16.4227 4.66402 17.195C4.66846 17.9673 4.82481 18.7305 5.12484 19.4383C5.42486 20.1461 5.86313 20.7856 6.41226 21.3205C6.9614 21.8553 7.61054 22.2767 8.32249 22.5588C9.03445 22.8409 9.79594 22.9777 10.5665 22.9623C11.337 22.9469 12.0935 22.7796 12.7929 22.4694C13.4924 22.1591 14.1221 21.713 14.65 21.156L16.35 19.456C16.4632 19.3397 16.5273 19.1788 16.5271 19.0105C16.5268 18.8422 16.4621 18.6816 16.3488 18.5658C16.2356 18.4499 16.0764 18.3819 15.9082 18.3784C15.74 18.3749 15.5777 18.4362 15.458 18.548L14.9 17.5Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Firebase Experts',
      description: 'We have deep expertise in Firebase and can help you leverage its full potential for your mobile and web applications.',
      icon: (
        <svg className="w-12 h-12 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 16.5L12 22L19.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.5 7.5L12 2L4.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.5 7.5L12 13L4.5 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19.5 16.5L12 11L4.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      title: 'App Development',
      description: 'We build cross-platform mobile applications using Flutter and React Native that deliver native-like performance and experience.',
      icon: (
        <svg className="w-12 h-12 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-94">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-32 md:text-40 font-title font-bold text-gray-8 mb-4">
            Our services
          </h2>
          <p className="text-18 text-gray-40 max-w-2xl mx-auto">
            We help companies build better apps with cutting-edge technologies and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-24 font-title font-bold text-gray-8 mb-3">
                {service.title}
              </h3>
              <p className="text-16 text-gray-40 mb-6">
                {service.description}
              </p>
              <Link 
                href="/services" 
                className="text-primary-1 font-medium hover:text-secondary-3 inline-flex items-center transition-colors duration-300"
              >
                Learn more
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary inline-block">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
