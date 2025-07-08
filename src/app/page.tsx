import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden mb-6 sm:mb-8">
            <Image 
              src="/profile.jpg" 
              alt="Chanaka Karunarathne - Senior Software Engineer and Digital Nomad" 
              width={128} 
              height={128} 
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-2">
            Chanaka Karunarathne
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-2">@kmchmk &middot; Chiang Mai, Thailand</p>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Senior Software Engineer at Favorite Medium. Digital nomad & content creator.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg transition-colors">
              Contact
            </a>
            <a href="https://linkedin.com/in/kmchmk" target="_blank" rel="noopener noreferrer" className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 px-6 sm:px-8 py-3 rounded-lg transition-colors">
              LinkedIn
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="https://github.com/kmchmk" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">GitHub</a>
            <a href="https://twitter.com/kmchmk" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">Twitter</a>
            <a href="https://youtube.com/@kmchmk" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">YouTube</a>
            <a href="https://tiktok.com/@kmchmk" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">TikTok</a>
            <a href="https://medium.com/@kmchmk" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors">Medium</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-12 sm:py-16 px-4 bg-white dark:bg-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">About</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-4">
            Sri Lankan software engineer & digital nomad based in Chiang Mai. 7+ years in Fintech, AI, Web3.
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Creating tech & travel content on <a href="https://youtube.com/@kmchmk" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900 dark:hover:text-white transition-colors">YouTube</a> and <a href="https://tiktok.com/@kmchmk" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-900 dark:hover:text-white transition-colors">TikTok</a>.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">Connect</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            <a href="mailto:kmchmk@gmail.com" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm sm:text-base">Email</a>
            <a href="https://wa.me/94717899366" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm sm:text-base">WhatsApp</a>
            <a href="https://t.me/kmchmk" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm sm:text-base">Telegram</a>
            <a href="https://linkedin.com/in/kmchmk" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm sm:text-base">LinkedIn</a>
            <a href="https://github.com/kmchmk" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors text-sm sm:text-base">GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-slate-300 text-sm sm:text-base">© 2025 Chanaka Karunarathne (@kmchmk)</p>
        </div>
      </footer>
    </main>
  );
}
