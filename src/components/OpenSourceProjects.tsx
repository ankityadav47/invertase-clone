import Link from 'next/link';

export default function OpenSourceProjects() {
  const categories = [
    {
      id: 'firebase',
      name: 'Firebase',
      color: 'bg-yellow-500',
      projects: [
        {
          id: 1,
          name: 'FlutterFire',
          description: 'The official Firebase plugins for Flutter, supporting various Firebase services.',
          stars: '5.2k',
          url: 'https://github.com/firebase/flutterfire',
        },
        {
          id: 2,
          name: 'React Native Firebase',
          description: 'A well-tested feature-rich modular Firebase implementation for React Native.',
          stars: '10.6k',
          url: 'https://github.com/invertase/react-native-firebase',
        },
      ],
    },
    {
      id: 'flutter',
      name: 'Flutter',
      color: 'bg-blue-500',
      projects: [
        {
          id: 3,
          name: 'Notifee',
          description: 'A feature-rich local notifications library for React Native.',
          stars: '2.3k',
          url: 'https://github.com/invertase/notifee',
        },
        {
          id: 4,
          name: 'Melos',
          description: 'A tool for managing Dart/Flutter projects with multiple packages.',
          stars: '1.1k',
          url: 'https://github.com/invertase/melos',
        },
      ],
    },
    {
      id: 'tools',
      name: 'Development Tools',
      color: 'bg-green-500',
      projects: [
        {
          id: 5,
          name: 'Flutterfire CLI',
          description: 'A CLI to help with FlutterFire app configuration.',
          stars: '526',
          url: 'https://github.com/firebase/flutterfire_cli',
        },
        {
          id: 6,
          name: 'Firebase JS SDK',
          description: 'Firebase Javascript SDK with added features.',
          stars: '5.8k',
          url: 'https://github.com/firebase/firebase-js-sdk',
        },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-94">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-32 md:text-40 font-title font-bold text-gray-8 mb-4">
            Our Open Source Projects
          </h2>
          <p className="text-18 text-gray-40 max-w-2xl mx-auto">
            We're dedicated to creating and maintaining high-quality open source libraries
            that help developers build better applications.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category.id} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-8">
                <div className={`w-4 h-4 rounded-full ${category.color} mr-3`}></div>
                <h3 className="text-24 font-title font-bold text-gray-8">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.projects.map((project) => (
                  <div key={project.id} className="border border-gray-94 rounded-lg p-6 hover:border-primary-1 transition-colors duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-20 font-title font-bold text-gray-8">
                        {project.name}
                      </h4>
                      <div className="flex items-center text-gray-40">
                        <svg className="w-5 h-5 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                        </svg>
                        <span>{project.stars}</span>
                      </div>
                    </div>
                    <p className="text-16 text-gray-40 mb-6">
                      {project.description}
                    </p>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-1 font-medium hover:text-secondary-3 inline-flex items-center transition-colors duration-300"
                    >
                      View on GitHub
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
          <div className="text-center">
            <h3 className="text-24 font-title font-bold text-gray-8 mb-4">
              Why We Love Open Source
            </h3>
            <p className="text-18 text-gray-40 mb-8 max-w-2xl mx-auto">
              Our team is passionate about open source and its benefits for the developer community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-94 rounded-lg">
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8H19C20.1046 8 21 8.89543 21 10V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10C3 8.89543 3.89543 8 5 8H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 5L12 2L9 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-18 font-title font-bold text-gray-8 mb-2">
                Open Communication
              </h4>
              <p className="text-gray-40">
                We believe in transparent communication and collaboration with the developer community.
              </p>
            </div>

            <div className="p-6 border border-gray-94 rounded-lg">
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-18 font-title font-bold text-gray-8 mb-2">
                Community First
              </h4>
              <p className="text-gray-40">
                We foster a welcoming community where developers can learn, share, and grow together.
              </p>
            </div>

            <div className="p-6 border border-gray-94 rounded-lg">
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="text-18 font-title font-bold text-gray-8 mb-2">
                Continuous Learning
              </h4>
              <p className="text-gray-40">
                We're always learning and improving our libraries based on feedback and emerging best practices.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/contact" className="btn-primary inline-block">
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
