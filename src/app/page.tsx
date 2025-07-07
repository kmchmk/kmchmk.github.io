import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              CK
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Senior Software Engineer
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Passionate about building scalable software solutions with expertise in C++, Java, and Python. 
            Currently based in Chiang Mai, Thailand, working at Favorite Medium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="https://www.linkedin.com/in/kmchmk" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">About Me</h2>
          <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <p className="mb-6">
              I&apos;m a Senior Software Engineer with over 7 years of experience in the industry, 
              currently working at Favorite Medium in Chiang Mai, Thailand. My journey began 
              after graduating from the University of Moratuwa with a degree in Computer Science & Engineering.
            </p>
            <p className="mb-6">
              Throughout my career, I&apos;ve had the privilege of working on complex financial systems 
              at London Stock Exchange Group (LSEG), including projects for the Canadian NEO Exchange 
              and Indian Commodities And Derivatives Exchange (NCDEX).
            </p>
            <p>
              I&apos;m passionate about clean code, scalable architectures, and continuous learning. 
              When I&apos;m not coding, I enjoy exploring new technologies and building innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {/* Favorite Medium */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Senior Software Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">Favorite Medium</p>
                </div>
                <div className="text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                  <p>June 2021 - Present</p>
                  <p>Chiang Mai, Thailand</p>
                </div>
              </div>
            </div>

            {/* LSEG */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Senior Software Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">London Stock Exchange Group (LSEG)</p>
                </div>
                <div className="text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                  <p>April 2020 - June 2021</p>
                  <p>Malabe, Sri Lanka</p>
                </div>
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <p className="mb-2">Key Projects:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Canadian NEO Exchange (Aequitas Innovations)</li>
                  <li>Indian Commodities And Derivatives Exchange (NCDEX)</li>
                </ul>
              </div>
            </div>

            {/* Previous LSEG Role */}
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Software Engineer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">London Stock Exchange Group (LSEG)</p>
                </div>
                <div className="text-slate-500 dark:text-slate-400 mt-2 md:mt-0">
                  <p>January 2018 - March 2020</p>
                  <p>Malabe, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Programming Languages</h3>
              <div className="space-y-3">
                {['C++', 'Java', 'Python'].map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-slate-600 dark:text-slate-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Languages</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 dark:text-slate-300">English (Full Professional)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 dark:text-slate-300">Sinhalese (Native)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-slate-600 dark:text-slate-300">Tamil (Elementary)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Coming Soon"
              description="Interactive games and applications will be added here"
              isComingSoon={true}
            />
            <ProjectCard
              title="More Projects"
              description="Additional portfolio items coming soon"
              isComingSoon={true}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            I&apos;m always interested in discussing new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:kmchmk@gmail.com"
              className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/kmchmk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a 
              href="tel:+94717899366"
              className="flex items-center justify-center border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-300">
            © 2025 Chanaka Karunarathne. Built with Next.js and hosted on Vercel.
          </p>
        </div>
      </footer>
    </div>
  );
}
