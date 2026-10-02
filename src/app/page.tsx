import Image from "next/image";

const projects = [
  { name: "Bridge Thai", category: "Language learning", description: "Practice Thai and English through role-play, with conversations that adapt to who is speaking, their relationship, and the setting.", tags: ["Next.js", "Postgres", "Audio"], href: "https://github.com/kmchmk/bridge-thai", number: "01" },
  { name: "Saroop Local", category: "AI · Productivity", description: "Turn Thai meeting recordings into transcripts and reports. Process audio on your device in offline mode, or choose cloud processing.", tags: ["WebGPU", "Speech to text", "Browser AI"], href: "https://github.com/kmchmk/meeting-report-generator", number: "02" },
  { name: "FM Playlist", category: "Team collaboration", description: "Contributed playlist sharing, likes and comments, autoplay, multilingual support, and Google Chat notifications for a team music-sharing app.", tags: ["Next.js", "Postgres", "Clerk"], href: "https://github.com/favoritemedium/fm-playlist", number: "03" },
];

const countries = [
  { name: "Sri Lanka", flag: "🇱🇰", note: "Home country" },
  { name: "Cambodia", flag: "🇰🇭" },
  { name: "Indonesia", flag: "🇮🇩" },
  { name: "Laos", flag: "🇱🇦" },
  { name: "Malaysia", flag: "🇲🇾" },
  { name: "Nepal", flag: "🇳🇵" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Vietnam", flag: "🇻🇳" },
];

const socialLinks = [
  ["LinkedIn", "https://linkedin.com/in/kmchmk"],
  ["GitHub", "https://github.com/kmchmk"],
  ["YouTube", "https://youtube.com/@kmchmk"],
  ["TikTok", "https://tiktok.com/@kmchmk"],
  ["Medium", "https://medium.com/@kmchmk"],
  ["X", "https://twitter.com/kmchmk"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#" aria-label="kmchmk home">kmchmk<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#travel">Travel</a>
          <a href="#contact">Connect <span aria-hidden="true">↗</span></a>
        </nav>
      </header>
      <main id="main">
        <section className="hero section-wrap" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">Software engineer · Traveler · Creator</p>
            <h1 id="intro-title">Hi, I’m Chanaka.<br /><span>I build. I explore.</span></h1>
            <p className="intro">I’m Chanaka Karunarathne, a Sri Lankan software engineer and digital nomad. This is a little corner of the internet for my projects, places I’ve visited, and ways to connect.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my projects <span aria-hidden="true">↘</span></a>
              <a className="text-link" href="mailto:kmchmk@gmail.com">Say hello <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <Image src="/profile.jpg" alt="Chanaka Karunarathne" width={400} height={480} priority className="portrait" />
            </div>
            <p className="portrait-caption"><span aria-hidden="true">✳</span> Curious about code &amp; the world.</p>
          </div>
        </section>

        <section id="projects" className="section-wrap content-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <div><p className="eyebrow">01 / Things I build</p><h2 id="projects-title">Selected projects</h2></div>
            <a className="text-link" href="https://github.com/kmchmk" target="_blank" rel="noopener noreferrer">More on GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline"><span>{project.category}</span><span className="project-number" aria-hidden="true">{project.number}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul className="tag-list" aria-label={project.name + " technologies"}>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">Explore the source <span aria-hidden="true">↗</span><span className="sr-only"> for {project.name}</span></a>
              </article>
            ))}
          </div>
          <div className="experience-heading">
            <h3>Professional experience</h3>
            <p>Contributions across conversational AI, interactive experiences, and device software.</p>
          </div>
          <div className="project-grid">
            <article className="project-card">
              <div className="project-topline"><span>Conversational AI</span></div>
              <h3>Voice &amp; avatar applications</h3>
              <p>Contributed to conversational interfaces and AI-assisted applications.</p>
              <ul className="tag-list" aria-label="Conversational AI technologies"><li>React</li><li>TypeScript</li><li>Gemini</li><li>OpenAI</li><li>Speech processing</li></ul>
            </article>
            <article className="project-card">
              <div className="project-topline"><span>Interactive experiences</span></div>
              <h3>Media &amp; cloud applications</h3>
              <p>Contributed to camera-based experiences and web applications backed by cloud services.</p>
              <ul className="tag-list" aria-label="Media and cloud technologies"><li>React</li><li>TypeScript</li><li>AWS Amplify</li><li>S3</li><li>DynamoDB</li><li>Lambda</li></ul>
            </article>
            <article className="project-card">
              <div className="project-topline"><span>Device software</span></div>
              <h3>Touchscreen &amp; kiosk applications</h3>
              <p>Contributed to touch-first applications and device management software.</p>
              <ul className="tag-list" aria-label="Device software technologies"><li>Electron</li><li>Linux</li><li>TypeScript</li><li>Postgres</li><li>Docker</li></ul>
            </article>
          </div>
        </section>

        <section id="travel" className="travel-section" aria-labelledby="travel-title">
          <div className="section-wrap">
            <div className="section-heading">
              <div><p className="eyebrow">02 / Beyond the screen</p><h2 id="travel-title">Places I’ve been</h2></div>
              <p className="country-count"><strong>{countries.length - 1}</strong> countries visited<br /><span>+ Sri Lanka, home</span></p>
            </div>
            <p className="section-intro">A growing collection of countries I’ve visited, with Sri Lanka always part of the story.</p>
            <ul className="country-grid" aria-label="Countries visited">
              {countries.map((country) => (
                <li key={country.name}><span className="country-flag" aria-hidden="true">{country.flag}</span><span>{country.name}{country.note && <small>{country.note}</small>}</span></li>
              ))}
            </ul>
            <a className="text-link travel-link" href="https://youtube.com/@kmchmk" target="_blank" rel="noopener noreferrer">Tech &amp; travel on YouTube <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">03 / Let’s connect</p>
          <h2 id="contact-title">Good things start<br />with a conversation.</h2>
          <a className="email-link" href="mailto:kmchmk@gmail.com">kmchmk@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="social-links">{socialLinks.map(([name, href]) => <a key={name} href={href} target="_blank" rel="noopener noreferrer">{name}<span aria-hidden="true">↗</span></a>)}</div>
          <div className="messaging-links"><a href="https://t.me/kmchmk" target="_blank" rel="noopener noreferrer">Telegram</a><a href="https://wa.me/94717899366" target="_blank" rel="noopener noreferrer">WhatsApp</a></div>
        </section>
      </main>
      <footer className="site-footer section-wrap"><p>© {new Date().getFullYear()} Chanaka Karunarathne</p><a href="#main">Back to top <span aria-hidden="true">↑</span></a></footer>
    </>
  );
}
